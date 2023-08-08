import { IProject } from "@config/types/types";

export const projectItems: IProject[] = [
    {
        _id: 'projectItem1',
        title: '',
        thumbnail: '',
        images: [
            'a'
        ],
        links: {
            clientLink: '',
            clientGithub: '',
            serverLink: '',
            serverGithhub: '',
            reportLink: '',
        },
        description: '',
        features: [
            "Responsive website.",
            "Admin, Customer.",
            "Login, Registration, Google Auth, Reset.",
            "JWT token verification.",
            "Stripe payment intregation."
        ],
        frontendTechnologies: [
            "React",
        ],
        backendTechnologies: [
            "React",
        ],
    },
]