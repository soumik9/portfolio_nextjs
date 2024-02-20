import React from 'react'
import { cx } from 'src/hooks/helpers';

type Props = {
    href?: string;
    text: string;
    mainCss?: string;
    target?: boolean;
    onClick?: any;
    icon: React.ReactNode;
}

const DetailsItem = ({
    href, text, mainCss, target, onClick, icon
}: Props) => {
    return (
        <li className={cx(mainCss)}>
            <a
                href={href}
                className='flex items-center gap-1 group cursor-pointer'
                target={target ? '_blank' : ''}
                rel='noreferrer'
                onClick={onClick}
                aria-label={text}
            >
                {icon}
                <p className='group-hover:text-primary trans relative top-[1px] text-secondary font-secondary font-semibold trans text-sm'>{text}</p>
            </a>
        </li>
    )
}

export default DetailsItem