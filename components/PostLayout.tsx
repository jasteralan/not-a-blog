import { Box, Grid, Heading, Text } from "@chakra-ui/react";

function Post({ children }: { children: JSX.Element[] }) {
    return (
        <Box as="article" 
            w="95vw" maxW="980px" mx="auto" 
            mt={[10, 20]} 
            px={[2, 8, 10, 20]} 
            py={[8, 4, 8, 10]} 
            border="1px"
        >
            { children }
        </Box>
    )
}

export default function PostLayout({ children }: { children: JSX.Element[] }) {
    return (
        <Grid minH="100vh" templateRows="auto 1fr auto"> 
            <Box as="header" borderBottom="1px">
                <Heading as="h1" py={"50px"} fontFamily="serif" 
                         fontWeight={["normal", "thin"]}
                         fontSize={["6xl", "9xl"]} 
                         textAlign="center">
                    留點紀錄
                </Heading>
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