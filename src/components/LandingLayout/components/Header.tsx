import { githubUrl, navItems, navSocialItems } from '@/config/constants';
import { navItemType } from '@/config/types/types';
import { cx } from '@/hooks/helpers';
import useHideBodyScroll from '@/hooks/useHideBodyScroll';
import React, { useState } from 'react'
import NavItem from '../partials/NavItem';
import codeEditorIcon from '../../../../public/json/code.json';
import Lottie from 'react-lottie-player';
import Link from 'next/link';
import SocialItems from '../partials/SocialItems';

type Props = {}

const Header = (props: Props) => {

    // states
    const [showSideNav, setShowSideNav] = useState(false);
    // handlers
    const handleSideNav = (): void => setShowSideNav(!showSideNav);

    useHideBodyScroll(showSideNav);

    const [play, setPlay] = useState({
        sIcon: false,
    });

    return (
        <>
            <div
                className={cx(
                    " py-2 w-full z-[999]  bg-lightDark shadow-[15px_-1px_10px_rgba(166,166,166,0.25)] fixed top-0 left-0"
                )}
            >
                <div className="container">
                    <div className="flex justify-between items-center">

                        <div className='flex gap-[40px] items-center'>
                            {/* <HeaderLogo /> */}
                            <div className='h-[40px] w-[40px] bg-primary flex items-center justify-center rounded-[8px]'>
                                <p className='text-[32px]'>S</p>
                            </div>

                            {/* desktop menu */}
                            <ul className="hidden lg:flex items-center lg:gap-x-[25px]">
                                {navItems.map((item: navItemType, index: number) => (
                                    <NavItem
                                        key={item._id}
                                        item={item}
                                        index={index}
                                        last={navItems.length - 1 === index}
                                    />
                                ))}
                            </ul>
                        </div>

                        <div className='flex gap-2'>
                            <a href={githubUrl} target='_blank' rel="noreferrer" className='flex items-center gap-1 group'
                                onMouseEnter={() => setPlay((prev) => ({ ...prev, sIcon: true }))}
                                onMouseLeave={() => setPlay((prev) => ({ ...prev, sIcon: false }))}
                            >
                                <div className='relative top-[2px]'>
                                    <Lottie
                                        animationData={codeEditorIcon}
                                        play={play.sIcon}
                                        speed={0.5}
                                        style={{ width: 24, height: 24 }}
                                        loop={play.sIcon}
                                    />
                                </div>
                                <p className='group-hover:text-primary trans'>Github</p>
                            </a>

                            <p className=''>|</p>

                            <ul className='flex flex-wrap'>
                                {navSocialItems.map((item: navItemType, index: number) => <SocialItems
                                    key={item._id}
                                    item={item}
                                    index={index}
                                    isLastItem={(navSocialItems.length - 1) === index}
                                />)}
                            </ul>
                        </div>

                        {/* <div className="lg:hidden flex gap-[30px]"> */}
                        {/* <NavRight
                                handleSideNav={handleSideNav}
                                showHumburgerMenu={true}
                                showCloseBtn={false}
                                setShowSideNav={setShowSideNav}
                                showSideNav={showSideNav}
                            /> */}
                        {/* </div> */}

                        {/* <div className="lg:block hidden "> */}
                        {/* <NavRight
                                handleSideNav={handleSideNav}
                                showHumburgerMenu={true}
                                showCloseBtn={false}
                                setShowSideNav={setShowSideNav}
                            /> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>

            {/* mobile navbar menu */}
            <div className={`navbar-menu relative md:z-[99] z-[999] lg:hidden ${showSideNav ? "block" : "hidden"}`} >
                {/* <MobileHumburgerMenu
                    handleSideNav={handleSideNav}
                    setShowSideNav={setShowSideNav}
                    showSideNav={showSideNav}
                /> */}
            </div>
        </>
    )
}

export default Header