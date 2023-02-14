
import React from 'react'
import { cx } from 'src/hooks/helpers'

type Props = {}

const Button = (props: Props) => {
    return (
        <button
            className={cx(
                'relative text-primary flex items-center bg-none border-none p-[12px_18px] cursor-pointer before:content-none before:absolute before:top-[50%] before:z-[-1] before:translate-[calc(100%+4px)-50%)] before:w-[45px] before:h-[45px] before:bg-purple before:rounded-full'
            )}
        >
            Button
        </button>
    )
}

export default Button