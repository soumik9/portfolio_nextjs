import React from 'react'
import { motion } from "framer-motion"

type Props = {
    titleSpan: string;
    title: string;
    subTitle: string;
}

const SectionTop = ({ titleSpan, title, subTitle }: Props) => {
    return (
        <center className='mb-[15px] md:mb-[25px] lg:mb-[60px]'>
            <h5 className='heading-h5 text-secondary uppercase'>{subTitle}</h5>
            <motion.h1
                className='mt-[12px] heading-h1 text-secondary font-secondary capitalize'
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            >
                {title} <span className='text-primary'>{titleSpan}</span>
            </motion.h1>
        </center>
    )
}

export default SectionTop