import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="w-full h-640">
      <video
        src={videoUrl}
        controls
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
};

export default VideoPlayer;
