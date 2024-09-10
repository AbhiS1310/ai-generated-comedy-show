import React from 'react';
import VideoPlayer from './VideoPlayer'; // Ensure you have a VideoPlayer component or use a HTML <video>

const VideoContainer = ({ videoUrl }) => {
  return (
    <div className="w-2/3 bg-white shadow-md rounded-lg p-6 ml-4">
      <h2 className="text-xl font-bold mb-4">Generated Video</h2>
      {videoUrl ? (
        <VideoPlayer videoUrl={videoUrl} />
      ) : (
        <p className="text-gray-500">No video generated yet.</p>
      )}
    </div>
  );
};

export default VideoContainer;
