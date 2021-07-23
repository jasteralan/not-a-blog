import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { FrontMatter } from '../../types';
import { fetchPost, fetchPostSlugs } from '../../helpers'

export default function Post({ source, frontMatter }: { 
    source: MDXRemoteSerializeResult,
    frontMatter: FrontMatter
}) {
    return (
        <div className="wrapper">
            <Head>
                <title>{ frontMatter.title }</title>
                {
                    frontMatter.icon && 
                    <link rel="icon" href={frontMatter.icon}></link>
                }
            </Head>

            <h1>{frontMatter.title}</h1>
            <MDXRemote {...source}  />
        </div>
    )
}

export async function getStaticPaths() {
    const slugs = await fetchPostSlugs();

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false
    };
}

export async function getStaticProps({ params } : { params : { slug: string }}) {
    const [source, frontMatter] = await fetchPost(params.slug);

    return { props: { source, frontMatter } };
}