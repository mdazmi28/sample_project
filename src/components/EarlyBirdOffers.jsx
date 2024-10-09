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
        <div className="h-[400px] w-auto px-10 flex flex-col">
            <div className="flex justify-between mt-6">
                <div>
                    <div className="font-bold text-[20px]">Early Bird Offers</div>
                    {/* <div className="text-gray-400">Products arrived in last 30 days</div> */}
                </div>
                <div className="h-[40px] w-[170px] flex justify-end items-center rounded-xl cursor-pointer">
                    <div className="text-[12px] font-bold text-blue-500">
                        All Products
                    </div>
                </div>
            </div>
            <div className="mt-4 flex gap-4 hide-scrollbar overflow-x-auto">
                <Swiper className="mySwiper" spaceBetween={30} slidesPerView={6}>
                    {
                        data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col" key={index}>
                                    <div className="w-[216px] h-[240px] bg-gray-300 rounded-lg"></div>
                                    <h1>{item.name}</h1>
                                    <h1>{item.des}</h1>
                                </div>
                            </SwiperSlide>

                        ))
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default EarlyBirdOffers;