export type navItemType = {
    _id: string;
    url: string;
    title: string;
    icon?: React.ReactNode;
}

export type summaryItemType = {
    _id: string;
    count: string;
    title: string;
}

export type skillItemType = {
    _id: string;
    title: string;
    isExpert: boolean;
    icon: React.ReactNode;
}

export type hrResType = {
    _id: string;
    percentage: string;
    title: string;
}

export type reviewSliderType = {
    _id: string;
    review: string;
    img: string;
    name: string;
    position: string;
    rating: number;
}

export interface IService {
    _id: string;
    title: string;
    lists: string[];
}

export interface IProjectLinks {
    [key: string]: string;
}
export interface IProject {
    _id: string;
    title: string;
    category: string;
    thumbnail: string;
    images: string[];
    links: IProjectLinks[];
    description: string;
    features: string[];
    techs: string[];
}