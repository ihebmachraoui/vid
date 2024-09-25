import React from "react";
import "./PlayStop.css"; // You can keep your existing CSS if needed

const PlayStop = ({ isPlaying, togglePlayPause }) => {
  const stopIcon = (
    <div className="flex items-center justify-center w-full h-full">
<svg fill="#ffb7ce" width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.432 7.5h4.547v17h-4.547zM9.022 7.5h4.545v17H9.022z"></path></g></svg>    </div>
  );

  return (
    <div className="play-toggle flex  items-center cursor-pointer" onClick={togglePlayPause}>
      <div className="play-circle flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
        {isPlaying ? stopIcon : <div className="play-icon"></div>}
      </div>
      <span className="text-center mt-2">
        <i>Watch our</i>
        <br />
        <strong>Sociologist</strong>
      </span>
    </div>
  );
};

export default PlayStop;
