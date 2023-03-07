import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
import React from 'react'
import HRSlider from './partials/HRSlider'
import HRSummary from './partials/HRSummary'

type Props = {}

const HReviews = (props: Props) => {

    // idk
    return (
        <SectionLayout>
            <SectionTop
                subTitle='👌 People Say about me'
                title='Clients'
                titleSpan='talking'
            />

            <div className="grid grid-cols-3 gap-[60px]">
                <div className='col-span-2'>
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