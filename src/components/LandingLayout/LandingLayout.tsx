import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

type Props = {
    children: React.ReactNode;
};

const LandingLayout = ({ children }: Props) => {
    return (
        <>
            {/* Header space fillout section-- */}
            <div className="lg:h-[80px] h-[55px]" ></div >
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default LandingLayout