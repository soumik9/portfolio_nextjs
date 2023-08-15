import SectionLayout from '@components/ViewsComp/SectionLayout/SectionLayout'
import SectionTop from '@components/ViewsComp/SectionTop/SectionTop'
import { serviceItems } from '@config/constants/services'
import React from 'react'
import { BsCheck } from 'react-icons/bs'

type Props = {}

const Services = (props: Props) => {
    return (
        <SectionLayout css='lg:pt-[40px]'>
            <SectionTop
                subTitle='👌 What Services I Can Provide'
                title='Expertise-Related'
                titleSpan='Services'
            />

            <div className='grid lg:grid-cols-3 lg:gap-x-5 gap-y-5 lg:gap-y-0'>

                {serviceItems.map((service) => (<article key={service._id} className="service bg-lightDark border border-smartian trans hover:bg-bgDark cursor-default lg:min-h-[360px] xll:min-h-[0]">

                    <div className="bg-smartian p-[1.5rem] service__header">
                        <h3 className='text-white text-[1rem] text-center'>{service.title}</h3>
                    </div>

                    <ul className="my-5 flex flex-col items-center lg:items-start gap-y-3">
                        {service.lists.map((item: string, index: number) => <li className='flex gap-1.5 lg:ml-5' key={`serviceList${index}`}>
                            <BsCheck className='text-primary text-[24px]' />
                            <p className='text-[0.9rem] tracking-wide'>{item}</p>
                        </li>)}
                    </ul>
                </article>
                ))}
            </div>


        </SectionLayout>
    )
}

export default Services