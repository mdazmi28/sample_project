// import React from 'react';
const data = [
    { id: 3, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
    { id: 3, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
    { id: 3, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
    { id: 3, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
    { id: 3, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
    { id: 3, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
    { id: 3, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
    { id: 3, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
    { id: 3, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
    { id: 3, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
];

const PopularCategories = () => {
    return (
        <div className='w-full h-[216px] flex'>
            <div className="w-1/3 flex flex-col">
                <div className='flex flex-col justify-center items-start pl-10 pt-[40px] gap-4'>
                    <h1 className="text-[20px] font-bold font-lato">Popular Categories</h1>
                    <p className="text-[17px] text-gray-400">What our customers find interesting</p>
                    <div className="w-[188px] h-[40px] bg-yellow-300 rounded-lg flex justify-center items-center">
                        <p className="text-[13px] font-lato font-bold">All Popular Categories</p>
                    </div>
                </div>
            </div>
            <div className="w-2/3">
                <div className="flex items-center justify-start hide-scrollbar overflow-x-auto gap-4">
                    {
                        data.map((item, index) => (
                            <div className="" key={index}>
                                <div className="w-[120px] h-[120px] bg-gray-300"></div>
                                <h1>{item.name}</h1>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    );
};

export default PopularCategories;