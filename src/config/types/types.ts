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