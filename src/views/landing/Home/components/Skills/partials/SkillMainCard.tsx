import { skillItemType } from '@config/types/types'
import React from 'react'
import { cx } from 'src/hooks/helpers';

type Props = {
    title: string;
    classes?: string;
    items: skillItemType[];
}

const SkillMainCard = ({ title, items, classes }: Props) => {
    return (
        <div className={cx(classes)}>
            <div className='f-center mb-7'>
                <p className=' border-b w-max text-secondary font-semibold'>{title}</p>
            </div>

            <div className='flex md:justify-center gap-x-3 md:gap-x-8 gap-y-5 flex-wrap justify-between'>
                {items.slice(0, 16).map((item: skillItemType) => <div
                    key={item._id}
                    className='flex gap-1 md:gap-2 border border-dashed border-primary py-1.5 px-2.5 rounded text-[14px] md:text-base hover:bg-bgDark trans'
                >
                    {item.icon}
                    <span className='font-semibold text-secondary'>
                        {item.title}
                        {item.isExpert ? <span className='text-primary'>*</span> : null}
                    </span>
                </div>)}
            </div>
        </div>

    )
}

export default SkillMainCard