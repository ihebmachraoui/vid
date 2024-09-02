import * as images from "../../assets/index";

const Testimonial = () => {
  return (
    <>
      <section className="pt-40 pb-32 relative">
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat opacity-85 bg-fixed"
          style={{
            backgroundImage:
              "url(https://madebydesignesia.com/themes/mindthera/images/background/3.webp)",
          }}
        ></div>
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="pb-6">
              <img
                src={images.Logo.src}
                width={150}
                alt="logo"
                className="mx-auto border border-dashed rounded-full"
              />
            </div>
            <figure>
              <blockquote>
                <p className="text-white text-xl font-semibold sm:text-2xl">
                  “Sociology helps us understand the intricate layers of
                  society. It's fulfilling to see how our research and insights
                  can drive positive change and foster deeper connections among
                  people.“
                </p>
              </blockquote>
              <div className="mt-6">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
                  className="w-16 h-16 mx-auto object-cover rounded-full"
                />
                <div className="mt-3">
                  <span className="block text-white font-semibold">Sousou</span>
                  <span className="block text-gray-200 text-sm mt-0.5">
                    Sociologist
                  </span>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
