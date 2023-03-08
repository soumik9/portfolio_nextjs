import EmailIcon from "@components/Icons/socials/EmailIcon";
import FacebookIcon from "@components/Icons/socials/FacebookIcon";
import Github from "@components/Icons/socials/Github";
import LinkedinIcon from "@components/Icons/socials/LinkedinIcon";
import WhatsappIcon from "@components/Icons/socials/WhatsappIcon";
import { hrResType, navItemType, reviewSliderType, summaryItemType } from "../types/types";

// contact info
export const mobileNumber: string = "+8801689-201370";
export const emailAcc: string = "soumik.ahammed.9@gmail.com";
export const facebookUrl: string = "https://www.facebook.com/soumik.ahammed.9/";
export const twitterUrl: string = "tw";
export const instagramUrl: string = "ins";
export const linkedinUrl: string = "https://www.linkedin.com/in/soumik9/";
export const githubUrl: string = "https://github.com/soumik9";
export const address: string = "Naogaon, Rajshahi, Bangladesh";

export const encodedMobile: string = 'Kzg4MDE2ODktMjAxMzcw'
export const encodedEmail: string = 'c291bWlrLmFoYW1tZWQuOUBnbWFpbC5jb20='
export const encodedAdress: string = 'aHR0cHM6Ly9nb28uZ2wvbWFwcy9vZ0VEV3NYUllTNHp4MjZSQQ=='

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

export const summaryItems: summaryItemType[] = [
    {
        _id: 'summ_1',
        count: '20+',
        title: 'Project Completed',
    },
    {
        _id: 'summ_2',
        count: '7+',
        title: 'Global Clients',
    },
    {
        _id: 'summ_3',
        count: '2+',
        title: 'Years Experience',
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

export const hrSummaryItems: hrResType[] = [
    {
        _id: 'hrSum_1',
        percentage: '100%',
        title: 'Satisfation Rate',
    },
    {
        _id: 'hrSum_2',
        percentage: '100%',
        title: 'Satisfation Rate',
    },
    {
        _id: 'hrSum_3',
        percentage: '5',
        title: 'Google Review',
    },
]

export const reviewSlidersData: reviewSliderType[] = [
    {
        _id: 'reviewsSlider_1',
        img: '/reviews/md-yousuf.jpg',
        name: 'MD Yousuf',
        review: 'This was my first time using a web developer and I am beyond satisfied. Not only with the customer service. He made  sure my site was exactly what I wanted. Helped me with every aspect. I will definitely be recommending him to other companies or clients. Thans for such good work.',
        position: 'Operation Manager, Decipher Tech',
    },
    {
        _id: 'reviewsSlider_2',
        img: '/reviews/tamim.jpg',
        name: 'Tamim Hasan',
        review: 'Working with him was a pleasure. His expertise and knowledge of POS management helped us to create a highly efficient and effective sale system. He was able to deliver the project on time and within budget. We gladly recommend anyone looking for a professional developer to hire him.',
        position: 'Owner, <br /> Tamim Enterprise',
    },
    {
        _id: 'reviewsSlider_3',
        img: '/reviews/sabit.jpeg',
        name: 'MD SABIT HOSSAIN',
        review: 'Their way of work and every cooperation are really appreciating. And thanks to the team for making us a wonderful website for our organization. They find the best out of it. We were pleased with the result and would definitely recommend them',
        position: 'Logistics and Operation Headr, Yangzhou University',
    },
]