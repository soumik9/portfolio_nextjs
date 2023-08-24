import { IProject } from "@config/types/types";

export const fullStackWebDevelopment: string = 'Full Stack Web Development';
export const backendDevelopment: string = 'Backend Development';
export const frontendDevelopment: string = 'Frontend Development';

export const projectItems: IProject[] = [
    {
        _id: 'projectItem1',
        title: 'Inventory Management',
        category: 'Full Stack Web Development',
        thumbnail: '/projects/inventory/thumbnail.PNG',
        images: [
            {
                title: '',
                src: '/projects/inventory/s0.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s1.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s1a.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s1b.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s1c.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s1d.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s1e.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s2.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s3.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s4.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s5.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s6.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s7.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s8.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s9.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s10.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s11.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s12.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s13.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s14.PNG'
            },
            {
                title: '',
                src: '/projects/inventory/s15.PNG'
            },
        ],
        links: [
            {
                name: 'Live Site',
                link: 'https://inventory-management-demo-v1.vercel.app'
            },
            {
                name: 'Case Study',
                link: 'https://docs.google.com/document/d/1DB_dRoiNHu7xeFfBG_piC6-LhFlM5TZundQ0aMPRbNg/edit'
            },
        ],
        description: '',
        features: [
            "Authentication & Permission based panel.",
            "Admin, Customers, Suppliers Management with searhing & filtering.",
            "Dashboard to view total orders, customer, paid, due cash.",
            "Roles with permission assign.",
            "Create user with assigning accout Id to show statements.",
            "Can manage product categories.",
            "Can manage products with available stocks.",
            "Can search product & categories.",
            "Can re-stock a product.",
            "Add To Cart functionlity with set a selling price.",
            "Can view add to cart list with total.",
            "Can remove items from card and item will restock.",
            "Can checkout the cart with set labor charge, discount.",
            "Can set customer then set paid & due amount on checkout",
            "Can print the invoice & by whom the invoice is printed.",
            "User will have account can check balance.",
            "After confirm order can manage orders.",
            "Can add cash or paid full due by order.",
            "Can change the status of the order processing to delivered.",
            "Can re-print the order from orders.",
            "Can searh orders order invoice id, cusomer name or email.",
            "A customer can return any product.",
            "After returing the product the product will re-stock.",
            "Can make orders for suppliers.",
            "Can print the orders for suppliers.",
        ],
        techs: [
            "ReactJS", "React Bootstrap", "React Query", "Axios", "Jotai", "Sweetalert", "NodeJs", "Express", "JWT", "Multer", "MongoDB", "Mongoose"
        ],
    },
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
        _id: 'projectItem31bx',
        title: 'Cow Hut',
        category: backendDevelopment,
        thumbnail: '/projects/backend.png',
        images: [],
        links: [
            {
                name: 'Live Site',
                link: 'https://cow-hut-auth-ochre.vercel.app'
            },
            {
                name: 'Github',
                link: 'https://github.com/soumik9/cow-hut'
            },
        ],
        description: "Join the digital transformation of dairy farming with Cow Hut. Accessible from any device with an internet connection, you can manage your farm on the go. Collaborate seamlessly with your team, ensuring everyone is on the same page and contributing to your farm's success.",
        features: [
            "Authentication with refresh token.",
            "Sigup as a admin and Seller & Buyer.",
            "Can view all users as a admin.",
            "Can view a single user as a admin.",
            "Can update a user information as a admin.",
            "Can delete a user as a admin.",
            "Can add a new cow as a seller.",
            "Can access all cows as any user.",
            "Can access a single cow as any user.",
            "Can update a cow information as a admin.",
            "Can delete a cow as a admin.",
            "Can filters cows data with pagination, sorting, search.",
            "Can create a order as a Buyer.",
            "Can get a single order information as a specific buyer & seller.",
            "Can get logged user information after logged.",
            "Can update logged user information after logged.",

        ],
        routes: [
            {
                text: '[POST] - https://cow-hut-auth-ochre.vercel.app/api/v1/auth/signup',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/auth/signup'
            },
            {
                text: '[POST] - https://cow-hut-auth-ochre.vercel.app/api/v1/auth/login',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/auth/login'
            },
            {
                text: '[POST] - https://cow-hut-auth-ochre.vercel.app/api/v1/auth/refresh-token',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/auth/refresh-token'
            },
            {
                text: '[POST] - https://cow-hut-auth-ochre.vercel.app/api/v1/admins/create-admin',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/admins/create-admin'
            },
            {
                text: '[POST] - https://cow-hut-auth-ochre.vercel.app/api/v1/admins/login',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/admins/login'
            },
            {
                text: '[GET] - https://cow-hut-auth-ochre.vercel.app/api/v1/users [Admin access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/users'
            },
            {
                text: '[GET Single] - https://cow-hut-auth-ochre.vercel.app/api/v1/users/648d4d6c4b51c07888083a10 [Admin access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/users/648d4d6c4b51c07888083a10'
            },
            {
                text: '[PATCH] - https://cow-hut-auth-ochre.vercel.app/api/v1/users/648d4d6c4b51c07888083a10 [Admin access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/users/648d4d6c4b51c07888083a10'
            },
            {
                text: '[DELETE] - https://cow-hut-auth-ochre.vercel.app/api/v1/users/648d565a82ae71caffdca873 [Admin access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/users/648d565a82ae71caffdca873'
            },
            {
                text: '[POST] - https://cow-hut-auth-ochre.vercel.app/api/v1/cows [Seller access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/cows'
            },
            {
                text: '[GET] - https://cow-hut-auth-ochre.vercel.app/api/v1/cows [Admin, Seller, Buyer access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/cows'
            },
            {
                text: '[GET Single] - https://cow-hut-auth-ochre.vercel.app/api/v1/cows/648da4e0d1e0a99c8295d2a3 [Admin, Seller, Buyer access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/cows/648da4e0d1e0a99c8295d2a3'
            },
            {
                text: '[PATCH] - https://cow-hut-auth-ochre.vercel.app/api/v1/cows/648da4e0d1e0a99c8295d2a3 [Admin access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/cows/648da4e0d1e0a99c8295d2a3'
            },
            {
                text: '[DELETE] - https://cow-hut-auth-ochre.vercel.app/api/v1/cows/648ebc0320969e183ebc3e99 [Admin access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/cows/648ebc0320969e183ebc3e99'
            },
            {
                text: '[GET] - https://cow-hut-auth-ochre.vercel.app/api/v1/cows?page=1&limit=10 [Admin, Seller, Buyer access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/cows?page=1&limit=10'
            },
            {
                text: '[GET] - https://cow-hut-auth-ochre.vercel.app/api/v1/cows?sortBy=price&sortOrder=asc [Admin, Seller, Buyer access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/cows?sortBy=price&sortOrder=asc'
            },
            {
                text: '[GET] - https://cow-hut-auth-ochre.vercel.app/api/v1/cows?minPrice=20000&maxPrice=70000 [Admin, Seller, Buyer access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/cows?minPrice=20000&maxPrice=70000'
            },
            {
                text: '[GET] - https://cow-hut-auth-ochre.vercel.app/api/v1/cows?location=Chattogram [Admin, Seller, Buyer access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/cows?location=Chattogram'
            },
            {
                text: '[GET] - https://cow-hut-auth-ochre.vercel.app/api/v1/cows?searchTerm=Cha [Admin, Seller, Buyer access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/cows?searchTerm=Cha'
            },
            {
                text: '[POST] - https://cow-hut-auth-ochre.vercel.app/api/v1/orders [Buyer access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/orders'
            },
            {
                text: '[GET] - https://cow-hut-auth-ochre.vercel.app/api/v1/orders [Admin, Specific Seller,Specific Buyer access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/orders'
            },
            {
                text: '[GET] - https://cow-hut-auth-ochre.vercel.app/api/v1/users/my-profile [Buyer, Seller access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/users/my-profile'
            },
            {
                text: '[PATCH] - https://cow-hut-auth-ochre.vercel.app/api/v1/users/my-profile [Buyer, Seller access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/users/my-profile'
            },
            {
                text: '[GET] - https://cow-hut-auth-ochre.vercel.app/api/v1/orders/648ecf4b8ae9e3eeb3e6a411 [Specific Buyer, Specific Seller access]',
                link: 'https://cow-hut-auth-ochre.vercel.app/api/v1/orders/648ecf4b8ae9e3eeb3e6a411'
            },
        ],
        techs: [
            "NodeJS", "ExpressJS", "TypeScript", "Mongoose", "Multer", "Zod", "Http Status", "JWT"
        ],
    },
    {
        _id: 'projectItem3',
        title: 'Job Portal',
        category: backendDevelopment,
        thumbnail: '/projects/backend.png',
        images: [],
        links: [
            {
                name: 'Live Site',
                link: 'https://job-portal-tszz.onrender.com/'
            },
            {
                name: 'Github',
                link: 'https://github.com/soumik9/job-portal-acc'
            },
        ],
        description: '',
        features: [
            "Signup a new user as [admin, hr, candidate].",
            "Login and Genarate token with user data.",
            "Verify accesstoken get logged user data.",
            "Verify accesstoken and hr role to create new job.",
            "Verify accesstoken and 'hr' role to get that manager created jobs.",
            "Verify accesstoken and 'hr' role to update job details.",
            "Get all jobs for candidate filtering and sorting flexiblity.",
            "Get specific job details with candidates and resume url.",
            "Apply to a job with pdf and if deadline expired can not apply.",
            "Get single job details with id.",
            "All routes can be accessd by admin.",
        ],
        routes: [
            {
                text: '[POST] - https://job-portal-tszz.onrender.com/user/signup',
                link: 'https://job-portal-tszz.onrender.com/user/signup'
            },
            {
                text: '[POST] - https://job-portal-tszz.onrender.com/user/login',
                link: 'https://job-portal-tszz.onrender.com/user/login'
            },
            {
                text: '[GET] - https://job-portal-tszz.onrender.com/user/me [Verify Login]',
                link: 'https://job-portal-tszz.onrender.com/user/me'
            },
            {
                text: '[POST] - https://job-portal-tszz.onrender.com/jobs [Verify Login, verifyRole] [HR role]',
                link: 'https://job-portal-tszz.onrender.com/jobs'
            },
            {
                text: '[GET] - https://job-portal-tszz.onrender.com/manager/jobs [Verify Login, verifyRole] [HR role]',
                link: 'https://job-portal-tszz.onrender.com/manager/jobs'
            },
            {
                text: '[PATCH] - https://job-portal-tszz.onrender.com/jobs/:id [Verify Login, verifyRole] [HR role]',
                link: 'https://job-portal-tszz.onrender.com/jobs/:id'
            },
            {
                text: '[GET] - https://job-portal-tszz.onrender.com/jobs [Verify Login, verifyRole] [Candidate role] [Filtering and Sorting flexiblity]',
                link: 'https://job-portal-tszz.onrender.com/jobs'
            },
            {
                text: '[GET] - https://job-portal-tszz.onrender.com/manager/jobs/:id [Verify Login, verifyRole] [HR role]',
                link: 'https://job-portal-tszz.onrender.com/manager/jobs/:id'
            },
            {
                text: '[GET] - https://job-portal-tszz.onrender.com/jobs/:id/apply [Verify Login, verifyRole] [Candidate role]',
                link: 'https://job-portal-tszz.onrender.com/jobs/:id/apply'
            },
            {
                text: '[GET] - https://job-portal-tszz.onrender.com/jobs/:id [Verify Login, verifyRole] [Candidate role]',
                link: 'https://job-portal-tszz.onrender.com/jobs/:id'
            },
        ],
        techs: [
            "NodeJS", "ExpressJS", "Mongoose", "Multer"
        ],
    },
    {
        _id: 'projectItem4',
        title: 'Tour Management API',
        category: backendDevelopment,
        thumbnail: '/projects/backend.png',
        images: [],
        links: [
            {
                name: 'Live Site',
                link: 'https://tour-management-g4ws.onrender.com'
            },
            {
                name: 'Github',
                link: 'https://github.com/soumik9/tour-management'
            },
        ],
        description: 'A tour management web application is a versatile and indispensable tool that empowers tour managers, artists, and event organizers to streamline, organize, and optimize the intricate processes involved in planning and executing successful tours and events. This innovative digital solution leverages technology to enhance every facet of tour management, from logistics and scheduling to communication and collaboration.',
        features: [
            "Get all tours.",
            "Save tour information with validation.",
            "Update tour information with validation.",
            "Get all tours with filtering flexiblity.",
            "Get all tours with sorting flexiblity.",
            "Get all tours with select any filed flexiblity.",
            "Get three cheapest tours.",
            "Get three trending tours by viewers count.",
        ],
        routes: [
            {
                text: '[GET] - ',
                link: ''
            },
            {
                text: '[GET] - https://tour-management-g4ws.onrender.com/tours',
                link: 'https://tour-management-g4ws.onrender.com/tours'
            },
            {
                text: '[GET] - https://tour-management-g4ws.onrender.com/tours?page=5&limit=2',
                link: 'https://tour-management-g4ws.onrender.com/tours?page=5&limit=2'
            },
            {
                text: '[GET] - https://tour-management-g4ws.onrender.com/tours?category=gold&name=Bandarban tour',
                link: 'https://tour-management-g4ws.onrender.com/tours?category=gold&name=Bandarban tour'
            },
            {
                text: '[GET] - https://tour-management-g4ws.onrender.com/tours?sort=name || ',
                link: 'https://tour-management-g4ws.onrender.com/tours?sort=name'
            },
            {
                text: '[GET] - https://tour-management-g4ws.onrender.com/tours?sort=price name',
                link: 'https://tour-management-g4ws.onrender.com/tours?sort=price name'
            },
            {
                text: '[GET] - https://tour-management-g4ws.onrender.com/tours?fields=name -_id',
                link: 'https://tour-management-g4ws.onrender.com/tours?fields=name -_id'
            },
            {
                text: '[GET] - https://tour-management-g4ws.onrender.com/tour/cheapest',
                link: 'https://tour-management-g4ws.onrender.com/tour/cheapest'
            },
            {
                text: '[GET] - https://tour-management-g4ws.onrender.com/tour/trending',
                link: 'https://tour-management-g4ws.onrender.com/tour/trending'
            },
            {
                text: '[POST] - https://tour-management-g4ws.onrender.com/tours',
                link: 'https://tour-management-g4ws.onrender.com/tours'
            },
            {
                text: '[PATCH] - https://tour-management-g4ws.onrender.com/tours/:id',
                link: 'https://tour-management-g4ws.onrender.com/tours/:id'
            },
        ],
        techs: [
            "NodeJS", "ExpressJS", "Mongoose"
        ],
    },
    {
        _id: 'projectItem5',
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