// import React from 'react';
const data = [
    { id: 1, name: "Women’s Corner", age: 25 },
    { id: 2, name: "Men’s Corner", age: 30 },
    { id: 3, name: "Baby Item", age: 22 },
];

const Auctions = () => {
    return (
        <div className='container mx-[100px]'>
            <div className="flex flex-col gap-4 rounded container mx-auto h-[px] ">
            <div className="flex flex-col">
                <h1 className="font-bold text-[30px] text-gray-400">Auctions</h1>
                <h1 className="text-[17px] text-gray-400">Bid, Win, Smile: Your Ultimate Auction Experience</h1>
                <div className="flex gap-4">
                    {/* Left */}
                    <div className="w-1/3 border border-red">
                        <div className="h-[350px]  bg-gray-300"></div>
                    </div>

                    {/* Middle */}
                    <div className="w-1/3 border border-red">
                        <div className="h-[350px] ">
                            <div className="flex flex-col gap-4">
                                <div className="h-[165px]  bg-gray-300"></div>
                                <div className="h-[165px]  bg-gray-300"></div>
                            </div>
                        </div>

                    </div>

                    {/* Right */}
                    <div className="w-1/3 border border-red">
                        <div className="h-[350px] ">
                            <div className="flex flex-col gap-4">
                                <div className="h-[165px]  p-4">
                                    <div className="flex flex-col gap-4">
                                        <div><h1 className="text-[17px] font-bold">Auctions About to End</h1></div>
                                        <div className="flex gap-5">
                                        {data.map((item, index) => (
                                    <div key={index}>
                                        <div className="h-[60px] w-[60px] bg-gray-300 rounded"></div>

                                        <h1 className="text-[13px] text-black-700 break-words text-center ">
                                            {item.name}
                                        </h1>
                                    </div>
                                ))}
                                            </div>
                                    </div>
                                </div>
                                <div className="h-[165px]  p-4">
                                    <div className="flex flex-col gap-4">
                                        <div><h1 className="text-[17px] font-bold">New In Auctin</h1></div>
                                        <div className="flex gap-5">
                                        {data.map((item, index) => (
                                    <div key={index}>
                                        <div className="h-[60px] w-[60px] bg-gray-300 rounded"></div>

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

                </div>
            </div>

        </div>
        </div>
        
    );
};

export default Auctions;
