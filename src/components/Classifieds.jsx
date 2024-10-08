// import React from 'react';

const Classifieds = () => {
    return (
        <div>
            <h1 className="font-bold text-[30px]">Classifieds</h1>
            <h1 className="text-[17px]">Sell your own product</h1>
            <div className="flex">
                {/* Left */}
                <div className="w-1/2">
                    <div className="w-[696px] h-[504px] bg-gray-300"></div>
                </div>
                {/* Right */}
                <div className="w-1/2">
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col w-[336px] h-[504px]">
                            <h1>New in Classifieds</h1>
                            <div className="w-[288px] h-[288px] bg-gray-300"></div>

                            <div className="flex items-center justify-center rounded-full border border-black h-[40px] w-[164px] mt-10 cursor-pointer">
                                <span className="text-center">ll New Products</span>
                            </div>

                        </div>
                        <div className="flex flex-col w-[336px] h-[504px]">
                            <h1>Used Products</h1>
                            <div className="w-[288px] h-[288px] bg-gray-300"></div>
                            <div className="flex items-center justify-center rounded-full border border-black h-[40px] w-[164px] mt-10 cursor-pointer">
                                <span className="text-center">View all</span>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Classifieds;