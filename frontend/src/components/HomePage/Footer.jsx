import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-blue-600 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 ComedyShow. All rights reserved.</p>
        <p>Contact us at: <a href="mailto:contact@comedyshow.com" className="underline">contact@comedyshow.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
