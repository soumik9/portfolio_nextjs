import React from 'react'
import { cx } from 'src/hooks/helpers';

type Props = {
    children: React.ReactNode;
    css?: string;
}

const SectionLayout = ({ children, css }: Props) => {
    return (
        <section className={cx(
            css,
            'lg:py-[80px] md:py-[60px] py-[40px]'
        )}>
            <div className="container">
                {children}
            </div>
        </section>
    )
}

export default SectionLayout