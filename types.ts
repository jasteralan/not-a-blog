export interface FrontMatter {
    slug: string,
    title: string,
    brief: string,
    cover: string,

    icon : string,
    published: boolean,
    releasedAt: string,
    daysAgo: string,
    
    customConponents: string[]
};

export interface PostListItem extends FrontMatter {}
