import FacebookIcon from '@components/Icons/socials/FacebookIcon'
import { footerUserfulItems, socialItems } from '@config/constants'
import { navItemType } from '@config/types/types'
import { Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import { cx } from 'src/hooks/helpers'
import FooterLinksDiv from './partials/FooterLinksDiv'
import wakieIcon from '../../../../public/json/walkie.json'

type Props = {}

const Footer = (props: Props) => {

    const [play, setPlay] = useState({
        wakieIcon: false,
    });

    return (
        <>
            <footer className="bg-lightDark py-16">
                <div className="container">

                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12">

                            <Typography variant="h4" gutterBottom className='text-secondary'>
                                Let's keep in touch!
                            </Typography>

                            <Typography variant="subtitle1" gutterBottom className='text-secondary mt-0 mb-2'>
                                Find us on any of these platforms, we respond 1-2 business days.
                            </Typography>

                            <div className='flex items-center pointer-events-none hover:pointer-events-auto group mt-10'>

                                <Typography variant="body2" gutterBottom className="sm-header uppercase cursor-pointer pointer-events-auto">
                                    Follow me on
                                </Typography>

                                <div className="line w-[4rem] h-[3px] bg-white mx-[1rem] scale-x-[0.2] origin-left transition-[transform_0.5s] group-hover:scale-x-[1]">

                                </div>

                                <ul className="flex gap-2">
                                    {/* mx-[2.5rem] opacity-0 transition-[transform_0.5s,opacity_0.5s]  */}
                                    {socialItems.map((item: navItemType, index: number) => <li key={`footerSocial${index}`} className={cx(
                                        'footer-social-item group-hover:opacity-[1] group-hover:translate-y-0',
                                        index === 4 && 'relative -top-1'
                                    )}>

                                        <a href={item.url} target='_blank' rel='noreferrer'>
                                            {item.icon}
                                        </a>


                                    </li>)}

                                </ul>

                            </div>


                            {/* <div className="mt-6 lg:mb-0 mb-6">
                                <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div> */}
                        </div>

                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">

                                <FooterLinksDiv
                                    title='Useful Links'
                                    array={footerUserfulItems}
                                />

                                <div className="w-full lg:w-5/12 px-4 ml-auto">
                                    <span className="block uppercase text-sm font-semibold text-white">Details</span>
                                    <ul className="mt-4">
                                        <li className='py-2'>
                                            <a href={''} target='_blank' rel="noreferrer" className='flex items-center gap-1 group'
                                                onMouseEnter={() => setPlay((prev) => ({ ...prev, wakieIcon: true }))}
                                                onMouseLeave={() => setPlay((prev) => ({ ...prev, wakieIcon: false }))}
                                            >
                                                <div className='relative top-[2px]'>
                                                    <Lottie
                                                        animationData={wakieIcon}
                                                        play={play.wakieIcon}
                                                        speed={0.5}
                                                        style={{ width: 28, height: 28 }}
                                                        loop={play.wakieIcon}
                                                    />
                                                </div>
                                                <p className='group-hover:text-primary trans relative top-[1px]'>+8801689-201370</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-primary-300" />

                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">

                            <Typography variant="body2" gutterBottom className="py-1 uppercase">
                                Copyright ©
                                <span id="get-current-year">{new Date().getFullYear()}</span>
                                <span className='text-primary-300'> Soumik Ahammed</span>
                            </Typography>

                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer