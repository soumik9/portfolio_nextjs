import { hrSummaryItems } from '@config/constants'
import { hrResType } from '@config/types/types'
import React from 'react'
import { cx } from 'src/hooks/helpers'

type Props = {}

const HRSummary = (props: Props) => {
    return (
        <>
            {hrSummaryItems.map((item: hrResType, index: number) => <div key={item._id} className={cx(
                'pb-8 border-b border-secondary',
                index !== 0 && 'pt-5'
            )}>
                <h3 className='heading-h3 text-secondary tracking-[0.1em]'>{item.percentage}</h3>
                <p className='text-purple p-text'>{item.title}</p>
            </div>)}
        </>
    )
}

export default HRSummary