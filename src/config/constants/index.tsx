import EmailIcon from "@components/Icons/socials/EmailIcon";
import FacebookIcon from "@components/Icons/socials/FacebookIcon";
import Github from "@components/Icons/socials/Github";
import LinkedinIcon from "@components/Icons/socials/LinkedinIcon";
import WhatsappIcon from "@components/Icons/socials/WhatsappIcon";
import { navItemType } from "../types/types";

// contact info
export const mobileNumber: string = "+8801689-201370";
export const emailAcc: string = "soumik.ahammed.9@gmail.com";
export const facebookUrl: string = "https://www.facebook.com/soumik.ahammed.9/";
export const twitterUrl: string = "tw";
export const instagramUrl: string = "ins";
export const linkedinUrl: string = "https://www.linkedin.com/in/soumik9/";
export const githubUrl: string = "https://github.com/soumik9";
export const address: string = "Naogaon, Rajshahi, Bangladesh";

export const homeUrl: string = "/";
export const aboutUrl: string = "/about";
export const caseStudyUrl: string = "/case-study";
export const contactUrl: string = "/contact-us";

export const navItems: navItemType[] = [
    {
        _id: 'navItem_1',
        title: 'Home',
        url: homeUrl
    },
    {
        _id: 'navItem_2',
        title: 'About',
        url: aboutUrl
    },
    {
        _id: 'navItem_3',
        title: 'Case Study',
        url: caseStudyUrl
    },
    {
        _id: 'navItem_4',
        title: 'Contact',
        url: contactUrl
    },
]

export const navSocialItems: navItemType[] = [
    {
        _id: 'navSocialItem_1',
        title: 'FB',
        url: facebookUrl,
        icon: <FacebookIcon />,
    },
    {
        _id: 'navSocialItem_2',
        title: 'Lkdin',
        url: linkedinUrl,
        icon: <LinkedinIcon />,
    },
    {
        _id: 'navSocialItem_3',
        title: 'Wapp',
        url: 'https://wa.me/01689201370',
        icon: <WhatsappIcon />,
    },
    {
        _id: 'navSocialItem_4',
        title: 'Email',
        url: emailAcc,
        icon: <EmailIcon />,
    },
]

export const socialItems: navItemType[] = [
    {
        _id: 'socialItem_1',
        title: 'Github',
        url: githubUrl,
        icon: <Github />,
    },
    {
        _id: 'socialItem_2',
        title: 'FB',
        url: facebookUrl,
        icon: <FacebookIcon />,
    },
    {
        _id: 'socialItem_3',
        title: 'Lkdin',
        url: linkedinUrl,
        icon: <LinkedinIcon />,
    },
    {
        _id: 'socialItem_4',
        title: 'Wapp',
        url: 'https://wa.me/01689201370',
        icon: <WhatsappIcon />,
    },
    {
        _id: 'socialItem_5',
        title: 'Email',
        url: emailAcc,
        icon: <EmailIcon />,
    },
]
export const footerUserfulItems: navItemType[] = [
    {
        _id: 'footUseful_1',
        title: 'About Me',
        url: aboutUrl,
    },
    {
        _id: 'footUseful_2',
        title: 'Case Study',
        url: caseStudyUrl,
    },
    {
        _id: 'footUseful_3',
        title: 'Contact Me',
        url: contactUrl,
    },
]