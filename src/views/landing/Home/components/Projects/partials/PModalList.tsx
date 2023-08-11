import React from 'react'
import PModalTitle from './PModalTitle'
import { TbCheckbox } from 'react-icons/tb';
import { cx } from 'src/hooks/helpers';

type Props = {
    title: string;
    key: string;
    classes?: string;
    arr: string[] | undefined;
}

const PModalList = ({ arr, title, key, classes }: Props) => {
    return (
        <>
            <PModalTitle title={title} />

            <ul className={cx(
                classes,
                'flex mb-8'
            )}>
                {arr?.map((item: string, index: number) => <li
                    key={`${key}${index}`}
                    className='flex items-center gap-1 md:gap-2 border border-dashed border-purple-700 hover:border-purple trans group py-1.5 px-2.5 rounded text-[14px] md:text-base'
                >
                    <TbCheckbox className='relative top-[2px] text-purple text-[20px]' />
                    <span className='text-lightDark'>{item}</span>
                </li>)}
            </ul>

        </>
    )
}

export default PModalList