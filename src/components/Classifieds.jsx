// import React from 'react';

const Classifieds = () => {
    return (
        <div className='container mx-[100px]'>
            <div className="flex flex-col gap-4 rounded container mx-auto h-[px]">
            <h1 className="font-bold text-[30px]">Classifieds</h1>
            <h1 className="text-[17px]">Sell your own product</h1>
            <div className="flex gap-4">
                {/* Left */}
                <div className="w-1/2">
                    <div className="h-[252px] bg-gray-300 rounded"></div>
                </div>
                {/* Right */}
                <div className="w-1/2">
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex flex-col h-[252px] gap-4">
                            <h1>New in Classifieds</h1>
                            <div className="h-[288px] bg-gray-300"></div>

                            <div className="flex items-center justify-center rounded-full border border-gray-200 h-[40px] w-[164px] mt-10 cursor-pointer">
                                <span className="text-center">New Products</span>
                            </div>

                        </div>
                        <div className="flex flex-col h-[252px] gap-4">
                            <h1>Used Products</h1>
                            <div className="h-[288px] bg-gray-300"></div>
                            <div className="flex items-center justify-center rounded-full border border-gray-200 h-[40px] w-[164px] mt-10 cursor-pointer">
                                <span className="text-center">View all</span>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
        </div>
        
    );
};

export default Classifieds;