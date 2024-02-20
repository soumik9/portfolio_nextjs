import LightDarkCardLayout from '@components/ViewsComp/LightDarkCardLayout/LightDarkCardLayout'
import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
import { skillItems } from '@config/constants/skills'
import React from 'react'
import SkillMainCard from './partials/SkillMainCard'
const parse = require('html-react-parser');

type Props = {}

const Skills = (props: Props) => {
    return (
        <SectionLayout css='lg:pt-[40px]'>
            <SectionTop
                subTitle='👌 Skills that specialized me'
                title='Professional'
                titleSpan='Skills'
            />

            <div className=''>
                <LightDarkCardLayout>

                    <SkillMainCard
                        title='Frontend & Backend'
                        items={skillItems.slice(0, 16)}
                    />

                    <SkillMainCard
                        title='Others'
                        items={skillItems.slice(16)}
                        classes='lg:mt-14 mt-9'
                    />

                </LightDarkCardLayout>


            </div>
        </SectionLayout>
    )
}

export default Skills