import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import ProjectCard from './components/ProjectCard';
import { projectItems } from '@config/constants/projects';
import { IProject } from '@config/types/types';
import ProjectDetailsModal from './components/ProjectDetailsModal';

const swiperOptions = {
    navigation: true,
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    // centeredSlides: true,
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

const Projects: React.FC = () => {

    // states
    const [open, setOpen] = useState<boolean>(false);
    const [detailsData, setDetailsData] = useState<IProject | undefined>();

    return (
        <SectionLayout css='lg:pt-[40px]'>
            <SectionTop
                subTitle='👌 Recent Works'
                title='Creative'
                titleSpan='Projects'
            />

            {/* project slider */}
            <Swiper {...swiperOptions} className="mySwiper z-[-1]">
                {projectItems.map((item: IProject) => <SwiperSlide key={item._id}>
                    <ProjectCard
                        data={item}
                        open={open}
                        setOpen={setOpen}
                        setDetailsData={setDetailsData}
                    />
                </SwiperSlide>)}
            </Swiper>

            <ProjectDetailsModal open={open} setOpen={setOpen} data={detailsData} />


        </SectionLayout>
    )
}

export default Projects