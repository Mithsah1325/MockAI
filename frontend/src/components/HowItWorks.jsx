import React from 'react';

function HowItWorks() {
  return (
    <div className='howitworks bg-gray-800'>
      <div className='container flex justify-evenly text-white'>
        {/* How It Works Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-4 text-center">How It Works</h2>
          {/* Steps with gaps */}
          <div className=" flex justify-between text-center">
            <div className="mb-8 border-2 border-white rounded-lg p-4 m-2">
              <p className="mb-2 font-bold	">Step 1:</p>
              <p>Start a mock interview session.</p>
            </div>
            <div className="mb-8 border-2 border-white rounded-lg p-4 m-2">
              <p className="mb-2 font-bold	">Step 2:</p>
              <p>Receive feedback and tips.</p>
            </div>
            <div className='mb-8 border-2 border-white rounded-lg p-4 m-2'> 
              <p className="mb-2 font-bold	">Step 3:</p>
              <p>Improve your interview skills.</p>
            </div>
            <div className='mb-8 border-2 border-white rounded-lg p-4 m-2'> 
              <p className="mb-2 font-bold	">Step 4:</p>
              <p>See Your Result & Improve.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
