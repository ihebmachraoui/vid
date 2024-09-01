"use client";
import React, { useState, useEffect } from "react";
import * as Images from "../../../assets/index";
import axios from "axios";

function page() {
  const [appointmentId, setAppointmentId] = useState(null);
  const [appointment, setAppointment] = useState({
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
    age: "30",
    date: "2024-09-15",
    time: "14:00",
    consultation: "General check-up",
    urgent: "no",
  });
  const [paymentId, setPaymentId] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      const queryParams = new URLSearchParams(window.location.search);
      const match = pathname.match(/\/appointment\/payment\/([^/?]+)/);
      const id = match ? match[1] : null;
      setAppointmentId(id);
      const paymentIdParam = queryParams.get("payment_id");
      setPaymentId(paymentIdParam);

      if (paymentIdParam) {
        axios
          .get(`https://sociosolution-api.vercel.app/verify-payment/${paymentIdParam}`)
          .then((response) => {
            if (response.data.success) {
              console.log("Payment verified");
            } else {
              window.location.href = "/";
            }
          })
          .catch((error) => {
            console.error("Error verifying payment:", error.message);
            window.location.href = "/";
          });
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

  const printDiv = () => {
    const printableContent = document.querySelector('.printable');
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print</title>');
    const styleSheets = document.querySelectorAll('link[rel="stylesheet"]');
    styleSheets.forEach(sheet => {
      printWindow.document.write('<link rel="stylesheet" href="' + sheet.href + '" type="text/css" />');
    });
    printWindow.document.write('<style>body { font-family: Arial, sans-serif; } .printable { margin: 20px; }</style>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(printableContent.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <div className="bg-main">
      <div className="container header">
        <div className="relative mt-24 bg-[#f9f9f9] px-4 sm:px-8 sm:py-12">
          <h1>Payment Success</h1>
          <p>
            Thank you for completing your payment. Our team will reach out to
            you shortly to provide further details and assist you with the next
            steps in the process. We appreciate your patience and look forward
            to guiding you through the procedure.
          </p>
          <div className="flex items-center justify-center">
            <img src={Images.Checked.src} alt="Checked" className="h-12 w-auto" />
          </div>
        </div>
        <div
          className="-z-10 absolute top-0 left-0 mt-10 h-96 w-full bg-cover bg-center bg-repeat-round"
          style={{ backgroundImage: `url(${Images.Payment.src})` }}></div>
      </div>

      <div className="printable">
        <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
          <h1 className="font-bold text-2xl my-4 text-center text-secondary">
            SOCIALLY Services
          </h1>
          <hr className="mb-2" />
          <div className="invoice-header">
            <h1 className="text-lg font-bold">Invoice</h1>
            <div className="text-gray-700">
              <div>Date: {new Date().toLocaleDateString()}</div>
              <div>Invoice #: INV{appointmentId?.slice(-4)}</div>
            </div>
          </div>
          <div className="bill-to">
            <h2 className="text-lg font-bold mb-4">Bill To:</h2>
            <div className="details">
              {appointment.firstName + " "}{appointment.lastName}
            </div>
            <div className="details">{appointment.email}</div>
          </div>
          <div className="description">
            <h2 className="text-lg font-bold mb-2">Description:</h2>
            <div className="details">{appointment.consultation}</div>
          </div>
          <table className="w-full mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left font-bold text-gray-700 p-2">Service</th>
                <th className="text-right font-bold text-gray-700 p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left text-gray-700 p-2 border-t border-gray-300">
                  Individual Therapy {appointment.urgent ? "-Urgent" : ""}
                </td>
                <td className="text-right text-gray-700 p-2 border-t border-gray-300">$100.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="text-left font-bold text-gray-700 p-2 border-t border-gray-300">Total</td>
                <td className="text-right font-bold text-gray-700 p-2 border-t border-gray-300">$100.00</td>
              </tr>
            </tfoot>
          </table>
          <div className="text-center">
            <button className="print-button" onClick={printDiv}>
              Print Invoice
            </button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <img src={Images.SocialImage.src} alt="Footer Logo" />
      </footer>
    </div>
  );
}

export default page;
