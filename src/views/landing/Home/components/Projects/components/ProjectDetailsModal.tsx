import Modal from '@components/Modal/Modal';
import { IProject, IProjectImages, IProjectLinks } from '@config/types/types';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { TbCheckbox } from 'react-icons/tb';

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    data: IProject | undefined;
}

const swiperOptions = {
    navigation: true,
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
    // breakpoints: {
    //     1024: {
    //         slidesPerView: 2,
    //     }
    // },
};

const ProjectDetailsModal = ({ open, setOpen, data }: Props) => {
    return (

        <Modal open={open} setOpen={setOpen} title={data?.title}>

            {/* project slider */}
            <Swiper {...swiperOptions} className='my-swiper mt-5'>
                {data?.images.map((item: IProjectImages, index: number) => (
                    <SwiperSlide key={index} className='text-lightDark relative'>

                        <Image src={item.src} alt={item.title} width={1280} height={720} className='rounded object-cover' />
                        <p className='text-[32px]  text-lightDark'>
                            {item.title}
                        </p>

                    </SwiperSlide>
                ))}
            </Swiper>
            {/* end slider */}

            {/* links start */}
            <ul className='flex flex-wrap justify-between gap-x-1 gap-y-3 mt-8 mb-5'>
                {data?.links.map((item: IProjectLinks, index: number) => <li
                    key={`projectLinks${index}`}
                    className='flex items-center gap-1 md:gap-2 border border-dashed border-purple-700 hover:border-purple trans group py-1.5 px-2.5 rounded text-[14px] md:text-base'
                >
                    <span className='text-lightDark'>{item.name}</span>
                    <BsArrowRight className='relative top-[2px]' />
                    <a href={item.link} target='_blank' rel="noreferrer" className='text-purple-700 font-semibold group-hover:underline group-hover:text-purple trans'>
                        {item.link}
                    </a>
                </li>)}
            </ul>
            {/* links end */}

            {/* descriptions */}
            <p className='text-lightDark mb-5 lg:text-[18px] text-base leading-8 font-medium'>{data?.description}</p>

            {/* features */}
            <h6 className='text-[22px] text-purple-700 border-b border-purple-700 mb-3'>Features</h6>
            <ul className='flex flex-col space-y-4 mb-8'>
                {data?.features.map((item: string, index: number) => <li
                    key={`projectLinks${index}`}
                    className='flex items-center gap-1 md:gap-2 border border-dashed border-purple-700 hover:border-purple trans group py-1.5 px-2.5 rounded text-[14px] md:text-base'
                >
                    <TbCheckbox className='relative top-[2px] text-purple text-[20px]' />
                    <span className='text-lightDark'>{item}</span>

                </li>)}
            </ul>

        </Modal>
    )
}

export default ProjectDetailsModal