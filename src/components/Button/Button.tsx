
import React from 'react'
import { cx } from 'src/hooks/helpers'

type Props = {
    outlined?: boolean;
}

const Button = ({ outlined }: Props) => {
    return (
        <div className='my-10 container'>
            <button
                className={cx(
                    'button-arounder p-[16px_24px] text-[18px]   focus:bg-smartian hover:bg-primary-700',
                    outlined ? 'bg-white text-primary border border-primary focus:text-white hover:text-white ' : 'bg-primary text-white border-none'
                )}
            >
                Hover Me
            </button>
        </div>

    )
}

export default Button