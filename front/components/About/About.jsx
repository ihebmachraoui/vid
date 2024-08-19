import { useState, useRef } from "react";
import { TiTick } from "react-icons/ti";
import Button from "../../constants/Button/Button";
import Facts from "../Facts/Facts";
import PlayStop from "../../constants/PlayStop/PlayStop";

export default () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const facts = [
    "Comprehensive Psychotherapy Services.",
    "Experienced and Compassionate Team.",
    "Holistic Approach to Mental Wellness.",
  ];

  return (
    <>
      <section className="dark:bg-gray-100 dark:text-gray-800 relative">
        <div className="min-h-screen grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
          <div className="relative xl:col-span-3 bg-[#83cc61] group">
            <video
              ref={videoRef}
              src="https://videos.pexels.com/video-files/8375608/8375608-uhd_2732_1440_25fps.mp4"
              className="object-cover w-full h-full"
              autoPlay
              loop
              muted
            >
              Your browser does not support the video tag.
            </video>

            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <PlayStop
                isPlaying={isPlaying}
                togglePlayPause={togglePlayPause}
              />
            </div>
          </div>
          <div className="w-full px-6 py-8 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
            <span className="rounded-full text-black font-medium px-3 mb-2 bg-[#e1ffd4] py-2">
              About Us
            </span>
            <h1 className="text-6xl font-extrabold mt-8 capitalize dark:text-gray-900">
              Transform your
              <br />
              <span className="text-[#83cc61]"> mental health</span>
            </h1>
            <p className="my-8 text-gray-600 leading-8">
              <span className="font-semibold text-left bg-[#ffb7ce] rounded-r-full p-2 me-2 text-white">
                SociAlly{" "}
              </span>
              Located in Tunis, Tunisia, Socially specializes in offering
              exceptional psychotherapy services. Our dedicated team of
              experienced professionals is committed to supporting your mental
              wellness and personal growth. Trust Socially for all your
              psychotherapy needs in Tunisia.
            </p>
            <div className="pb-4">
              {facts.map((fact, index) => (
                <p key={index} className="flex items-center text-gray-800 py-3">
                  <TiTick className="text-[#ffb7ce] text-2xl mr-2" />
                  {fact}
                </p>
              ))}
            </div>

            <Facts />

            <Button
              href="#"
              text="Learn More"
              className="w-full text-center font-medium"
            />
          </div>
        </div>
      </section>
    </>
  );
};
