import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import matter from 'gray-matter'

import fs from "fs"
import path from "path"

export default function TestPage({ source, frontMatter }: { 
    source: MDXRemoteSerializeResult,
    frontMatter: {[k:string]:any}
}) {
    return (
        <div className="wrapper">
            <h1>{frontMatter.title}</h1>
            <MDXRemote {...source}  />
        </div>
    )
}

export async function getStaticProps() {
    const source = fs.readFileSync(path.join(process.cwd(), 'posts/hello.mdx'), "utf8")
    const { content, data } = matter(source);
    const mdxSource = await serialize(content, { scope: data });

    return { props: { source: mdxSource, frontMatter: data } };
}