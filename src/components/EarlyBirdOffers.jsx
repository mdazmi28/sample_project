// import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./Style/Swiper/popularCategories.css";
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


const EarlyBirdOffers = () => {
    return (
        <div className='container mx-[100px]'>
             <div className="rounded container mx-auto h-[px]">
        <div className="flex justify-between items-center w-full">
            {/* Left Side - Text Section */}
            <div>
                <div className="font-bold text-[20px]">Early Bird Offers</div>
                {/* <div className="text-gray-400">Products arrived in last 30 days</div> */}
            </div>

            {/* Right Side - Button */}
            <div className="h-[40px] w-[170px] flex justify-end  items-center rounded-xl cursor-pointer">
                <div className="text-[12px] font-bold text-black">
                <h1 className="text-blue-500">All products</h1>
                </div>
            </div>
        </div>
        <div className="mt-4 flex gap-4">
           
            <Swiper className="mySwiper" spaceBetween={30} slidesPerView={5}>
            {
                    data.map((item, index)=>(
                        <SwiperSlide key={index}>
                            <div className="flex flex-col">
                            <div className="w-48 h-48 bg-gray-300 rounded-lg"></div>
                            <h1>{item.name}</h1>
                            <h1>{item.des}</h1>
                        </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
           
        </div>



    </div>
        </div>
       
);
};

export default EarlyBirdOffers;