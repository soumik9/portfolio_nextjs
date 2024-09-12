import React from 'react'
import { cx } from 'src/hooks/helpers';

type Props = {
    children: React.ReactNode;
    divCss: string;
}

const LightDarkCardLayout = ({ children, divCss }: Props) => {
    return (
        <div className={cx("bg-lightDark md:p-[40px] p-[40px_15px] rounded-sm relative w-full", divCss)}>
            {children}
        </div>
    )
}

export default LightDarkCardLayout