import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-800 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2 px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Mock Interview AI</h1>
          <p className="text-lg mb-8">Enhance Your Confidence Before The Interview.</p>
          <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
           Get Started
         </button>
        </div>
        
        {/* Right Section (Chatbot System Placeholder) */}
        <div className="md:w-1/2 px-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            {/* Replace with your actual chatbot system component */}
            <div className="w-64 h-64 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
