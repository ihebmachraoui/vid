import { useState, useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { TiTick } from "react-icons/ti";
import Button from "../../constants/Button/Button";
import Facts from "../Facts/Facts";
import PlayStop from "../../constants/PlayStop/PlayStop";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie"; // assuming you're using js-cookie to manage cookies

export default () => {
	const { t } = useTranslation("global"); // Using i18next for translations
	const [isPlaying, setIsPlaying] = useState(false);
	const [initialHover, setInitialHover] = useState(true);
	const videoRef = useRef(null);

	const togglePlayPause = () => {
		if (isPlaying) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
		setIsPlaying(!isPlaying);
		setInitialHover(false);
	};

	useEffect(() => {
		// Get the language from the cookie or default to 'en'
		const lang = Cookies.get("lang") || "en";

		// Initialize the video player
		const player = videojs(videoRef.current, {
			controls: true,
			autoplay: false,
			preload: "none",
			poster:
				"https://res.cloudinary.com/dzuvxegtt/image/upload/v1727242066/about-hadil_y9gtzu.webp",
			sources: [
				{
					src: `https://sociosolution-api.vercel.app/video?lang=${lang}`,
					type: "video/mp4",
				},
			],
			controlBar: {
				playToggle: false,
				volumePanel: true,
				fullscreenToggle: true,
			},
		});
	}, []);

	const facts = [t("About.facts.0"), t("About.facts.1"), t("About.facts.2")];

	return (
<>
  <section className="bg-white relative"> {/* No h-screen or absolute positioning */}
    <div className="grid grid-cols-1 lg:grid-cols-[60%,40%] mx-auto w-full min-h-screen"> {/* Changed h-screen to min-h-screen */}
      {/* Video Section */}
      <div className="relative w-full bg-[#83cc61] group flex flex-col justify-center items-center">
        <div className="relative w-full h-56 md:h-72 lg:h-full">
          <video
            ref={videoRef}
            className="video-js absolute w-full h-full object-cover !bg-white"
            id="my-player"
            data-setup="{}"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
            initialHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <PlayStop isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
        </div>
      </div>

      {/* Text Content Section */}
      <div className="w-full px-6 py-8 rounded-md sm:px-12 md:px-16 lg:h-full dark:bg-gray-50 flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold capitalize lg:text-5xl">
          {t("About.subtitle").split(" ").slice(0, -1).join(" ")}
          <span className="text-[#83cc61]">&nbsp;{t("About.subtitle").split(" ").slice(-1)}</span>
        </h1>
        <p className="my-8 text-neutral-600 leading-8">
          <span className="font-semibold text-left bg-[#ffb7ce] rounded-r-full p-1 me-2 text-white">
            SociAlly{" "}
          </span>
          {t("About.description")}
        </p>

        <Facts />

        <Button
          href="#"
          text={t("About.button")}
          className="w-full text-center font-medium btn-round bg-[#296747] uppercase"
        />
      </div>
    </div>
  </section>
</>

	);
};
