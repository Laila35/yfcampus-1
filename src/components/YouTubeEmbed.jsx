// components/YouTubeEmbed.js
import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <div 
      className="flex justify-center items-center" 
      style={{ height: '100vh' }} // This makes sure it's vertically centered in the full viewport
    >
      <div className="relative" style={{ paddingTop: '56.25%' /* 16:9 aspect ratio */, width: '100%', maxWidth: '800px' }}>
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 mt-16"
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
