import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
import { serviceItems } from '@config/constants/services'
import React from 'react'
import { BsCheck } from 'react-icons/bs'
import { motion } from "framer-motion"

const serviceItemVariant = {
    hidden: (index: number) => ({
        opacity: 0,
        x: 200
    }),
    show: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.3 * (index + 0.3),
            duration: 0.5 * (index + 0.3),  // Longer duration for smoother effect
            ease: 'easeIn',
        },
    }),
};

const Services = () => {
    return (
        <SectionLayout css='lg:pt-[40px]'>
            <SectionTop
                subTitle='👌 What Services I Can Provide'
                title='Expertise-Related'
                titleSpan='Services'
            />

            <motion.div
                className='grid lg:grid-cols-3 lg:gap-x-5 gap-y-5 lg:gap-y-0 overflow-hidden'
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >

                {serviceItems.map((service, index) => (<motion.article
                    custom={index}
                    variants={serviceItemVariant}
                    key={service._id}
                    className="service bg-lightDark border border-smartian trans hover:bg-bgDark cursor-default lg:min-h-[360px] xll:min-h-[0]"
                >

                    <div className="bg-smartian p-[1.5rem] service__header">
                        <h3 className='text-white text-[1rem] text-center'>{service.title}</h3>
                    </div>

                    <ul className="my-5 flex flex-col items-center lg:items-start gap-y-3">
                        {service.lists.map((item: string, index: number) => <li
                            className='flex gap-1.5 lg:ml-5'
                            key={`serviceList${index}`}
                        >
                            <BsCheck className='text-primary text-[24px]' />
                            <p className='text-[0.9rem] tracking-wide'>{item}</p>
                        </li>)}
                    </ul>
                </motion.article>
                ))}
            </motion.div>
        </SectionLayout>
    )
}

export default Services