import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
import React from 'react'
import HRSlider from './partials/HRSlider'
import HRSummary from './partials/HRSummary'

type Props = {}

const HReviews = (props: Props) => {

    // idk
    return (
        <SectionLayout css='!pb-[100px]'>
            <SectionTop
                subTitle='👌 What Customers Have to Say'
                title='Clients'
                titleSpan='talking'
            />

            <div className="grid md:grid-cols-3 gap-[60px]">
                <div className='md:col-span-2'>
                    <HRSlider />
                </div>

                <div>
                    <HRSummary />
                </div>
            </div>

        </SectionLayout>
    )
}

export default HReviews