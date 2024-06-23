import React from 'react';

function HowItWorks() {
  return (
    <div className='howitworks bg-gray-800'>
      <div className='container flex justify-evenly text-white'>
        {/* How It Works Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-center">How It Works</h2>
          {/* Steps with gaps */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <p className="mb-2">Step 1:</p>
              <p>Start a mock interview session.</p>
            </div>
            <div className="mb-8">
              <p className="mb-2">Step 2:</p>
              <p>Receive feedback and tips.</p>
            </div>
            <div>
              <p className="mb-2">Step 3:</p>
              <p>Improve your interview skills.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
