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


const NewlyArrived = () => {
    return (
        <div className="h-[400px] w-auto px-10 flex flex-col">
            <div className="flex justify-between mt-6">
                <div>
                    <div className="font-bold text-[20px]">Newly Arrived</div>
                    <div className="text-gray-400">Products arrived in last 30 days</div>
                </div>
                <div className="h-[40px] w-[170px] bg-yellow-400 flex justify-center items-center rounded-xl cursor-pointer">
                    <div className="text-[12px] font-bold text-black">
                    View All New Products
                    </div>
                </div>
            </div>
            <div className="mt-4 flex gap-4 hide-scrollbar overflow-x-auto">
                {
                    data.map((item, index)=>(
                        <div className="flex flex-col" key={index}>
                            <div className="w-[216px] h-[240px] bg-gray-300 border border-cyan-900"></div>
                            <h1>{item.name}</h1>
                            <h1>{item.des}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default NewlyArrived;