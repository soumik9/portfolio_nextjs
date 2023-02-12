import { cx } from '@/hooks/helpers'
import React from 'react'

type Props = {}

const Button = (props: Props) => {
    return (
        <button
            className={cx(
                'relative text-black p-[24px_49px] rounded-[4px] font-medium trans overflow-hidden z-[1] border border-transparent before:content-none after:content-none before:absolute after:absolute before:top-0 after:top-0 before:left-0 after:left-0 before:z-[-1] after:z-[-1] after:bg-[#4d63dd] before:bg-[#4d63dd] before:trans after:trans after:delay-200 hover:before:left-[100%] hover:after:left-[100%]'
            )}
        >
            Button
        </button>
    )
}

export default Button