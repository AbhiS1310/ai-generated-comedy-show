import React from 'react';

const ScriptDisplay = ({ script }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg h-full">
      <h3 className="text-2xl font-semibold mb-4">Generated Script</h3>
      <div className="bg-gray-100 p-4 rounded-lg h-96 overflow-y-auto">
        <pre className="whitespace-pre-wrap">{script || "No script generated yet. Please generate a script."}</pre>
      </div>
    </div>
  );
};

export default ScriptDisplay;
