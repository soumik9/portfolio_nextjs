import React, { useState } from 'react'
import NavItem from './partials/NavItem';
import SocialItems from './partials/SocialItems';
import useHideBodyScroll from 'src/hooks/useHideBodyScroll';
import { navItemType } from '@config/types/types';
import { githubUrl, homeUrl, navItems, navSocialItems } from '@config/constants';
import { cx } from 'src/hooks/helpers';
import Hamburger from '@components/Icons/global/Hamburger';
import Cross from '@components/Icons/global/Cross';
import Link from 'next/link';
import MobileMenu from './partials/MobileMenu';
import { FaCode } from 'react-icons/fa';

const Header = () => {

    // states
    const [showSideNav, setShowSideNav] = useState(false);

    // handlers
    const handleSideNav = (): void => setShowSideNav(!showSideNav);

    // hide body
    useHideBodyScroll(showSideNav);

    return (
        <>
            <div
                className={cx(
                    " py-2 w-full z-[999] bg-bgDark shadow-[15px_-1px_10px_rgba(166,166,166,0.25)] fixed top-0 left-0"
                )}
            >
                <div className="container">
                    <div className="flex justify-between items-center">

                        <div className='flex gap-[40px] items-center'>

                            <Link href={homeUrl} aria-label='Soumik Ahammed'
                                className='h-[40px] w-[40px] bg-primary flex items-center justify-center rounded-[8px]'>
                                <span className='text-[32px] text-lightDark'>S</span>
                            </Link>


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

                        <div className='hidden lg:flex gap-2'>
                            <a
                                href={githubUrl}
                                target='_blank'
                                rel="noreferrer"
                                className='flex items-center gap-2 group'
                                aria-label='Github'
                            >
                                <FaCode className='relative top-[2px] text-secondary group-hover:text-primary text-[18px] group-hover:rotate-[360deg] duration-500' />
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

                        <div className={`lg:hidden flex items-center justify-center ${showSideNav && "ml-[7px]"}`} >
                            <button
                                className="outline-none"
                                onClick={handleSideNav}
                                aria-label='Humburger/Cross Button'
                            >
                                {showSideNav ? <Cross /> : <Hamburger />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile navbar menu */}
            <div className={`navbar-menu relative z-[999] lg:hidden ${showSideNav ? "block" : "hidden"}`} >
                <MobileMenu
                    handleSideNav={handleSideNav}
                    setShowSideNav={setShowSideNav}
                    showSideNav={showSideNav}
                />
            </div>
        </>
    )
}

export default Header