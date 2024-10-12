// import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./Style/Swiper/popularCategories.css";
const data = [
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    { id: 3, name: "Welcome", des: "Only 7 days left" },
    
];

// import React from 'react';

const PopularCategories = () => {
    return (
        <div className='container mx-[100px]'>
            <div className='flex rounded container mx-auto h-auto'>
            <div className="w-1/3">
            <div className='flex flex-col justify-start items-start  gap-4'>
                    <h1 className="text-[20px] font-bold font-lato">Popular Categories</h1>
                    <p className="text-[17px] text-gray-400">What our customers find interesting</p>
                    <div className="w-[188px] h-[40px] bg-yellow-300 rounded-lg flex justify-center items-center cursor-pointer">
                        <p className="text-[13px] font-lato font-bold">All Popular Categories</p>
                    </div>
                </div>
            </div>
            <div className="w-2/3 ">
            <div className="flex justify-start hide-scrollbar overflow-x-auto gap-4">
                <Swiper className="mySwiper" spaceBetween={30} slidesPerView={6}> 
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}> {/* Each item should be in its own SwiperSlide */}
                            <div className="">
                                <div className="w-[120px] h-[120px] bg-gray-300"></div>
                                <h1>{item.name}</h1>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
                    
                </div>

            </div>
            
        </div>
        </div>
    );
};

export default PopularCategories;