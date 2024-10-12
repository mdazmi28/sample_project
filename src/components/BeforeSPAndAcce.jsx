// import React from 'react';
const boxes = [1, 2, 3, 4]; // Array to map through
const BeforeSPAndAcce = () => {
  return (
    <div className='container mx-[100px]'>
      <div className="flex gap-4 rounded container mx-auto h-[px]">
      {/* Left */}
      <div className="w-[25%]">
        <div className="h-[300px] bg-gray-300 rounded-lg"></div>
      </div>

      {/* Right */}
      <div className="w-[75%]">
        <div className="grid grid-cols-2 gap-4">
          {boxes.map((box, index) => (
            <div
              key={index}
              className=" h-[140px] bg-gray-300 border border-gray-400 rounded-lg shadow-lg"
            ></div>
          ))}
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default BeforeSPAndAcce;
