import { useState } from "react";
import Head from "next/head";
import { Box, Button, ButtonProps, Flex, Link, Text } from "@chakra-ui/react";
import { AnimatePresence } from 'framer-motion';

import { svgIcon } from "helpers/helpers";
import ResumeEn from "components/resume/ResumeEn";
import ResumeZhHant from "components/resume/ResumeZhHant";

import s from "styles/resume.module.css";
import { FiDownload } from "react-icons/fi";

function DownloadBtn({ link, children, ...rest }: {
    link: string,
    children: string,
    rest: ButtonProps
}) {
    return (
        <Button variant="link" { ...rest }
        ><Link href={ link } target="_blank"> 
            <Text as="span" pr={1}>{ children }</Text> 
            <FiDownload style={{ display:"inline", position:'relative', bottom: '2px' }} />
        </Link></Button>
    )
}
export default function Resume() {
    const [lang, setLang] = useState('en');
    const print = () => {
        window?.print();
        return false;
    };

    return (
    <>
        <Head>
            <title>Resume | 履歷</title>
            <link rel="icon" href={svgIcon('💼')}></link>
        </Head>
        <Box w="full" minH="100vh" p={8} bg="gray.50" className={s.resumeWrapper}>
            <Flex justify="flex-end" maxW="210mm" mx={"auto"} mb={4} className={s.resumeCta}> 
                <DownloadBtn link={"/resumes/resume_en.pdf"} mr={4}>EN</DownloadBtn>
                <DownloadBtn link={"/resumes/resume_zhHant.pdf"} mr={4}>繁</DownloadBtn>

                <Box>
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