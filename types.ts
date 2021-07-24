export interface FrontMatter {
    title: string,
    icon : string,
    published: boolean,
    releasedAt: string
    customConponents: string[]
};

export interface PostListItem {
    slug: string,
    title: string,
    image: string,
    brief: string,
}
