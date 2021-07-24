import Head from 'next/head';
import { Box, Center, Grid, Heading, HStack, Link, Text } from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { useRouter } from 'next/router';

function Header() {
    return (
        <Heading as="h1" py={["30px", "50px"]} 
                fontFamily="serif" textAlign="center"
                fontWeight={["bold", "thin"]}
                fontSize={["5xl", "7xl", "9xl"]} 
        >留點紀錄</Heading>
    )
}

function NavBtn({ children, navTo }) {
    return (
        <Box h={14} flexGrow={1} position="relative">
            <Center position="absolute" left="0" right="0" top="0" bottom={"1px"} 
                    borderLeft="1px" cursor="pointer" onClick={navTo}
            >{ children }</Center>
        </Box>
    )
}

function HeaderNav() {
    const router = useRouter();
    const navFn = to => () => router.push(to);

    return (
        <Box borderTop={[0, "1px"]} borderBottom="1px" 
             h={[0, 14]} mx={[0, 8]} >
            <HStack maxW="980px" mx="auto" display={["none", "flex"]} spacing={0}>
                <NavBtn navTo={navFn('/')}>Home</NavBtn>
                <NavBtn navTo={navFn('/posts')}>Posts</NavBtn>
                <NavBtn navTo={navFn('/resume')}>Resume</NavBtn>

                <Box h={14} position="relative" w={40}>
                    <Center position="absolute" left="0" right="0" top="0" bottom={"1px"} 
                            borderLeft="1px" borderRight="1px"
                            justifyContent="space-evenly"
                    >
                        
                        <Link href="https://github.com/jasteralan" target="_blank"><FiGithub /></Link>
                        <Link href="https://www.linkedin.com/in/jaster-chang-24250590/" target="_blank"><FiLinkedin /></Link>
                        <Link href="https://www.instagram.com/jasteralan/" target="_blank"><FiInstagram /></Link>
                    </Center>
                </Box>
            </HStack>
        </Box>
    )
}

export function Post({ children }: { children: JSX.Element[] }) {
    return (
        <Box as="article" 
            w="95vw" maxW="980px" mx="auto" 
            mt={[10, 20]} 
            px={[2, 8, 10, 20]} 
            py={[0, 4, 8, 10]} 
            border={["none", "1px"]}
        >
            { children }
        </Box>
    )
}

interface Props {
    title: string,
    icon: string,
    children: JSX.Element
}

export default function PostLayout({ title, icon, children }: Props) {
    return (
        <>
            <Head>
                <title>{ title }</title>
                <link rel="icon" href={icon}></link>
            </Head>
            <Grid minH="100vh" templateRows="auto 1fr auto"> 
                <Box as="header">
                    <Header />
                    <HeaderNav />
                </Box>

                <Box as="section">{ children }</Box>

                <Box as="footer" pt={2} pb={2} bg={"gray.50"}>
                    <Text color="gray.800" fontSize="sm" fontWeight="thin" textAlign="center">
                        Just Want A Footer Here © 2021 by Jaster
                    </Text>
                </Box>
            </Grid>
        </>
    )
}

