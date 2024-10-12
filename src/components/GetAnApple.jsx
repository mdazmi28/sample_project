// import React from 'react';

// import { data } from "autoprefixer";
import Timer from "./Timer";
const data = [
    { id: 3, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
    { id: 3, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
    { id: 4, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
    { id: 4, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
    { id: 4, name: "Welcome Home Furnit… ", des: "Only 7 days left" },
];


const GetAnApple = () => {
    return (
        <div className='container mx-[100px]'>
             <div className="rounded flex flex-col gap-4">
            {/* Top */}
            <div className='w-full flex gap-4'>
                <div className="w-1/2 h-[250px] bg-gray-300"></div>
                <div className="flex flex-col gap-4">
                    <div className="ml-10 mt-10">
                        <h1 className="text-[40px] font-bold">Get an Apple</h1>
                        <h1 className="text-gray-400">Hurry up and get upto 20% discount on selected Apple Devices</h1>
                        <div>
                            <Timer />
                        </div>
                        <div className="bg-yellow-300 w-[122px] h-[40px] flex justify-center items-center font-bold rounded-lg">
                            Go Shopping
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom */}
            <div>
                <div className="grid grid-cols-5 gap-3">
                    {
                        data.map((item, index) => (
                            <div className="gap-4  bg-gray-300 rounded-xl" key={index}>
                                <div className="flex pt-4 pl-6 gap-4">
                                    <div className="w-[50px] h-[50px] bg-white rounded-lg"></div>
                                    <div className="flex flex-col gap-4">
                                        <h1 className="text-[13px]">{item.name}</h1>
                                        <h2 className="text-[13px] font-bold">{item.des}</h2>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
        </div>
       
    );
};

export default GetAnApple;