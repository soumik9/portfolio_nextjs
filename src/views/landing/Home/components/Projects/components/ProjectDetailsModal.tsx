import Modal from '@components/Modal/Modal';
import { IProject, IProjectImages, IProjectLinks } from '@config/types/types';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { backendDevelopment, frontendDevelopment, fullStackWebDevelopment } from '@config/constants/projects';
import { cx } from 'src/hooks/helpers';
import PModalList from '../partials/PModalList';
import PModalTitle from '../partials/PModalTitle';

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
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
};

const ProjectDetailsModal = ({ open, setOpen, data }: Props) => {
    return (

        <Modal open={open} setOpen={setOpen} title={<div className='flex flex-col md:flex-row md:items-center gap-2.5'>
            <h2>{data?.title}</h2>
            <p className={cx(
                "text-sm px-2 py-1 rounded w-max",
                data?.category === fullStackWebDevelopment && 'bg-purple text-bgDark',
                data?.category === backendDevelopment && 'bg-purple-600 text-secondary',
                data?.category === frontendDevelopment && 'bg-purple-700 text-primary-300',
            )}>
                {data?.category}
            </p>
        </div>}>

            {/* project slider */}
            {data?.images.length ? <Swiper {...swiperOptions} className='my-swiper mt-5 mb-8'>
                {data?.images.map((item: IProjectImages, index: number) => (
                    <SwiperSlide key={index} className='text-lightDark relative'>

                        <Image src={item.src} alt={item.title} width={1280} height={720} className='rounded object-cover' />
                        <p className='text-[32px] text-lightDark'>
                            {item.title}
                        </p>

                    </SwiperSlide>
                ))}
            </Swiper> : null}
            {/* end slider */}

            {/* gap */}
            <div className={cx(!data?.images.length ? 'mt-5' : '')}></div>

            {/* links start */}
            <PModalTitle title='Links' />
            <ul className='flex flex-wrap justify-between gap-x-1 gap-y-3 mb-6'>
                {data?.links.map((item: IProjectLinks, index: number) => <li
                    key={`projectLinks${index}`}
                    className='flex items-center gap-1 md:gap-2 border border-dashed border-purple-700 group hover:border-purple trans group   rounded text-[14px] md:text-base'
                >
                    <a href={item.link} target='_blank' rel="noreferrer" className='text-lightDark font-semibold group-hover:underline px-2.5 py-1.5 group-hover:text-purple-600 trans'>
                        {item.name}
                    </a>
                </li>)}
            </ul>
            {/* links end */}

            {/* descriptions */}
            <PModalTitle title='Descriptions' />
            <p className='text-lightDark mb-6 lg:text-[18px] text-base leading-8 font-medium text-justify'>{data?.description}</p>

            {/* features */}
            <PModalList
                title='Features'
                key='projectLinks'
                arr={data?.features}
                classes='flex-col space-y-4'
            />

            {/* routes */}
            {data?.routes?.length ? <PModalList
                title='API Routes'
                key='projectRoutes'
                arr={data?.routes}
                classes='flex-col space-y-4'
                isLink
            /> : null}


            {/* Technologies */}
            <PModalList
                title='Technologies'
                key='projectTechs'
                arr={data?.techs}
                classes='flex-wrap gap-x-3 gap-y-4 justify-center'
                iconClass='hidden md:block'
                textClass='!w-full'
            />

        </Modal>
    )
}

export default ProjectDetailsModal