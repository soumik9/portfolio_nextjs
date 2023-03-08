import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { reviewSlidersData } from '@config/constants';
import Image from 'next/image';
// import "swiper/css/pagination";
// import { Pagination } from "swiper";

type Props = {}

const HRSlider = (props: Props) => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={40}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            // pagination={true}
            // modules={[Pagination]}
            >
                {reviewSlidersData.map((slideContent, index) => (
                    <SwiperSlide key={slideContent._id} virtualIndex={index}>
                        <div className='bg-lightDark p-[49px_40px] rounded-sm'>
                            <p className='leading-[160%] text-purple'>{slideContent.review}</p>

                            <div className='mt-8 flex items-center gap-8'>
                                <div className='border border-primary w-max rounded-full'>
                                    <Image src={slideContent.img} width={60} height={60} alt={slideContent.name} />
                                </div>
                                <div>
                                    <h6 className='text-primary'>{slideContent.name}</h6>
                                    <p className='text-secondary'>{slideContent.position}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HRSlider