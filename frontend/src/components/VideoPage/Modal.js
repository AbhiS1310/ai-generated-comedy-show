import React from 'react';

const Modal = ({ title, children, closeModal }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal} // Close modal when clicking the background
    >
      <div
        className="bg-white p-6 rounded shadow-lg relative z-50 max-w-md w-full"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {children}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={closeModal}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
