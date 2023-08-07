import Button from '@components/Button/Button'
import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import React from 'react'
// import { AiOutlineDownload } from 'rea'

type Props = {}

const Intro = (props: Props) => {
    return (
        <SectionLayout css='lg:pt-[40px]'>
            <div className='grid grid-cols-3 items-center'>

                <div className='col-span-2'>
                    <h5 className='leading-[150%] xll:font-semibold font-medium tracking-[1px] text-secondary uppercase '>
                        😎I WANT TO INTRODUCE MYSELF
                    </h5>
                    <h3 className='heading-h1 text-secondary my-2'>Professional</h3>
                    <h3 className='heading-h1 text-primary my-2'>Experienced</h3>
                </div>

                <div className='flex gap-5'>
                    <Button
                        text='Hire Me'
                    />
                    <Button
                        text='Download CV'
                        outlined
                    // endIcon={<><AiOutlineDownload /></>}
                    />
                </div>
            </div>
        </SectionLayout>
    )
}

export default Intro