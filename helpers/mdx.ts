import fs from "fs";
import path from "path";
import glob from "glob";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import matter from 'gray-matter'

import { FrontMatter, PostListItem } from "../types";
import { daysAgoFmt, svgIcon } from "./helpers";

const ROOT_PATH = process.cwd();
const POSTS_PATH = path.join(ROOT_PATH, 'posts');

type Dict = { [key:string]:string, };

function meta(slug:string, frontMatter:Dict) : FrontMatter {
    return {
        slug,
        title: frontMatter.title || '沒有標題',
        brief: frontMatter.brief || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vero provident eos sapiente magnam accusamus iusto, voluptate ea eius nostrum sequi aliquid voluptatem cum cupiditate impedit et dolor, quis adipisci?',
        cover: frontMatter.cover || '/images/meta.webp',
        icon: svgIcon(frontMatter.icon || '💩'),
        published: !!frontMatter.published,
        releasedAt: frontMatter.releasedAt,
        daysAgo: daysAgoFmt(frontMatter.releasedAt),
        customConponents: frontMatter.customConponents || [],
    };
}

function parseSlug(filePath: string) {
    return path.basename(filePath).replace('.mdx', '')
}

export async function fetchPostSlugs(): Promise<string[]>{
    const paths = glob.sync(`${POSTS_PATH}/**/*.mdx`);
    return paths.map(parseSlug);
}

export async function fetchPost(slug: string): Promise<[MDXRemoteSerializeResult, FrontMatter]> {
    const source = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`), "utf8");
    const { content, data } = matter(source);
    const mdxSource = await serialize(content, { scope: data });

    return [mdxSource, meta(slug, data)];
}

async function parsePostListItem(slug: string) {
    const source = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`), "utf8");
    const { data } = matter(source);

    return {
        ...meta(slug, data),
    };
}

export async function fetchPostList(): Promise<PostListItem[]>{
    const slugs = await fetchPostSlugs();
    const list = await Promise.all(slugs.map(parsePostListItem));

    return list;
}

interface RawItem {
    slug: string,
    title: string,
    brief: string,
    published: boolean,
    releasedAt: string
}

export async function fetchPostListRaw(): Promise<RawItem[]>{
    const slugs = await fetchPostSlugs();
    const list = await Promise.all(slugs.map(async slug => {
        const source = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`), "utf8");
        const { data } = matter(source);

        return { slug, ...data };
    }));

    return list;
}