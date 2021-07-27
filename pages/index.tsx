import Head from 'next/head';
import { Grid, Center, Box, Image, AspectRatio, Heading, Text, Button, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion';

import { svgIcon } from 'helpers/helpers';

const headFont = "var(--chakra-fonts-montserrat)";
const bodyFont = "var(--chakra-fonts-openSans)";

const MotionGrid = motion(Grid);

export default function IndexPage() {
  return (
    <>
        <Head>
            <title>H e l l o</title>
            <link rel="icon" href={svgIcon('👋')}></link>
        </Head>
        <Center w={"100vw"} minH={"100vh"} bg="gray.50">
            <MotionGrid w="95vw" maxW="600px" minH="300px" bg="white" border="1px" 
                    templateColumns={[
                        '1fr',
                        '2fr 3fr'
                    ]}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0,   opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 0.7, delay: 1 }}
            >
                <AspectRatio ratio={[1.33, 0.75]}>
                    <Image objectFit="cover" alt="cover" src="/images/polygon.webp" />
                </AspectRatio>
                <Grid templateRows={['1fr auto']} p={8} pt={4} pr={6}>
                    <Box>
                        <Heading as="h1" mb={4} 
                                fontSize="6xl" fontWeight="900" fontFamily={headFont}
                                backgroundClip="text" bgImg="url(/images/text_bg.jpg)"
                                filter="drop-shadow(2px 2px 1px #333)" letterSpacing={4}
                        >Hello</Heading>
                        <Text fontFamily={bodyFont}>
                            I&apos;m Jaster, a front-end developer.
                        </Text>
                        <Text mt={2} fontFamily={bodyFont}>
                            Have 7yr experience (3yr as front-end, 4yr as full-stack) with extensive experience in JavaScript (mostly React), RWD, and mobile UX optimization.
                        </Text>
                    </Box>
                    <Box mt={8}>
                        <Button variant="link" rounded="none" 
                                color="gray.700" fontWeight="light" fontFamily={bodyFont}
                        ><Link href="/resume">Resume</Link></Button>

                        <Button variant="link" rounded="none" 
                                ml="2" pl="2" borderLeft="1px" borderLeftColor="gray.400"
                                color="gray.700" fontWeight="light" fontFamily={bodyFont}
                        ><Link href="/posts">Posts</Link></Button>
                    </Box>
                </Grid>
            </MotionGrid>
        </Center>
    </>
  )
}
