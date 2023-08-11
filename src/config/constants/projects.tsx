import { IProject } from "@config/types/types";

export const fullStackWebDevelopment: string = 'Full Stack Web Development';
export const backendDevelopment: string = 'Backend Development';
export const frontendDevelopment: string = 'Frontend Development';

export const projectItems: IProject[] = [
    // {
    //     _id: 'projectItem1',
    //     title: '',
    //     category: 'Full Stack Web Development',
    //     thumbnail: '',
    //     images: [
    //         'a'
    //     ],
    //     links: {
    //         clientLink: '',
    //         clientGithub: '',
    //         serverLink: '',
    //         serverGithhub: '',
    //         reportLink: '',
    //     },
    //     description: '',
    //     features: [
    //         "Responsive website.",
    //         "Admin, Customer.",
    //         "Login, Registration, Google Auth, Reset.",
    //         "JWT token verification.",
    //         "Stripe payment intregation."
    //     ],
    //     frontendTechnologies: [
    //         "React",
    //     ],
    //     backendTechnologies: [
    //         "React",
    //     ],
    // },
    {
        _id: 'projectItem2',
        title: 'PC Builder',
        category: fullStackWebDevelopment,
        thumbnail: '/projects/pc-builder/thumbnail.PNG',
        images: [
            {
                title: '',
                src: '/projects/pc-builder/s1.PNG'
            },
            {
                title: '',
                src: '/projects/pc-builder/s2.PNG'
            },
            {
                title: '',
                src: '/projects/pc-builder/s3.PNG'
            },
            {
                title: '',
                src: '/projects/pc-builder/s4.PNG'
            },
            {
                title: '',
                src: '/projects/pc-builder/s5.PNG'
            },
            {
                title: '',
                src: '/projects/pc-builder/s6.PNG'
            },
        ],
        links: [
            {
                name: 'Live Site',
                link: 'https://pc-crafts.vercel.app/'
            },
            {
                name: 'Client Github',
                link: 'https://github.com/soumik9/pc-crafts'
            },
            {
                name: 'Server Live',
                link: 'https://pc-craft-server.vercel.app/'
            },
        ],
        description: "Welcome to our premier PC Build website, your ultimate destination for creating the perfect custom computer setup tailored to your needs. Whether you're a hardcore gamer, a creative professional, or simply seeking a high- performance workstation, our platform empowers you to design, assemble, and optimize your dream PC.",
        features: [
            "Authentication with Github.",
            "Home Page (Header, Banner, 6 featured products, 6 featured categories, Footer).",
            "API`s fetch with SSR, SSG.",
            "Dynamic Products showing page by category based.",
            "All product page.",
            "PC Build page [Can choose item based category, Complete PC Build]."
        ],
        techs: [
            "NextJS", "TypeScript", "Next Auth", "Redux Toolkkit", "RTK Query", "React hook forms", "Yup", "React hot toast"
        ],
    },
    {
        _id: 'projectItem3',
        title: 'Tour Management API',
        category: backendDevelopment,
        thumbnail: '/projects/backend.png',
        images: [
            {
                title: '',
                src: ''
            }
        ],
        links: [
            {
                name: 'Live Site',
                link: ''
            },
            {
                name: 'Client Github',
                link: ''
            },
        ],
        description: '',
        features: [
            "Responsive website.",
            "Admin, Customer.",
            "Login, Registration, Google Auth, Reset.",
            "JWT token verification.",
            "Stripe payment intregation."
        ],
        techs: [
            "React",
        ],
    },
    {
        _id: 'projectItem4',
        title: 'Tazkily',
        category: frontendDevelopment,
        thumbnail: '/projects/tazkily/thumbnail.PNG',
        images: [
            {
                title: '',
                src: ''
            }
        ],
        links: [
            {
                name: 'Live Site',
                link: ''
            },
            {
                name: 'Client Github',
                link: ''
            },
        ],
        description: '',
        features: [
            "Responsive website.",
            "Admin, Customer.",
            "Login, Registration, Google Auth, Reset.",
            "JWT token verification.",
            "Stripe payment intregation."
        ],
        techs: [
            "React",
        ],
    },
]