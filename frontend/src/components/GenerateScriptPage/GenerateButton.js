import React from 'react';

const GenerateButton = ({ onClick }) => {
  return (
    <>
    <button
      onClick={onClick}
      className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
    >
      Generate Script
    </button>
    <button
    onClick={onClick}
    className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
  >
    Generate Video
  </button>
  </>
  );
};

export default GenerateButton;
