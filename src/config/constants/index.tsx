import { navItemType } from "../types/types";

// contact info
export const mobileNumber: string = "+8801689-201370";
export const emailAcc: string = "soumik.ahammed.9@gmail.com";
export const facebookUrl: string = "https://www.facebook.com/soumik.ahammed.9/";
export const twitterUrl: string = "tw";
export const instagramUrl: string = "ins";
export const linkedinUrl: string = "https://www.linkedin.com/in/soumik9/";
export const githubUrl: string = "https://github.com/soumik9";

export const homeUrl: string = "/";
export const aboutUrl: string = "/about";

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
        url: aboutUrl
    },
    {
        _id: 'navItem_4',
        title: 'Contact',
        url: aboutUrl
    },
]

export const navSocialItems: navItemType[] = [
    {
        _id: 'navSocialItem_1',
        title: 'FB',
        url: facebookUrl
    },
    {
        _id: 'navSocialItem_2',
        title: 'Lkdin',
        url: linkedinUrl
    },
    {
        _id: 'navSocialItem_3',
        title: 'Wapp',
        url: 'https://wa.me/01689201370'
    },
    {
        _id: 'navSocialItem_4',
        title: 'Email',
        url: emailAcc
    },
]