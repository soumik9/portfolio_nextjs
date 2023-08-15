
import React, { ButtonHTMLAttributes } from 'react'
import { cx } from 'src/hooks/helpers'

type Props = {
    text: string | React.ReactNode;
    classes?: string;
    outlined?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ outlined, text, classes, startIcon, endIcon, ...props }: Props) => {
    return (
        <button
            className={cx(
                classes,
                'button-arounder p-[16px_24px] text-[18px] focus:bg-smartian rounded-sm font-medium',
                outlined ? 'bg-white text-purple hover:text-purple-600 border border-primary focus:text-white' : 'bg-primary text-lightDark border-none',
                (startIcon || endIcon) && 'flex items-center gap-2'
            )}
            {...props}
        >
            {startIcon ? startIcon : null} {text}  {endIcon ? endIcon : null}
        </button>
    )
}

export default Button