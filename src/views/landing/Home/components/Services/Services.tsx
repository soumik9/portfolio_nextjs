import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
import React from 'react'

type Props = {}

const Services = (props: Props) => {
    return (
        <SectionLayout css='lg:pt-[40px]'>
            <SectionTop
                subTitle='👌 Skills that specialized me'
                title='Professional'
                titleSpan='Services'
            />


        </SectionLayout>
    )
}

export default Services