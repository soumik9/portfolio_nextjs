import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
import React from 'react'
import HRSlider from './partials/HRSlider'
import HRSummary from './partials/HRSummary'

type Props = {}

const HReviews = (props: Props) => {

    // idk
    return (
        <SectionLayout css='lg:pt-[40px]'>
            <SectionTop
                subTitle='👌 What Customers Have to Say'
                title='Clients'
                titleSpan='talking'
            />

            <div className="flex flex-col md:grid md:grid-cols-3 md:items-center md:gap-[60px]">
                <div className='md:col-span-2 order-2 md:order-1'>
                    <HRSlider />
                </div>

                <div className='order-1 md:order-2 mb-8 md:mb-0'>
                    <HRSummary />
                </div>
            </div>
        </SectionLayout>
    )
}

export default HReviews