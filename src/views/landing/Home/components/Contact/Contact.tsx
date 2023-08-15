import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
import React from 'react'


const Contact: React.FC = () => {
    return (
        <SectionLayout css='lg:pt-[40px]' id='contactMe'>
            <SectionTop
                subTitle='👌 Connect with me'
                title='Contact'
                titleSpan='Me'
            />


        </SectionLayout>

    )
}

export default Contact