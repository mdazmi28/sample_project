// import React from 'react';
const data = [
    { id: 1, name: "Headphones", age: "Upto 40% discount" },
    { id: 2, name: "Kid’s bicycle (girls) & accessories", age: "From $0.99" },
    { id: 3, name: "Women Tops", age: "Upto 40% discount" },
    { id: 4, name: "Women Tops", age: "Upto 40% discount" },

];
const dataViewScroll = [
    { id: 1, name: "Headphones", age: "Upto 40% discount" },
    { id: 2, name: "Kid’s bicycle (girls) & accessories", age: "From $0.99" },
    { id: 3, name: "Women Tops", age: "Upto 40% discount" },
    { id: 4, name: "Women Tops", age: "Upto 40% discount" },
    { id: 4, name: "Women Tops", age: "Upto 40% discount" },
    { id: 4, name: "Women Tops", age: "Upto 40% discount" },
    { id: 4, name: "Women Tops", age: "Upto 40% discount" },
    { id: 4, name: "Women Tops", age: "Upto 40% discount" },
    { id: 4, name: "Women Tops", age: "Upto 40% discount" },
    { id: 4, name: "Women Tops", age: "Upto 40% discount" },
    { id: 4, name: "Women Tops", age: "Upto 40% discount" },

];

const SmartPhoneAndAcc = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 pb-4">
                <div>
                    <h1 className="text-[30px] font-bold font-lato">Smartphone & Accessories</h1>
                </div>
                {/* Middle */}
                <div className="flex gap-4">
                    <h1 className="text-[13px] text-blue-600 font-bold">iPhones</h1>
                    <h1 className="text-[13px] text-blue-600 font-bold">Smartphones under $200</h1>
                    <h1 className="text-[13px] text-blue-600 font-bold">Free Gifts</h1>
                    <h1 className="text-[13px] text-blue-600 font-bold">Charger</h1>
                    <h1 className="text-[13px] text-blue-600 font-bold">Charging Cables</h1>
                </div>

            </div>
            <div className="flex gap-4">

                {/* left */}
                <div className="w-1/2">
                    <div className="flex flex-col gap-4">
                        <div className="">
                            <div className="flex gap-4">

                                <div className="w-[336px] h-[454px]">
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <h1 className="text-[17px] font-bold">Top Details</h1>
                                        </div>
                                        <div className="flex justify-center">
                                            <div className="w-[276px] h-[368px] bg-gray-300 flex flex-col justify-end items-center pb-10">
                                                <h1 className="text-[17px] font-bold text-gray-800">Summer Sales</h1>
                                                <h1 className="text-[13px]">Only 3 days left</h1>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="w-[336px] h-[454px]">
                                    <div className="flex flex-col gap-4">
                                        <div>
                                            <h1 className="text-[17px] font-bold">Most Popular</h1>
                                        </div>
                                        <div className="flex justify-center">
                                            <div className="w-[276px] h-[368px] flex flex-col gap-4">
                                                {
                                                    data.map((item, index) => (
                                                        <div className="flex gap-4" key={index}>
                                                            <div className="w-[80px] h-[80px] bg-gray-300"></div>
                                                            <div className="flex flex-col gap-2">
                                                                <div className="text-[13px]">{item.name}</div>
                                                                <div className="text-[13px] font-bold">{item.age}</div>

                                                            </div>


                                                        </div>
                                                    ))
                                                }

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Right */}
                <div className="w-1/2 border">
                    <div className="flex gap-5">
                        {/* right left */}
                        <div className="w-1/2">
                            <div className="flex flex-col gap-4">
                                <div className="w-[363px] h-[215px] bg-gray-300"></div>
                                <div className="w-[363px] h-[215px] bg-gray-300"></div>

                            </div>
                        </div>
                        <div className="w-1/2 px-3 pt-3 gap-4 flex flex-col bg-yellow-100">
                    <div className='flex flex-col gap-4 justify-start items-start'>
                        <h1 className='ml-3 text-[17px] font-bold'>On Sales</h1>
                        <div className='w-[336px] h-[400px] hide-scrollbar overflow-y-auto flex flex-col gap-3 pl-3'>
                           {
                                dataViewScroll.map((item,index)=>(
                                    <div key={index} className='flex gap-4'>
                                    <div className='w-[64px] h-[64px] bg-white'></div>
                                    <div className='flex flex-col'>
                                        <h1>{item.name}</h1>
                                        <h1>{item.age}</h1>
                                    </div>
                                </div>

                                ))
                            }
                        </div>
                    </div>
                </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SmartPhoneAndAcc;