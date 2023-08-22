import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { reviewSlidersData } from '@config/constants';
import Image from 'next/image';
import { useRef } from 'react';
const parse = require('html-react-parser');

const swiperOptions = {
    navigation: true,
    modules: [Autoplay, Navigation],
    spaceBetween: 40,
    // loop: true,
    grabCursor: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        1440: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
};

interface SwiperInstance {
    autoplay: {
        start: () => void;
        stop: () => void;
    };
}

const HRSlider = () => {

    const swiperRef = useRef<SwiperInstance | null>(null);

    const handleMouseEnter = () => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.start();
        }
    };

    return (
        <Swiper {...swiperOptions} onSwiper={swiper => (swiperRef.current = swiper)}>
            {reviewSlidersData.map((slideContent, index) => (<SwiperSlide key={slideContent._id} virtualIndex={index}>
                <div className='bg-lightDark lg:p-[40px] p-[20px] rounded-sm'>
                    <p className='leading-[160%] text-purple text-justify'>{slideContent.review}</p>

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
        </Swiper>
    )
}

export default HRSlider