import FacebookIcon from '@components/Icons/socials/FacebookIcon'
import { address, emailAcc, footerUserfulItems, mobileNumber, socialItems } from '@config/constants'
import { navItemType } from '@config/types/types'
import { Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import { cx } from 'src/hooks/helpers'
import FooterLinksDiv from './partials/FooterLinksDiv'
import wakieIcon from '../../../../public/json/walkie.json'
import emailIcon from '../../../../public/json/email.json'
import locationIcon from '../../../../public/json/location.json'
import DesktopFollowMe from './partials/DesktopFollowMe'

type Props = {}

const Footer = (props: Props) => {

    const [play, setPlay] = useState({
        wakieIcon: false,
        emailIcon: false,
        locationIcon: false,
    });

    return (
        <>
            <footer className="bg-lightDark pt-10 pb-4">
                <div className="container">

                    <div className="grid xll:grid-cols-[61%_39%] 3xll:grid-cols-2">

                        <div className='text-center md:grid md:grid-cols-3 md:items-center md:text-start'>

                            <div className='col-span-2'>
                                <Typography variant="h4" gutterBottom className='text-secondary'>
                                    {` Let's keep in touch!`}
                                </Typography>

                                <Typography variant="subtitle1" gutterBottom className='text-secondary mt-0 mb-2'>
                                    Find us on any of these platforms, we respond 1-2 business days.
                                </Typography>

                                <DesktopFollowMe />
                            </div>


                            <div className='lg:hidden block'>
                                <ul className="flex gap-5 md:gap-4 md:relative md:-top-4 justify-center md:justify-start mt-7 lg:mt-0 items-center">
                                    {socialItems.map((item: navItemType, index: number) => <li key={`footerSocialMob${index}`} className={cx(
                                        '',
                                    )}>
                                        <a href={item.url} target='_blank' rel='noreferrer'>
                                            {item.icon}
                                        </a>
                                    </li>)}

                                </ul>
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 mt-0 md:mt-9 lg:mt-0'>

                            <div className='mt-7 md:mt-0 text-center md:text-start'>
                                <FooterLinksDiv
                                    title='Useful Links'
                                    array={footerUserfulItems}
                                />
                            </div>

                            <div className='mt-8 md:mt-0 text-center md:text-start'>
                                <span className="block uppercase text-sm font-semibold lg:text-white text-primary">Details</span>
                                <ul className="mt-4 flex flex-col items-center md:items-start">

                                    <li className=''>
                                        <a href={`tel:${mobileNumber}`} className='flex items-center gap-1 group'
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
                                            <p className='group-hover:text-primary trans relative top-[1px] text-secondary font-secondary font-semibold trans text-sm'>+8801689-201370</p>
                                        </a>
                                    </li>

                                    <li className='py-3'>
                                        <a href={`mailto:${emailAcc}`} className='flex items-center gap-1 group'
                                            onMouseEnter={() => setPlay((prev) => ({ ...prev, emailIcon: true }))}
                                            onMouseLeave={() => setPlay((prev) => ({ ...prev, emailIcon: false }))}
                                        >
                                            <div className='relative top-[2px]'>
                                                <Lottie
                                                    animationData={emailIcon}
                                                    play={play.emailIcon}
                                                    speed={0.5}
                                                    style={{ width: 28, height: 28 }}
                                                    loop={play.emailIcon}
                                                />
                                            </div>
                                            <p className='group-hover:text-primary trans relative top-[1px] text-secondary font-secondary font-semibold trans text-sm'>{emailAcc}</p>
                                        </a>
                                    </li>

                                    <li className='py-0'>
                                        <a href={`mailto:${emailAcc}`} className='flex items-center gap-1 group'
                                            onMouseEnter={() => setPlay((prev) => ({ ...prev, locationIcon: true }))}
                                            onMouseLeave={() => setPlay((prev) => ({ ...prev, locationIcon: false }))}
                                        >
                                            <div className='relative top-[2px]'>
                                                <Lottie
                                                    animationData={locationIcon}
                                                    play={play.locationIcon}
                                                    speed={0.5}
                                                    style={{ width: 28, height: 28 }}
                                                    loop={play.locationIcon}
                                                />
                                            </div>
                                            <p className='group-hover:text-primary trans relative top-[1px] text-secondary font-secondary font-semibold trans text-sm'>{address}</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>



                    <hr className="md:my-6 my-4 border-primary-300" />

                    <div className="w-full px-4 mx-auto text-center">

                        <Typography variant="body2" gutterBottom className="py-1 uppercase">
                            Copyright ©
                            <span id="get-current-year">{new Date().getFullYear()}</span>
                            <span className='text-primary-300'> Soumik Ahammed</span>
                        </Typography>

                    </div>


                </div>
            </footer>
        </>
    )
}

export default Footer