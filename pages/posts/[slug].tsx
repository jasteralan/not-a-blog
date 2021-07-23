import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import { FrontMatter } from 'types';
import { fetchPost, fetchPostSlugs } from 'helpers';

import PostLayout from 'components/PostLayout';

import CodeBlock, { CodeBlockWrapper } from 'components/CodeBlock';
import Br from 'components/Br';
import { Box, Heading, Text } from '@chakra-ui/react';

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
                    <Text mb={8} fontSize="sm" color="gray.400">5 days ago</Text>
                    <Heading as="h1" fontWeight="normal"
                            fontSize={["2xl", "3xl", "4xl"]}
                    >{ frontMatter.title }</Heading>
                </Box>

                <MDXRemote {...source}  components={{ 
                    p: props => <Text pb={2} fontSize={["sm", "md", "lg"]} {...props} />,
                    pre : CodeBlockWrapper,
                    code: CodeBlock,
                    Br 
                }} />
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