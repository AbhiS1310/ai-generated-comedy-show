import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
      <div className="flex justify-center space-x-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Free Plan</h3>
          <p className="mb-4">Generate up to 3 scripts per month.</p>
          <p className="text-2xl font-bold mb-4">Free</p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            Choose Plan
          </button>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
          <p className="mb-4">Unlimited script and video generation.</p>
          <p className="text-2xl font-bold mb-4">$9.99/month</p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            Choose Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
