import { useState } from "react";
import Head from "next/head";
import Link from 'next/link';
import { Box, Button, ButtonProps, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import { AnimatePresence } from 'framer-motion';
import { FiDownload } from "react-icons/fi";

import { svgIcon } from "helpers/helpers";
import ResumeEn from "components/resume/ResumeEn";
import ResumeZhHant from "components/resume/ResumeZhHant";

import s from "styles/resume.module.css";

function DownloadBtn({ link, children, ...rest }: {
    link: string,
    children: string,
    rest: ButtonProps
}) {
    return (
        <Button variant="link" { ...rest }
        ><ChakraLink href={ link } target="_blank"> 
            <Text as="span" pr={1}>{ children }</Text> 
            <FiDownload style={{ display:"inline", position:'relative', bottom: '2px' }} />
        </ChakraLink></Button>
    )
}
export default function Resume() {
    const [lang, setLang] = useState('en');

    return (
    <>
        <Head>
            <title>履歷 | Resume</title>
            <link rel="icon" href={svgIcon('💼')}></link>
        </Head>
        <Box w="full" minH="100vh" p={8} bg="gray.50" className={s.resumeWrapper}>
            <Flex justify="space-between" align="center" maxW="210mm" mx={"auto"} mb={4} className={s.resumeCta}> 
                <Box>
                    <Button variant="link" color="gray.400"><Link href="/">Home</Link></Button>
                    <Text as="span" mx={4} color="gray.300">|</Text>
                    <Button variant="link" color="gray.400"><Link href="/posts">Posts</Link></Button>
                </Box>

                <Box>
                    <DownloadBtn link={"/resumes/resume_en.pdf"} mr={4}>EN</DownloadBtn>
                    <DownloadBtn link={"/resumes/resume_zhHant.pdf"} mr={4}>繁</DownloadBtn>

                    <Button borderRightRadius="none" borderLeftRadius="full" pl={6}
                            isActive={lang === 'en'} colorScheme={lang === 'en'? "teal" : "gray"}
                            onClick={() => setLang('en')}
                    >EN</Button>

                    <Button borderLeftRadius="none" borderRightRadius="full" pr={6}
                            isActive={lang === 'zhHant'} colorScheme={lang === 'zhHant'? "teal" : "gray"}
                            onClick={() => setLang('zhHant')}
                    >繁</Button>
                </Box>
            </Flex>

            <AnimatePresence exitBeforeEnter initial={false}>
            {
                lang === 'en'?
                    <ResumeEn key="resume-en" /> : 
                    <ResumeZhHant key="resume-zhHant" />
            }
            </AnimatePresence>
        </Box>
    </>
    )
}