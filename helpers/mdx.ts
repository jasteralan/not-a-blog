import fs from "fs";
import path from "path";
import glob from "glob";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import matter from 'gray-matter'

import { FrontMatter } from "../types";

const ROOT_PATH = process.cwd();
const POSTS_PATH = path.join(ROOT_PATH, 'posts');

function svgIcon(icon: string) {
    return `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${icon}</text></svg>`;
}

type Dict = { [key:string]:string };

function meta(frontMatter:Dict) : FrontMatter {
    return {
        title: frontMatter.title || '忘記寫 Title',
        icon: svgIcon(frontMatter.icon || '💩'),
        published: !!frontMatter.published,
        releasedAt: frontMatter.releasedAt
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
    const source = fs.readFileSync(path.join(process.cwd(), 'posts', `${slug}.mdx`), "utf8");
    const { content, data } = matter(source);
    const mdxSource = await serialize(content, { scope: data });

    return [mdxSource, meta(data)];
}

