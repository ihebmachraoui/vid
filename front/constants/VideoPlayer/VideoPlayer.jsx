import React, { useRef, useEffect, useState } from "react";



export default function VideoPlayer({videoRef}) {



  useEffect(() => {
    const player = videojs(videoRef.current, {
      sources: [
        {
          src: "https://res.cloudinary.com/dzuvxegtt/video/upload/Welcome_to_SociAlly_pvldkq.mp4",
          type: "video/mp4",
        },
      ],
    });

    // Cleanup function to dispose of Video.js instance
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <>
      <video ref={videoRef} className="video-js" controls />

      
    </>
  );
}