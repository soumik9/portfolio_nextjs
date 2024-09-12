import Button from '@components/Button/Button'
import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import { Link } from 'react-scroll';
import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { BsBriefcase } from "react-icons/bs";
import LightDarkCardLayout from '@components/ViewsComp/LightDarkCardLayout/LightDarkCardLayout';

const Intro: React.FC = () => {
    return (
        <SectionLayout css='lg:pt-[40px]'>
            <div className='grid lg:grid-cols-2 xll:grid-cols-3 justify-center items-center' >

                <div className='xll:col-span-2'>
                    <h5 className='leading-[150%] xll:font-semibold font-medium tracking-[1px] text-secondary uppercase md:text-center lg:text-start'>
                        😎I WANT TO INTRODUCE MYSELF
                    </h5>
                    <div className='md:flex lg:flex-col md:gap-x-3 lg:gap-0'>
                        <h3 className='heading-h1 text-secondary mt-2 md:my-2'>Professional</h3>
                        <h3 className='heading-h1 text-primary mb-2 md:my-2'>Experienced</h3>
                    </div>

                </div>

                <div className='flex md:justify-center lg:justify-end xll:justify-start gap-5'>

                    <Link to='contactMe' smooth={true} duration={1700}>
                        <Button
                            text='Hire Me'
                        />
                    </Link>

                    <a href="https://drive.google.com/file/d/1ofsoXhHNjDpyixpiHbE-xAY4zkQHiHT-/view?usp=drive_link" target='_blank' rel="noreferrer">
                        <Button
                            text='Download CV'
                            outlined
                            endIcon={<><AiOutlineDownload /></>}
                        />
                    </a>
                </div>
            </div>

            <div className='mt-6'>
                <div className='flex gap-10 items-start'>
                    <div className='h-8 w-8 bg-primary flex items-center justify-center text-lightDark rounded-full '>
                        <BsBriefcase className='text-xl' />
                    </div>
                    <LightDarkCardLayout divCss='relative !p-5'>
                        <div className="absolute left-0 -translate-y-1/2 top-4 -ml-4">
                            <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-r-purple border-t-transparent border-b-transparent"></div>
                        </div>

                        <div>
                            <h3 className="mb-2 text-lg font-bold text-purple">FUll Stack Developer L-1 (MERN)</h3>
                            <p className="text-secondary">Work closely with cross-functional teams to design and develop scalable, reliable, and high-performance backend systems.</p>
                        </div>
                    </LightDarkCardLayout>

                </div>


            </div>
        </SectionLayout>
    )
}

export default Intro