import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import ProjectCard from './components/ProjectCard';
import { projectItems } from '@config/constants/projects';
import { IProject } from '@config/types/types';

const swiperOptions = {
    navigation: true,
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
        }
    },
};

type Props = {}

const Projects = (props: Props) => {
    return (
        <SectionLayout css='lg:pt-[40px]'>
            <SectionTop
                subTitle='👌 Recent Works'
                title='Creative'
                titleSpan='Projects'
            />

            {/* project slider */}
            <Swiper {...swiperOptions} className="mySwiper">
                {projectItems.map((item: IProject) => <SwiperSlide key={item._id}>
                    <ProjectCard data={item} />
                </SwiperSlide>)}

            </Swiper>


        </SectionLayout>
    )
}

export default Projects