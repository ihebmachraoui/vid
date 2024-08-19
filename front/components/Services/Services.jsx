import Button from "../../constants/Button/Button";
import * as images from '../../assets/index'
function BgCard({ headline, content, buttonHref, buttonText, imageSrc }) {
  return (
    <div className="flex max-w-md flex-col items-start gap-4 overflow-hidden rounded-2xl border border-slate-200">
      <div
        className="flex w-full items-center h-72 justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
      <div className="flex flex-col items-start gap-3 px-4 py-4">
        <p className="text-xl font-semibold tracking-tight">{headline}</p>
        <p className="text-sm text-slate-500">{content}</p>
        <Button
          href={buttonHref}
          text={buttonText}
          className="w-full text-center self-end p-0"
        />
      </div>
    </div>
  );
}

export default function Preview() {
  return (
    <section className="relative max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32">
        <img
        src={images.FlowerTop.src}
        alt="flower top"
        className="absolute top-0 left-0 w-32 lg:w-96"
      />
      <div className="flex flex-col items-center pt-24">
        <span className="rounded-full text-black font-semibold px-3 mb-2 bg-[#e1ffd4] py-2 text-center">
          Our Services
        </span>
        <h1 className="text-5xl font-extrabold mt-8 capitalize dark:text-gray-900 lg:text-6xl text-center">
          Therapist &<span className="text-[#83cc61] text-7xl grey-qo-regular"> Treatments</span>
        </h1>
      </div>

      <div className="flex flex-col gap-8 py-8">
        <div className="grid w-full grid-flow-row gap-x-0 gap-y-6 sm:max-md:justify-items-center md:grid-cols-2 md:justify-items-start md:gap-6 lg:grid-cols-3">
          <BgCard
            headline="Career Counseling"
            content="Another description of a Service with a Read More."
            buttonHref="#"
            buttonText="This is button"
            imageSrc="https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <BgCard
            headline="Individual Therapy"
            content="Another description of a Service with a Read More."
            buttonHref="#"
            buttonText="Learn More"
            imageSrc="https://madebydesignesia.com/themes/mindthera/images/services/1.webp"
          />
          <BgCard
            headline="Depression Therapy"
            content="Another description of a Service with a Read More."
            buttonHref="#"
            buttonText="Get Started"
            imageSrc="https://madebydesignesia.com/themes/mindthera/images/services/6.webp"
          />

          <BgCard
            headline="Stress management"
            content="Another description of a Service with a Read More."
            buttonHref="#"
            buttonText="This is button"
            imageSrc="https://madebydesignesia.com/themes/mindthera/images/services/4.webp"
          />
          <BgCard
            headline="Anxiety Treatment"
            content="Another description of a Service with a Read More."
            buttonHref="#"
            buttonText="Learn More"
            imageSrc="https://madebydesignesia.com/themes/mindthera/images/services/5.webp"
          />
          <BgCard
            headline="Couples Counseling"
            content="Another description of a Service with a Read More."
            buttonHref="#"
            buttonText="Get Started"
            imageSrc="https://madebydesignesia.com/themes/mindthera/images/services/2.webp"
          />
        </div>
      </div>
    </section>
  );
}
