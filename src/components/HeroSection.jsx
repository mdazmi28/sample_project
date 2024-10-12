import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Style/Swiper/swiperStyle.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const HeroSection = () => {
    return (
        <div className='container mx-[100px]'>
            <div className='bg-[#f8de78] h-[344px]'>
                <div className='flex items-center h-full gap-4 md:flex lg:flex'>
                    <div className='w-1/2  flex justify-center items-center'>
                        <div className="w-[381px] h-[147px] flex flex-col gap-4">
                            <h1 className="font-bold text-[30px]">Offers You Can’t Resist</h1>
                            <h1>Fashion, Smartphones & more</h1>
                            <div className="flex flex-row gap-2">
                                <h1 className="px-5 py-2 rounded-[5px] bg-[#06072C] text-white font-bold">Buy Now</h1>
                                <h1 className="px-5 py-2 rounded text-black font-bold">Upto 60% Discount</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2  flex justify-center items-center'>
                        <div className="w-[500px] h-[320px] bg-white">
                            {/* Initialize Swiper */}
                            <Swiper pagination={{ clickable: true }} // Enable pagination
                                modules={[Pagination, Autoplay]} // Include the Pagination and Autoplay modules
                                autoplay={{
                                    delay: 2000, // Delay in milliseconds
                                    disableOnInteraction: false, // Continue autoplay after user interactions
                                }}
                                loop={true} // Enable loop for continuous sliding
                                className="mySwiper">
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

            </div>
        </div>
    );
};

export default HeroSection;


