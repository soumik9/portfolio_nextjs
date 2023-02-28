import React from 'react'

type Props = {
    titleSpan: string;
    title: string;
    subTitle: string;
}

const SectionTop = ({ titleSpan, title, subTitle }: Props) => {
    return (
        <center>
            <h5 className='heading-h5 text-secondary uppercase'>{subTitle}</h5>
            <h1 className='mt-[12px] heading-h1 text-secondary font-secondary capitalize'>
                {title} <span className='text-primary'>{titleSpan}</span>
            </h1>
        </center>
    )
}

export default SectionTop