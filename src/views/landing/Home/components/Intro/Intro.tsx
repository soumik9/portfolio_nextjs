import Button from '@components/Button/Button'
import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'

type Props = {}

const Intro = (props: Props) => {
    return (
        <SectionLayout css='lg:pt-[40px]'>
            <div className='grid lg:grid-cols-2 xll:grid-cols-3 justify-center items-center'>

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
                    <Button
                        text='Hire Me'
                    />
                    <Button
                        text='Download CV'
                        outlined
                        endIcon={<><AiOutlineDownload /></>}
                    />
                </div>
            </div>
        </SectionLayout>
    )
}

export default Intro