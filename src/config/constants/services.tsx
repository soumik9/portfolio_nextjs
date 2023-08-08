import { IService } from "@config/types/types";

export const serviceItems: IService[] = [
    {
        _id: 'service1',
        title: 'Frontend Web Development',
        lists: [
            'Landing page design.', 'Responsive design.', 'Design customization.', 'Performance optimized.', 'Conversion of PSD, Figma.', 'Fast delivery time.'
        ]
    },
    {
        _id: 'service2',
        title: 'Backend Web Development',
        lists: [
            'Clean & effieicient code.', 'Bug/Error solving.', 'Database design, implement.', 'New features to the existing one.', 'Payment gateways integration.', 'Deployment/installation.'
        ]
    },
    {
        _id: 'service3',
        title: 'Applications',
        lists: [
            'E-commerce website development.', 'LMS application development.', 'Inventory management application.', 'Content management system.', 'Personal/Company portfolio.', 'Custom web applications.'
        ]
    },
]