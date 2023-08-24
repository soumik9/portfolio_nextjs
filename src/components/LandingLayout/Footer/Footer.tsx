import { encodedAdress, encodedEmail, footerUserfulItems, socialItems } from '@config/constants'
import { navItemType } from '@config/types/types'
import React, { useState } from 'react'
import { cx } from 'src/hooks/helpers'
import FooterLinksDiv from './partials/FooterLinksDiv'
import wakieIcon from '../../../../public/json/walkie.json'
import emailIcon from '../../../../public/json/email.json'
import locationIcon from '../../../../public/json/location.json'
import DesktopFollowMe from './partials/DesktopFollowMe'
import DetailsItem from './partials/DetailsItem'
import { useRouter } from 'next/router'

const Footer = () => {

    const router = useRouter();

    // states
    const [play, setPlay] = useState({ wakieIcon: false, emailIcon: false, locationIcon: false });

    const sendMail = () => {
        router.push('mailto:'.concat(atob(encodedEmail)));
    };

    const phoneCall = () => {
        router.push('tel:'.concat(atob(encodedEmail)));
    };

    const adressFind = () => {
        router.push(atob(encodedAdress));
    };

    return (
        <>
            <footer className="bg-bgDark pt-10 pb-4">
                <div className="container">

                    <div className="grid xll:grid-cols-[61%_39%] 3xll:grid-cols-2">

                        <div className='text-center md:grid md:grid-cols-3 md:items-center md:text-start'>

                            <div className='col-span-2'>

                                <h4 className='text-secondary text-[26px]'>Soumik Ahammed</h4>

                                <p className='text-secondary mt-0 mb-2'>
                                    {`Message me on any of these platforms, and I'll respond within 1-2 business days.`}
                                </p>

                                <DesktopFollowMe />
                            </div>


                            <div className='lg:hidden block'>
                                <ul className="flex gap-5 md:gap-4 md:relative md:-top-4 justify-center md:justify-start mt-7 lg:mt-0 items-center">
                                    {socialItems.map((item: navItemType, index: number) => <li key={`footerSocialMob${index}`} className={cx(
                                        '',
                                    )}>
                                        <a href={item.url} target='_blank' rel='noreferrer' aria-label={item.title}>
                                            {item.icon}
                                        </a>
                                    </li>)}

                                </ul>
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 mt-0 md:mt-9 lg:mt-0'>

                            <div className='mt-7 md:mt-0 flex flex-col items-center md:block'>
                                <FooterLinksDiv
                                    title='Useful Links'
                                    array={footerUserfulItems}
                                />
                            </div>

                            <div className='mt-8 md:mt-0 text-center md:text-start'>
                                <span className="block uppercase text-sm font-semibold lg:text-white text-primary">Get in touch</span>

                                <ul className="mt-4 flex flex-col items-center md:items-start">
                                    <DetailsItem
                                        playIcon={play.wakieIcon}
                                        lottieIcon={wakieIcon}
                                        text={'Call Me'}
                                        onClick={phoneCall}
                                        onMouseEnter={() => setPlay((prev: any) => ({ ...prev, wakieIcon: true }))}
                                        onMouseLeave={() => setPlay((prev: any) => ({ ...prev, wakieIcon: false }))}
                                    />

                                    <DetailsItem
                                        playIcon={play.emailIcon}
                                        lottieIcon={emailIcon}
                                        text={'Email Me'}
                                        onClick={sendMail}
                                        onMouseEnter={() => setPlay((prev: any) => ({ ...prev, emailIcon: true }))}
                                        onMouseLeave={() => setPlay((prev: any) => ({ ...prev, emailIcon: false }))}
                                        mainCss='py-3'
                                    />

                                    <DetailsItem
                                        playIcon={play.locationIcon}
                                        lottieIcon={locationIcon}
                                        text={'Find My Location'}
                                        onClick={adressFind}
                                        onMouseEnter={() => setPlay((prev: any) => ({ ...prev, locationIcon: true }))}
                                        onMouseLeave={() => setPlay((prev: any) => ({ ...prev, locationIcon: false }))}
                                        target={true}
                                    />

                                </ul>
                            </div>
                        </div>

                    </div>


                    <hr className="md:my-6 my-4 border-primary-300" />


                    <div className="w-full px-4 mx-auto text-center text-sm">
                        <p className="py-1 uppercase">
                            Copyright ©
                            <span id="get-current-year">{new Date().getFullYear()}</span>
                            <span className='text-primary-300'> Soumik Ahammed</span>
                        </p>
                    </div>


                </div>
            </footer>
        </>
    )
}

export default Footer