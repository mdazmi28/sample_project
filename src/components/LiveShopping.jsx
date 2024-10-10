// import React from 'react';
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

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./Style/Swiper/popularCategories.css";

const LiveShopping = () => {
    return (
        <div className="mb-10">
            <div className="flex flex-col">
                <div className="text-[30px] font-bold">Live Shopping</div>
                <div className="text-[17px] font-bold text-gray-500">Experience the new way of shopping…</div>
                <div className="w-full h-[396px]">
                    <Swiper className="mySwiper" spaceBetween={30} slidesPerView={6}>
                        {
                            dataViewScroll.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col" key={index}>
                                        <div className="w-[224px] h-[396px] bg-gray-300 rounded-lg flex justify-center items-end pb-3">
                                            <div className="w-[200px] h-[92px] bg-gray-500 rounded-lg flex flex-col pl-2 pt-2 items-start">
                                                <h1 className="text-white text-[17px] font-bold">{item.name}</h1>
                                                <h1 className="text-white text-[12px] font-lato pt-1">{item.age}</h1>
                                                <h1 className="text-white text-[12px] font-lato">{item.age}</h1>
                                            </div>
                                        </div>
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

export default LiveShopping;