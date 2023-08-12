import React from 'react';
import PModalTitle from './PModalTitle';
import { TbCheckbox } from 'react-icons/tb';
import { cx } from 'src/hooks/helpers';
import { IProjectRoutes } from '@config/types/types';

type Props = {
    title: string;
    key: string;
    classes?: string;
    isLink?: boolean;
    arr: (string | IProjectRoutes)[] | undefined;
}

const PModalList = ({ arr, title, key, classes, isLink }: Props) => {
    return (
        <>
            <PModalTitle title={title} />

            <ul className={cx(
                classes,
                'flex mb-8'
            )}>
                {arr?.map((item, index) => (
                    <li
                        key={`${key}${index}`}
                        className='flex items-center gap-1 md:gap-2 border border-dashed border-purple-700 hover:border-purple trans group py-1.5 px-2.5 rounded text-[14px] md:text-base'
                    >
                        <TbCheckbox className={cx(
                            'relative top-[2px] text-purple text-[20px]',
                            isLink && 'group-hover:text-smartian trans'
                        )} />
                        {isLink && typeof item !== 'string' ? (
                            <a href={item.link} target='_blank' rel="noreferrer" className='text-lightDark group-hover:underline trans group-hover:text-smartian'>{item.text}</a>
                        ) : (
                            <span className='text-lightDark'>{typeof item === 'string' ? item : item.text}</span>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default PModalList;