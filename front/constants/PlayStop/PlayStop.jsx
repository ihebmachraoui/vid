import React from "react";
import "./PlayStop.css";

const PlayStop = ({ isPlaying, togglePlayPause }) => {
  return (
    <div className="play-toggle" onClick={togglePlayPause}>
      <div className="play-circle">
        <div className="play-icon"></div>
      </div>
      <span>
        <i>Watch our</i>
        <br />
        <strong>Sociologist</strong>
      </span>
    </div>
  );
};

export default PlayStop;
