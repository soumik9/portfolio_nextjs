import { hrSummaryItems, starCustomStyle } from '@config/constants'
import { hrResType } from '@config/types/types'
import React, { useState } from 'react'
import { cx } from 'src/hooks/helpers'
import { Rating } from '@smastrom/react-rating';

const HRSummary: React.FC = () => {

    // states
    const [value, setValue] = useState<number>(5);

    return (
        <>
            {hrSummaryItems.map((item: hrResType, index: number) => <div key={item._id} className={cx(
                'pb-8 border-b border-secondary',
                index !== 0 && 'pt-7'
            )}>
                <h3 className='heading-h3 text-secondary tracking-[0.1em] flex justify-center md:justify-start items-center'>
                    {item.percentage}

                    {index === 2 ? <span className='relative md:-top-[-1px] lg:top-0 top-0 ml-1.5'>
                        <Rating
                            value={value}
                            readOnly={true}
                            itemStyles={starCustomStyle}
                            className='max-w-[100px] md:max-w-[120px] lg:max-w-[140px]'
                        />
                    </span> : null}
                </h3>

                <p className='text-purple p-text text-center md:text-start'>{item.title}</p>

            </div>)}
        </>
    )
}

export default HRSummary