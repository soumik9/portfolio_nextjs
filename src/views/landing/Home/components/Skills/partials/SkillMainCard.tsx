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
                <p className=' border-b border-purple w-max text-purple font-semibold'>{title}</p>
            </div>

            <div className='flex justify-center gap-x-3 md:gap-x-4 gap-y-4 flex-wrap '>
                {items.map((item: skillItemType) => <div
                    key={item._id}
                    className='flex gap-1.5 md:gap-2 border border-dashed border-sceondary py-1.5 px-2.5 rounded text-xs md:text-[14px] md:text-base hover:bg-bgDark trans'
                >
                    {item.icon}
                    <span className='font-semibold text-secondary '>
                        {item.title}
                        {item.isExpert ? <span className='text-primary'>*</span> : null}
                    </span>
                </div>)}
            </div>
        </div>

    )
}

export default SkillMainCard