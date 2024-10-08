// import React from 'react';
const boxes = [1, 2]; // Array to map through
const data = [
    { id: 1, name: "Women’s Corner", age: 25 },
    { id: 2, name: "Men’s Corner", age: 30 },
    { id: 3, name: "Baby Item", age: 22 },
];

const Auctions = () => {
    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-[30px]">Auctions</h1>
            <h1 className="text-[17px]">Bid, Win, Smile: Your Ultimate Auction Experience</h1>
            <div className="flex gap-4">
                {/* Left */}
                <div className="w-1/3">
                    <div className="w-[456px] h-[504px] bg-gray-300 rounded-lg"></div>
                </div>
                {/* Middle */}
                <div className="w-1/3">
                    <div className="grid grid-cols-1 gap-4">
                        {boxes.map((box, index) => (
                            <div
                                key={index}
                                className="w-[456px] h-[240px] bg-gray-300 border border-gray-300 rounded-lg shadow-lg"
                            ></div>
                        ))}
                    </div>
                </div>
                {/* Right */}
                <div className="w-1/3 mt-[90px]">
                    <div className="flex flex-col">
                        <div className="h-[240px] w-[456px]">
                            <div>
                                <h1 className="font-semibold text=[17px] mb-2">Auctions About to End</h1>
                            </div>
                            <div className="flex gap-12">
                                {data.map((item, index) => (
                                    <div key={index}>
                                        <div className="h-[112px] w-[112px] bg-gray-300 rounded"></div>

                                        <h1 className="text-[13px] text-black-700 break-words text-center ">
                                            {item.name}
                                        </h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="h-[240px] w-[456px]">
                            <div>
                                <h1 className="font-semibold text=[17px] mb-2">New in Auction</h1>
                            </div>
                            <div className="flex gap-12">
                                {data.map((item, index) => (
                                    <div key={index}>
                                        <div className="h-[112px] w-[112px] bg-gray-300 rounded"></div>

                                        <h1 className="text-[13px] text-black-700 break-words text-center ">
                                            {item.name}
                                        </h1>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auctions;
