import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import { summaryItems } from '@config/constants'
import { summaryItemType } from '@config/types/types'
// import { gsap, Power3 } from 'gsap'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import SumItem from './partials/SumItem'


type Props = {}

const HomeHero = (props: Props) => {

    let mainCon = useRef(null);

    useEffect(() => {
        // gsap.to('.main', { opacity: 1, y: 220, x: 0, duration: 2, ease: 'Power3.inOut' })
        // gsap.from(mainCon, { opacity: 0, x: 100, y: 0, duration: 1 });
        // gsap.to(mainCon, { opacity: 1, x: 0, y: 0, duration: 1 });
    }, [])

    return (
        <SectionLayout>

            <div className='md:hidden flex justify-center mb-3'>
                <div className='bg-smartian rounded-t-[10em] rounded-b-lg'>
                    <Image
                        src='/global/wpp.png'
                        width={250}
                        height={250}
                        alt='Soumik Ahammed'
                        className='relative left-2.5'
                    />
                </div>
            </div>

            <div className="bg-lightDark lg:p-[60px_50px] md:p-[40px] p-[40px_15px] rounded-sm relative w-full">

                <h5 className='heading-h5 text-secondary uppercase '>👋 Designing things for human</h5>

                <h1 className='mt-[12px] heading-h1 text-secondary font-secondary'>
                    Talented Designer <br />
                    <span className='text-primary'>That Help you</span>
                </h1>

                <hr className='my-8 bg-bgDark border-none h-[2px]' />

                <div className='grid grid-cols-2 md:flex gap-[40px] md:gap-x-[55px] lg:gap-x-[65px] xll:gap-[100px]'>
                    {summaryItems.map((item: summaryItemType) => <SumItem
                        data={item}
                        key={item._id}
                    />)}
                </div>

            </div>

            <Image
                src='/global/wpp.png'
                width={370}
                height={612}
                alt='Soumik Ahammed'
                className='
                md:absolute hidden md:block
                3xl:w-[349px] xll:w-[358px] lg:w-[310px] w-[270px] 
                3xl:right-[20rem] xll:right-[4.9rem] lg:right-[2rem] right-0
                3xl:top-[5.55rem] xll:top-[4.7rem] lg:top-[5.15rem] md:top-[3.47rem] top-[3.5rem]'
            />
        </SectionLayout>
    )
}

export default HomeHero