import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { reviewSlidersData } from '@config/constants';
import Image from 'next/image';
const parse = require('html-react-parser');

const swiperOptions = {
    navigation: true,
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 40,
    // loop: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
};

const HRSlider = () => {
    return (
        <div className=''>
            <Swiper {...swiperOptions} >
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
            </Swiper>
        </div >
    )
}

export default HRSlider