import React from 'react'
import Lottie from 'react-lottie-player';
import { cx } from 'src/hooks/helpers';

type Props = {
    href: string;
    text: string;
    lottieIcon: any;
    playIcon: any;
    mainCss?: string;
    onMouseLeave: any;
    onMouseEnter: any;
    target?: boolean;
}

const DetailsItem = ({
    href, lottieIcon, playIcon, text, mainCss, onMouseLeave, onMouseEnter, target
}: Props) => {
    return (
        <li className={cx(mainCss)}>
            <a href={href} className='flex items-center gap-1 group' target={target ? '_blank' : ''} rel='noreferrer'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className='relative top-[2px]'>
                    <Lottie
                        animationData={lottieIcon}
                        play={playIcon}
                        speed={0.5}
                        style={{ width: 28, height: 28 }}
                        loop={playIcon}
                    />
                </div>
                <p className='group-hover:text-primary trans relative top-[1px] text-secondary font-secondary font-semibold trans text-sm'>{text}</p>
            </a>
        </li>
    )
}

export default DetailsItem