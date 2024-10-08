// import React from 'react';
const boxes = [1, 2, 3, 4]; // Array to map through
const BeforeSPAndAcce = () => {
  return (
    <div className="flex">
      {/* Left */}
      <div className="w-1/3">
        <div className="w-[456px] h-[504px] bg-gray-300 rounded-lg"></div>
      </div>

      {/* Right */}
      <div className="w-2/3">
        <div className="grid grid-cols-2 gap-4">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="w-[456px] h-[240px] bg-gray-300 border border-gray-400 rounded-lg shadow-lg"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeforeSPAndAcce;
