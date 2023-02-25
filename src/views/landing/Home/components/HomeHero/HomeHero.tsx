import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import Image from 'next/image'
import React from 'react'

type Props = {}

const HomeHero = (props: Props) => {
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

            <div className="bg-lightDark lg:p-[100px_50px] md:py-[80px] p-[50px_30px] rounded-sm relative w-full">

                <h5 className='heading-h5 text-secondary uppercase '>👋 Designing things for human</h5>

                <h1 className='mt-[12px] heading-h1  text-secondary'>
                    Talented Designer <br />
                    <span className='text-primary'>That Help you</span>
                </h1>

            </div>

            <Image
                src='/global/wpp.png'
                width={370}
                height={612}
                alt='Soumik Ahammed'
                className='
                3xl:w-[370px] xll:w-[350px] lg:w-[300px] w-[270px] 
                md:absolute hidden md:block
                3xl:right-[19.8rem] xll:right-[4.9rem] lg:right-[2rem] -right-1
                3xl:top-[4.5rem] lg:top-[6rem] top-[3.5rem]'
            />
        </SectionLayout>
    )
}

export default HomeHero