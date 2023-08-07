import LightDarkCardLayout from '@components/ViewsComp/LightDarkCardLayout/LightDarkCardLayout'
import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
import { skillItems } from '@config/constants/skills'
import { skillItemType } from '@config/types/types'
import React from 'react'

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
                    {/* <div className='f-center'>
                        <h3 className='text-secondary font-semibold text-[22px] border-b border-secondary w-max border-dashed'>
                            Frontend Technologies
                        </h3>
                    </div> */}

                    <div className='flex gap-8 flex-wrap'>
                        {skillItems.map((item: skillItemType) => <div key={item._id} className='flex gap-2 border border-dashed border-primary py-1.5 px-2.5 rounded'>
                            {item.icon}
                            <span className='font-semibold text-secondary'>{item.title} </span>
                        </div>)}
                    </div>
                </LightDarkCardLayout>


            </div>
        </SectionLayout>
    )
}

export default Skills