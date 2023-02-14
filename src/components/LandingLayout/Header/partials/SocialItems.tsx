
import { navItemType } from '@config/types/types';
import React from 'react'

type Props = {
    item: navItemType;
    index: number;
    isLastItem: boolean;
}

const SocialItems = ({ item, index, isLastItem }: Props) => {
    return (
        <li className='mx-[6px] '>
            <a href={index !== 3 ? item.url : `mailto:${item.url}`} className='text-secondary hover:text-primary trans' target='_blank' rel="noreferrer">
                {item.title}
            </a>
            {!isLastItem ? <span className='relative top-[-3px] ml-2'>.</span> : null}
        </li>
    )
}

export default SocialItems