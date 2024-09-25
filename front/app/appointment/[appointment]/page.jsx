"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import * as images from "../../../assets/index";
import axios from "axios";
import Button from "../../../constants/Button/Button";
import Modal from "../../../constants/Modal/Modal";

function App() {
  const { t } = useTranslation("global"); // Destructure t from useTranslation hook

  const [paymentFailed, setPaymentFailed] = useState(false);
  const [appointmentId, setAppointmentId] = useState("");
  const [appointment, setAppointment] = useState({
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
    age: "30",
    date: "2024-09-15",
    time: "14:00",
    consultation: "General check-up",
    urgent: "no", // default value for radio button
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      const match = pathname.match(/\/appointment\/([^/]+)/);
      const id = match ? match[1] : null;
      setAppointmentId(id);

      const queryParams = new URLSearchParams(window.location.search);
      const paymentId = queryParams.get("payment_id");

      if (paymentId) {
        setPaymentFailed(true);
      }
    }
  }, []);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await axios.get(
          `https://sociosolution-api.vercel.app/appointment/${appointmentId}`
        );
        setAppointment(response.data);
      } catch (err) {
        console.log("Failed to fetch appointment data.");
      }
    };

    if (appointmentId) {
      fetchAppointment();
    }
  }, [appointmentId]);

  const generateReq = async () => {
    try {
      const amount = 100;
      const response = await axios.post(
        "https://sociosolution-api.vercel.app/generate-payment",
        { amount, appointmentId }
      );
      const { link } = response.data.result;

      if (link) {
        if (typeof window !== "undefined") {
          window.location.href = link;
        } else {
          console.error("Window object is not available");
        }
      } else {
        console.error("No link received in response");
      }
    } catch (error) {
      console.error("Error generating payment:", error.message);
    }
  };

  return (
    <>
      {paymentFailed && (
        <Modal setPaymentFailed={setPaymentFailed} paymentFailed={paymentFailed} />
      )}
      <div className="mx-auto max-w-screen-lg pt-8 text-center bg-white">
        <div className="relative mt-24 bg-[#f9f9f9] px-4 sm:px-8 sm:py-12">
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t("appoint.appointment.continuePayment")}
          </h1>
          <p className="mt-4 pb-2 text-xs text-gray-600 leading-6 px-4 sm:px-12 sm:text-base sm:leading-8">
            {t("appoint.appointment.paymentInstructions")}
          </p>
        </div>
        <div
          className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full bg-cover bg-center bg-repeat-round"
          style={{ backgroundImage: `url(${images.Payment.src})` }}
        ></div>

        <div className="flex flex-wrap items-center justify-center space-x-4 space-y-2">
          <img
            src="https://d17.tn/images/logod17bnk.png"
            alt="D17"
            className="h-8 w-auto mt-1"
          />
          <img
            src="https://www.biat.com.tn/sites/default/files/logobiat_0_0.png"
            alt="BIAT"
            className="h-8 w-auto"
          />
          <img
            src="https://www.attijaribank.com.tn/sites/default/files/Logo_attijari_0.png"
            alt="Attijari"
            className="h-8 w-auto"
          />
          <img
            src="https://www.bh.com.tn/sites/all/themes/bhabitat/logo.png"
            alt="BH"
            className="h-8 w-auto"
          />
          <img
            src="https://www.banquezitouna.com/themes/custom/particuliers/logo.svg"
            alt="Zitouna"
            className="h-8 w-auto"
          />
        </div>
      </div>

      <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
        <h1 className="font-bold text-2xl my-4 text-center text-secondary">
          {t("appoint.appointment.invoiceTitle")}
        </h1>
        <hr className="mb-2" />
        <div className="flex justify-between mb-6">
          <h1 className="text-lg font-bold">{t("appoint.appointment.invoice")}</h1>
          <div className="text-gray-700">
            <div>{t("appoint.appointment.date")}: {new Date().toLocaleDateString()}</div>
            <div>{t("appoint.appointment.invoiceNumber")}: INV{appointmentId.slice(-4)}</div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4">{t("appoint.appointment.billTo")}</h2>
          <div className="text-gray-700 mb-2">
            {appointment.firstName + " " + appointment.lastName}
          </div>
          <div className="text-gray-700">{appointment.email}</div>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">{t("appoint.appointment.description")}</h2>
          <div className="text-gray-700">{appointment.consultation}</div>
        </div>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="text-left font-bold text-gray-700">{t("appoint.appointment.service")}</th>
              <th className="text-right font-bold text-gray-700">{t("appoint.appointment.amount")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left text-gray-700">
                {t("appoint.appointment.individualTherapy")}
                {appointment.urgent === "yes" ? ` ${t("appoint.appointment.urgent")}` : ""}
              </td>
              <td className="text-right text-gray-700">$100.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="text-left font-bold text-gray-700">{t("appoint.appointment.total")}</td>
              <td className="text-right font-bold text-gray-700">$100.00</td>
            </tr>
          </tfoot>
        </table>
        <div className="flex flex-col items-center mb-2">
          <Button
            text={t("appoint.appointment.confirm")}
            className="bg-[#296747] rounded-md cursor-pointer !py-2"
            onClick={generateReq}
          />
        </div>

        <div className="text-gray-700 mb-2">{t("appoint.appointment.thankYou")}</div>
        <div className="text-gray-700 text-sm">{t("appoint.appointment.remitPayment")}</div>
        <div className="flex flex-col mt-4">
          <img
            src="https://sociosolution.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.248c666a.png&w=256&q=75"
            className="h-10 w-auto self-center"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
}

export default App;
