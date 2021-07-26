import { useRouter } from "next/router";
import { Box, Grid, Heading, Text, VStack, Image, AspectRatio } from "@chakra-ui/react";

import { PostListItem } from "types";

import { svgIcon } from "helpers/helpers";
import { fetchPostList } from "helpers/mdx";

import PostLayout from "components/PostLayout";

function PostItem({ item }: { item: PostListItem }) {
    const router = useRouter();

    return (
        <Grid w="91vw" maxW="576px" mx={["auto", 0]} cursor="pointer"
             border={"1px"}
             templateColumns={[
                 '1fr',
                 '2fr 3fr'
             ]}
             onClick={() => router.push(`/posts/${item.slug}`)}
        >
            <AspectRatio ratio={[1.33, 0.75]}>
                <Image objectFit="cover" src="/images/polygon.webp" />
            </AspectRatio>
            <Box p={8}>
                <Text mb={4} fontSize="sm" color="gray.500">{ item.daysAgo }</Text>
                <Heading as="h3" mb={3} fontSize="2xl" fontWeight="normal">{ item.title }</Heading>
                <Text color="gray.500" noOfLines={3}>{ item.brief }</Text>
            </Box>
        </Grid>
    )
}

function Title({ children, ...rest }) {
    return (
        <Heading as="h2" w="91vw" maxW="576px" mx={"auto"} my={12} 
                 fontSize="3xl" fontWeight="normal" {...rest}
        >{ children }</Heading>
    )
}

function PostList({ list }: { list: PostListItem[] }) {
    return (
        <Box px={[0, 4]} ml={-2}>
            <Title>最近ㄟ文章</Title>
            <VStack pl={2} spacing={8}>
                { list.map(item => (<PostItem  key={item.slug} item={item} /> ))}
            </VStack>
        </Box>
    )
}

function AboutMe() {
    return (
        <Box minH="100px" px={[0, 8]} borderLeft={["none", "none", "1px", "1px"]}>
            
        </Box>
    )
}


export default function Posts({ list }: { list: PostListItem[] }) {
    return (
        <PostLayout title="留點紀錄" icon={svgIcon('⚡️')}>
            <Grid minH="calc(100% - 30px)"
                mt={4} pb={4}
                templateColumns={[
                    "1fr", "1fr",
                    "1fr 300px",
                    "1fr 400px",
                ]}
                templateRows="1fr"
            >
                <PostList list={list} />
                <AboutMe />
            </Grid>
        </PostLayout>
    )
}

export async function getStaticProps() {
    const list = await fetchPostList();

    return { props: { list } };
}