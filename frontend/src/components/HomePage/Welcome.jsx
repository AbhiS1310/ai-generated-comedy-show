import React from 'react';

const Welcome = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url('https://media.licdn.com/dms/image/C4D12AQE8B9-Hz7bwqA/article-cover_image-shrink_720_1280/0/1645541458958?e=2147483647&v=beta&t=X10DeCY81cKkrT8UmHu29zLPdW03fE1XB5YCBrAmb4Q')` }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Comedy Central!</h1>
        <p className="text-xl mb-8">
          Generate hilarious comedy scripts and watch them come to life.
        </p>
        <a
          href="/generate-script"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Welcome;
