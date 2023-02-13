import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

type Props = {
    children: React.ReactNode;
};

const LandingLayout = ({ children }: Props) => {
    return (
        <>
            {/* Header space fillout section */}
            {/* <div className="lg:h-[98px] h-[82px]" ></div > */}
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default LandingLayout