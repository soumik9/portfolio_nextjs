import React from 'react'

type Props = {
    children: React.ReactNode;
}

const SectionLayout = ({ children }: Props) => {
    return (
        <section className='lg:py-[80px] md:py-[60px] py-[40px]'>
            <div className="container">
                {children}
            </div>
        </section>
    )
}

export default SectionLayout