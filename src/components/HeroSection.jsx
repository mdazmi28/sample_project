// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Style/swiperStyle.css';

// import required modules
import { Pagination } from 'swiper/modules';
const HeroSection = () => {
    return (
        <div className=" flex h-[344px] w-full rounded bg-[#f8de78]">
            {/* Left */}
            <div className="w-1/2 flex justify-center items-center">
                <div className="w-[381px] h-[147px] flex flex-col gap-4">
                    <h1 className="font-bold text-[30px]">Offers You Can’t Resist</h1>
                    <h1>Fashion, Smartphones & more</h1>
                    <div className="flex flex-row gap-2">
                        <h1 className="px-5 py-2 rounded-[5px] bg-[#06072C] text-white font-bold">Buy Now</h1>
                        <h1 className="px-5 py-2 rounded text-black font-bold">Upto 60% Discount</h1>
                    </div>
                </div>
            </div>
            {/* Right */}
            <div className="w-1/2 flex justify-center items-center">
                <div className="w-[600px] h-[320px] bg-white">
                    {/* Initialize Swiper */}
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

                </div>


            </div>

        </div>
    );
};

export default HeroSection;