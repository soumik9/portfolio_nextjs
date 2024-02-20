import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import { summaryItems } from '@config/constants'
import { summaryItemType } from '@config/types/types'
import Image from 'next/image'
import React from 'react'
import SumItem from './partials/SumItem'

const HomeHero: React.FC = () => {
    return (
        <SectionLayout>

            <div className='md:hidden flex justify-center mb-3' >
                <div className='bg-smartian rounded-t-[10em] rounded-b-lg'>
                    <Image
                        src='/global/pp-n.png'
                        // src='/global/wpp.png'
                        width={250}
                        height={250}
                        alt='Soumik Ahammed'
                        className='relative left-2.5'
                    />
                </div>
            </div>

            <div className="bg-lightDark lg:p-[60px_50px] md:p-[40px] p-[40px_15px] rounded-sm relative w-full">

                <h5 className='text-xs text-secondary uppercase xll:text-[18px] xll:leading-[160%] leading-[150%] xll:font-semibold font-medium tracking-[1px]'>👋 Develop high-quality websites</h5>

                <h1 className='mt-[12px] text-[24px] xll:text-[56px] md:text-[32px] font-semibold xll:leading-[120%] md:leading-[125%] text-secondary font-secondary w-full'>Full Stack Web Developer</h1>

                <p className='md:w-8/12 lg:w-9/12 text-primary mt-2 text-base text-justify'>Are you looking for the perfect ReactJS developer, front-end developer, or MERN Stack developer? Then, you are in the right place. Get the professional result</p>

                <hr className='my-8 bg-bgDark border-none h-[2px]' />

                <div className='grid grid-cols-2 md:flex gap-[40px] md:gap-x-[55px] lg:gap-x-[65px] xll:gap-[100px]'>
                    {summaryItems.map((item: summaryItemType) => <SumItem
                        data={item}
                        key={item._id}
                    />)}
                </div>

            </div>

            <Image
                src='/global/pp-n.png'

                // src='/global/wpp.png'
                width={370}
                height={612}
                alt='Soumik Ahammed'
                className='
                md:absolute hidden md:block
                3xl:w-[350px] xll:w-[341px] lg:w-[315px] md:w-[275.5px] w-[270px] 
                3xl:h-[498px] xll:h-[512px] lg:h-[449px] md:h-[413px] h-[400px] 
                3xl:right-[20.3rem] xll:right-[5.6rem] lg:right-[2.3rem] right-0
                3xl:top-[5.55rem] xll:top-[4.7rem] lg:top-[5.15rem] md:top-[3.47rem] top-[3.5rem]'
            />
        </SectionLayout>
    )
}

export default HomeHero