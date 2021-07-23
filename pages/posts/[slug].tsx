import Head from 'next/head';
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Box, Heading, Text } from '@chakra-ui/react';

import { FrontMatter } from 'types';
import { fetchPost, fetchPostSlugs } from 'helpers/mdx';
import { daysAgoFmt } from 'helpers/helpers';

import PostLayout from 'components/PostLayout';

import MDX from 'components/MDX';

export default function Post({ source, frontMatter }: { 
    source: MDXRemoteSerializeResult,
    frontMatter: FrontMatter
}) {
    return (
        <>
            <Head>
                <title>{ frontMatter.title }</title>
                <link rel="icon" href={frontMatter.icon}></link>
            </Head>
            <PostLayout>
                <Box as="header" mb={6}>
                    <Text mb={8} fontSize="sm" color="gray.400">{ daysAgoFmt(frontMatter.releasedAt) }</Text>
                    <Heading as="h1" fontWeight="normal"
                            fontSize={["2xl", "3xl", "4xl"]}
                    >{ frontMatter.title }</Heading>
                </Box>

                <MDX source={source} />
            </PostLayout>
        </>
    )
}

// export async function getStaticPaths() {
//     const slugs = await fetchPostSlugs();
    
//     return {
//         paths: slugs.map((slug) => ({ params: { slug } })),
//         fallback: false
//     };
// }

// export async function getStaticProps({ params } : { params : { slug: string }}) {
//     const [source, frontMatter] = await fetchPost(params.slug);

//     return { props: { source, frontMatter } };
// }

export async function getServerSideProps({ params }) {
    const [source, frontMatter] = await fetchPost(params.slug);
    return { props: { source, frontMatter } };
}