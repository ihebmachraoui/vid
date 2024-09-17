import React, { useRef, useEffect,useState } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const stopIcon = (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
  </svg>
  );

  const playIcon = (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
  </svg>
  );

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.muted = false; // Unmute when play is triggered
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.error('Error trying to play the audio:', error);
        });
      }
    }
  };
  

  return (
<div className="fixed bottom-4 right-4 lg:right-auto lg:left-4 flex items-center justify-center z-50">

      <audio ref={audioRef} muted>
        <source src="https://incompetech.com/music/royalty-free/mp3-royaltyfree/Fluidscape.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button 
        onClick={toggleAudio} 
        className="bg-gray-400 text-white p-4 rounded-full shadow-lg opacity-40 hover:opacity-100 hover:bg-gray-500 transition-colors duration-300"
      >
        {isPlaying ? stopIcon : playIcon}
      </button>
    </div>
  );
};

export default AudioPlayer;
