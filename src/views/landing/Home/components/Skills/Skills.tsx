import LightDarkCardLayout from '@components/ViewsComp/LightDarkCardLayout/LightDarkCardLayout'
import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
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

            <div className='grid grid-cols-2 gap-5'>
                <LightDarkCardLayout>
                    <div className='f-center'>
                        <h3 className='text-secondary font-semibold text-[22px] border-b border-secondary w-max border-dashed'>
                            Frontend Technologies
                        </h3>
                    </div>

                    <div>
                        <div>
                            HTML
                        </div>
                    </div>
                </LightDarkCardLayout>

                <LightDarkCardLayout>
                    hi
                </LightDarkCardLayout>
            </div>
        </SectionLayout>
    )
}

export default Skills