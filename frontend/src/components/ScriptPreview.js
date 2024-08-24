import React from 'react';

function ScriptPreview({ script, onConfirm, onModify }) {
  
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Generated Comedy Script</h2>
      <div className="text-lg mb-6">{script}</div>
      
      <div className="flex justify-between">
        <button
          onClick={onConfirm}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded font-semibold"
        >
          Confirm and Generate Video
        </button>
        <button
          onClick={onModify}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded font-semibold"
        >
          Regenerate Script
        </button>
      </div>
    </div>
  );
}

export default ScriptPreview;
