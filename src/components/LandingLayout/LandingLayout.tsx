import React from 'react'

type Props = {}

const LandingLayout = (props: Props) => {
    return (
        <header className="header-section header-style-1 absolute w-full z-[99] left-0 top-[10px]">
            <div className="container">

                <div className="row align-items-center flex items.center">
                    <div className="col-lg-2 col-6">
                        <div className="logo">
                            <a href="index.html">Spruce</a>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-lg-2 d-none d-lg-block text-right">
                        <div className="main-menu">
                            <ul>
                                <li><a href="#">Home</a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="index.html">Homepage 1</a>
                                        </li>
                                        <li>
                                            <a href="index-2.html">Homepage 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">services</a></li>
                                <li><a href="#resume">Resume</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#blog">blog</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 d-block d-lg-none">
                        <div className="menu-toggle text-right">
                            <div id="hamburger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <div className="mobile-nav">
                            <button type="button" className="close-nav">
                                <i className="fal fa-times-circle"></i>
                            </button>
                            <nav className="sidebar-nav">
                                <ul className="metismenu" id="mobile-menu">
                                    <li>
                                        <a className="has-arrow" href="#">Home</a>
                                        <ul>
                                            <li>
                                                <a href="index.html">Homepage 1</a>
                                            </li>
                                            <li>
                                                <a href="index-2.html">Homepage 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#about">about</a>
                                    </li>
                                    <li>
                                        <a href="#services">services</a>
                                    </li>
                                    <li>
                                        <a href="#portfolio">portfolio</a>
                                    </li>
                                    <li>
                                        <a href="#blog">blog</a>
                                    </li>
                                    <li>
                                        <a href="#contact">contact</a>
                                    </li>
                                </ul>
                            </nav>

                            <a href="#" className="theme-btn mt-4">+ Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default LandingLayout