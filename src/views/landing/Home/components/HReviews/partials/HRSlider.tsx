import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import 'swiper/css';
import { reviewSlidersData } from '@config/constants';
import Image from 'next/image';
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
const parse = require('html-react-parser');
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

SwiperCore.use([Autoplay]);

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
};

const HRSlider = () => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={40}
                // slidesPerView='auto'
                // slidesPerView={2}
                // slidesPerView={2}
                slidesPerGroup={1}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                }}
            >
                {/* <Slider {...settings}> */}
                {reviewSlidersData.map((slideContent, index) => (<SwiperSlide key={slideContent._id} virtualIndex={index}>
                    <div className='bg-lightDark p-[40px] rounded-sm'>
                        <p className='leading-[160%] text-purple '>{slideContent.review}</p>

                        <div className='mt-8 flex items-center gap-8'>

                            <Image src={slideContent.img} width={60} height={60} alt={slideContent.name} className='rounded-full p-[1px] border border-primary object-cover' />

                            <div>
                                <h6 className='text-primary'>{slideContent.name}</h6>
                                <p className='text-secondary'>{parse(slideContent.position)}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
                {/* </Slider> */}
            </Swiper>
        </div >
    )
}

export default HRSlider

    // <SwiperSlide key={slideContent._id} virtualIndex={index}>
    // < div className = 'bg-lightDark p-[40px_25px_40px_40px] rounded-sm' >
    //                         <p className='leading-[160%] text-purple '>{slideContent.review}</p>

    //                         <div className='mt-8 flex items-center gap-8'>

    //                             <Image src={slideContent.img} width={60} height={60} alt={slideContent.name} className='rounded-full p-[1px] border border-primary object-cover' />

    //                             <div>
    //                                 <h6 className='text-primary'>{slideContent.name}</h6>
    //                                 <p className='text-secondary'>{parse(slideContent.position)}</p>
    //                             </div>
    //                         </div>
    //                     </ >
    // </SwiperSlide> 