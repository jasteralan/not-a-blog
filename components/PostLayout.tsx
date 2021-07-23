import { Box, Grid, Heading, Text } from "@chakra-ui/react";

function Header() {
    return (
        <Heading as="h1" py={["30px", "50px"]} 
                fontFamily="serif" textAlign="center"
                fontWeight={["bold", "thin"]}
                fontSize={["5xl", "7xl", "9xl"]} 
        >留點紀錄</Heading>
    )
}

function Post({ children }: { children: JSX.Element[] }) {
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

export default function PostLayout({ children }: { children: JSX.Element[] }) {
    return (
        <Grid minH="100vh" templateRows="auto 1fr auto"> 
            <Box as="header" borderBottom="1px">
                <Header />
            </Box>

            <Box as="section">
                <Post>{ children }</Post>
            </Box>

            <Box as="footer" pt={4} pb={2}>
                <Text color="gray.800" fontSize="sm" fontWeight="thin" textAlign="center">
                    Just Want A Footer Here © 2021 by Jaster
                </Text>
            </Box>
        </Grid>
    )
}