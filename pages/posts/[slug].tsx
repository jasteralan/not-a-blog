import dynamic from 'next/dynamic'; 

import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Box, Heading, Text } from '@chakra-ui/react';

import { FrontMatter } from 'types';
import { fetchPost, fetchPostSlugs } from 'helpers/mdx';
import { daysAgoFmt } from 'helpers/helpers';

import PostLayout, { Post } from 'components/PostLayout';
import MDX from 'components/MDX';

export default function PostPage({ source, frontMatter }: { 
    source: MDXRemoteSerializeResult,
    frontMatter: FrontMatter
}) {
    const components = frontMatter.customConponents.reduce((result, c) => {
        result[c] = dynamic(() => import(`components/posts/${c}`));

        return result;
    }, {});

    return (
        <PostLayout title={frontMatter.title} icon={frontMatter.icon}>
            <Post>
                <Box as="header" mb={6}>
                    <Text mb={8} fontSize="sm" color="gray.400">{ daysAgoFmt(frontMatter.releasedAt) }</Text>
                    <Heading as="h1" 
                            fontWeight="normal" 
                            fontSize={["2xl", "3xl", "4xl"]}
                    >{ frontMatter.title }</Heading>
                </Box>

                <MDX source={source} customComponents={components} />
            </Post>
        </PostLayout>
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

// export async function getServerSideProps({ params }) {
//     const [source, frontMatter] = await fetchPost(params.slug);
//     return { props: { source, frontMatter } };
// }