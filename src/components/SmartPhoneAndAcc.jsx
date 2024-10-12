// import React from 'react';
const data = [
    { id: 1, name: "Headphones", age: "Upto 40% discount" },
    { id: 1, name: "Headphones", age: "Upto 40% discount" },
    { id: 3, name: "Women Tops", age: "Upto 40% discount" },
    { id: 4, name: "Women Tops", age: "Upto 40% discount" },

];
const dataViewScroll = [
    { id: 1, name: "Headphones", age: "Upto 40% discount" },

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
        <div className='container mx-[100px]'>
            <div className="flex flex-col gap-4 rounded">
                {/* Top */}
            <div className="">
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
            {/* bottom */}
            <div className="flex gap-4">

                {/* left */}
                <div className="w-1/2 flex mt-5 gap-4">
                    <div className="w-[100%] flex flex-col gap-4">
                        <div>
                            <h1 className="text-[17px] font-bold">Top Details</h1>
                        </div>
                        <div className="h-[200px] W-10 bg-gray-300 flex flex-col justify-end items-center pb-5">
                            <h1 className="text-[17px] font-bold text-gray-800">Summer Sales</h1>
                            <h1 className="text-[13px]">Only 3 days left</h1>
                        </div>
                    </div>
                    <div className="w-[100%] flex flex-col gap-4">
                        <div>
                            <h1 className="text-[17px] font-bold">Most Popular</h1>
                        </div>
                        <div className="h-[200px] W-10 flex flex-col gap-3 justify-start items-start pb-5">
                            {
                                data.map((item, index) => (
                                    <div className="flex  gap-2" key={index}>
                                        <div className="w-[40px] h-[40px] bg-gray-300"></div>
                                        <div className="flex flex-col">
                                            <div className="text-[13px]">{item.name}</div>
                                            <div className="text-[13px] font-bold">{item.age}</div>
                                        </div>


                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
                {/* Right */}
                <div className="w-1/2  mt-5 gap-4">
                    <div className="flex gap-4">
                        <div className="w-[50%] flex flex-col gap-4">
                        <div className="h-[120px] bg-gray-300"></div>
                        <div className="h-[120px] bg-gray-300"></div>

                        </div>
                        <div className="w-[100%] bg-yellow-200">
                            <div className="text-[17px] font-bold pl-3">On Sales</div>
                        <div className="h-[230px] overflow-y-auto hide-scrollbar pl-3 pt-5">
                                {dataViewScroll.map((item) => (
                                    <div key={item.id} className="flex items-center mb-4 ">
                                        <div className="w-[40px] h-[40px] bg-gray-300  mr-4"></div>
                                        <div>
                                            <h2 className="text-[13px] text-gray-600 font-semibold">{item.name}</h2>
                                            <p className="text-sm text-black font-bold">{item.age}</p>
                                        </div>
                                    </div>
                                ))}
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