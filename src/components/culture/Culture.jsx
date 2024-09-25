import React from 'react';
import YouTube from 'react-youtube';
import './Culture.css'

const Culture = () => {
  const videoId = "P2iOq2rPPpU?si=W3MBDqbM4HJEntPv"; // Replace this with your actual YouTube video ID

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="live-tv-container">
      <h1>Live TV</h1>
      <div className="video-section">
        <div className="thumbnail-section">
          {/* Rounded image containers */}
          
        </div>
        <YouTube videoId={videoId} opts={opts} />
        <h2>లడ్డూ మీద జోకులా తాట తీస్తా🔴LIVE : Pawan kalyan Serious warning To Hero Karthik On Laddu Issue |DR NEWS</h2>
      </div>
      <button className="contact-button">చందాదారులు</button>
    </div>
  );
};

export default Culture;
