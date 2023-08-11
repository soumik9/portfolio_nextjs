import React from 'react'

type Props = {
    title: string;
}

const PModalTitle = ({ title }: Props) => {
    return (
        <h6 className='text-[22px] text-purple-700 border-b border-purple-700 mb-4'>{title}</h6>
    )
}

export default PModalTitle