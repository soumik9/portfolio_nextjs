import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import "swiper/css/pagination";
// import { Pagination } from "swiper";

type Props = {}

const HRSlider = (props: Props) => {

    const slides = Array.from({ length: 1000 }).map(
        (el, index) => `Slide ${index + 1}`
    );

    return (
        <div className='text-purple'>
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            // pagination={true}
            // modules={[Pagination]}
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} virtualIndex={index}>
                        <div className='bg-lightDark p-[60px]'>
                            {slideContent}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HRSlider