import { hrSummaryItems } from '@config/constants'
import { hrResType } from '@config/types/types'
import { Rating } from '@mui/material'
import React, { useState } from 'react'
import { cx } from 'src/hooks/helpers'

type Props = {}

const HRSummary = (props: Props) => {

    const [value, setValue] = useState<number | null>(5);

    return (
        <>
            {hrSummaryItems.map((item: hrResType, index: number) => <div key={item._id} className={cx(
                'pb-8 border-b border-secondary',
                index !== 0 && 'pt-7'
            )}>
                <h3 className='heading-h3 text-secondary tracking-[0.1em] flex justify-center md:justify-start items-center'>
                    {item.percentage}

                    {index === 2 ? <span className='relative md:-top-1 top-[0.2rem] ml-1.5'>
                        <Rating name="read-only" value={value} readOnly sx={{
                            '& .MuiRating-iconFilled': {
                                color: '#E7BD8D',
                            },
                        }} />
                    </span> : null}
                </h3>

                <p className='text-purple p-text text-center md:text-start'>{item.title}</p>

            </div>)}
        </>
    )
}

export default HRSummary