import { summaryItemType } from '@config/types/types'
import React from 'react'
import { cx } from 'src/hooks/helpers';

type Props = {
    data: summaryItemType;
}

const SumItem = ({ data }: Props) => {
    return (
        <div className={cx(
            'text-center',
            data._id === 'summ_3' && 'col-span-2'
        )}>
            <h1 className='heading-h1 md:heading-h3 text-secondary font-secondary tracking-[0.1em]'>{data.count}</h1>
            <p className='text-purple p-text'>{data.title}</p>
        </div>
    )
}

export default SumItem