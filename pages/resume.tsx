import { Badge, Box, Flex, Grid, Heading, HStack, List, ListIcon, ListItem, Tag, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { svgIcon } from "helpers/helpers";
import Head from "next/head";
import { FiCheck, FiFeather, FiLink, FiLinkedin, FiMail, FiMap, FiMapPin, FiPhone, FiTerminal } from "react-icons/fi";

import s from "styles/resume-en.module.css";

const pointColor = "#f1c00e";
const headFont = "var(--chakra-fonts-montserrat)";
const bodyFont = "var(--chakra-fonts-openSans)";

const meta = {
    brief: "7 years experience (3 years as front-end, 4 years as full-stack) engineer with extensive experience in development on JavaScript (mostly React), mobile UX optimization, and single page application. Always have willing to learn new things, exploring new technologies.",
    skills: {
        frontend: [
            "HTML5", "CSS3", "JavaScript (ES6)", 
            "React", "TypeScript", "Next.js", 
            "CSS Preprocessor (SASS)", "Bundling Tool (Webpack)",
        ], 
        backend: ["Node.js", "LNMP", "Laravel"],
        others: ["Docker", "Continuous Delivery", "Jenkins", "Github Action", "AWS Services"]
    },
    education: {
        degree: "Bachelor of Computer Science and Information Engineering",
        college: "National Cheng Kung University",
        location: "Taiwan",
        duration: "2006 – 2010"
    }
};

const jobs = [
    {
        jobTitle: "Jr. Full-stack Engineer",
        company: "iwant",
        location: "Taiwan",
        duration: "2012 – 2013",
        tasks: [
            "Cooperated with designer to recreate a website iTry – site for word-of-mouth marketing.",
            "Revamped CMS Platform and API to increase the efficiency of daily work."
        ],
        skills: ["Jquery", "Bootstrap", "LAMP"]
    },
    {
        jobTitle: "Full-stack Engineer",
        company: "HWTrek",
        location: "Taiwan",
        duration: "2014 – 2015",
        tasks: [
            "Engaged in a Scrum team to develop HWTrek – a collaborative platform for hardware innovation, helping start-ups to boost from idea to implementation.",
        ],
        skills: [
            "React", "Redux", "Grunt", "LAMP", "Jenkins", "AWS"
        ]
    },
    {
        jobTitle: "Full-stack Engineer",
        company: "UrAD",
        location: "Taiwan",
        duration: "2015 – 2017",
        tasks: [
            "Developed a management system for work assignment and finance report generation, decreasing redundant costs on digital advertising.",
            "Bring in Scrum and Kanban to improve teamwork."
        ],
        skills: [
            "Vue", "Webpack", "LNMP", "Laravel"
        ]
    },
    {
        jobTitle: "Front-end Engineer",
        company: "Genesis Gaming",
        location: "Taiwan",
        duration: "2018 – 2020",
        tasks: [
            "Gained active users by 20% by implementing 20 event SPA.",
            "Participated in Scrum teams across Taipei, Vegas, and Vancouver, implementing widgets used in HTML5 games.",
            "Optimized performance by taking mobile-first design, using React Hook to reduce rerendering, configuring Webpack to do lazy-loading and chunk JS files.",
            "Refined continuous delivery flow with Docker and Jenkins."
        ],
        skills: [
            "React", "Preact", "Redux", 
            "XState (State Management)", "React-Spring (Animation)", "SASS",
            "Webpack", "Docker", "Jenkins"
        ]
    },
    {
        jobTitle: "Front-end Engineer",
        company: "KiWi New Energy",
        location: "Taiwan",
        duration: "2021 – ",
        tasks: [
            "Developed landing page with Next.js, using Github Action and AWS serverless services to deploy the SPA site", 
            "Build up Continuouse Delivery with Github Action and AWS ECS/ECR to containerize our Back-Office platform"
        ],
        skills: [
            "TypeScript", "React", "Next.js", "Chakra UI", "Framer-Motion (Animation)", "SASS",
            "Webpack", "Docker", "AWS (ECS, Lamda, CloudFront, S3)", "Continuous Delivery (Github Action)"
        ]
    },
].reverse();

function Title({ children }: { children : string }) {
    return (
        <Heading as="h2" mb={6} 
                 color="gray.500" fontSize="2xl"
                 fontFamily={headFont} fontWeight="400"
                 textTransform="uppercase"
        >{ children }</Heading>   
    )
}

function SkillTag({ children }: { children : string }) {
    return <Tag mr={2} mb={2} rounded="3px"
                bg={"rgba(255, 255, 255, 0.7)"}
                border="1px" borderColor="gray.500" 
                color="gray.700" fontSize="xs" fontFamily={headFont} 
    >{ children }</Tag>
}

function SkillTags({ tags }: { tags: string []}) {
    return (
        <Flex flexWrap="wrap">
            {tags.map((skill, i) => (
                <SkillTag key={i}>{ skill }</SkillTag>
            ))}
        </Flex>
    )
}

function AboutMe() {
    return (
        <Box w={"full"} mb={8}>
            <Title>About Me</Title>
            <Text color="gray.700" fontFamily={bodyFont} >{ meta.brief }</Text>
        </Box>
    )
}

function Expertise() {
    return (
        <Box w={"full"}>
            <Title>Expertise</Title>

            <Box mb={4}>
                <Heading as="h3" mb={1} 
                        color="gray.500" fontSize="sm" fontWeight="400"
                        fontFamily={headFont} textTransform="uppercase"
                >Front-end</Heading>
                <SkillTags tags={meta.skills.frontend} /> 
            </Box>

            <Box>
                <Heading as="h3" mb={1}  
                        color="gray.500" fontSize="sm" fontWeight="400"
                        fontFamily={headFont} textTransform="uppercase"
                >Back-end and Others</Heading>
                <SkillTags tags={[...meta.skills.backend, ...meta.skills.others]} />                
            </Box>
        </Box>
    )
}

function Education() {
    return (
        <Box w={"full"} mt="auto">
            <Title>Education</Title>
            <Text mb={2} color={pointColor} fontFamily={bodyFont} fontWeight={600}
            >{ meta.education.degree }</Text>
            <Text fontFamily={bodyFont} fontSize="sm"
            
            >{ meta.education.college }</Text>
            <Text fontFamily={bodyFont} fontSize="sm" color="gray.600"
            
            >{ meta.education.location }, { meta.education.duration }</Text>
        </Box>
    )
}

function Job({ job, consise = false }) {
    return (
        <Box mb={4}>
            <Heading as="h3" mb={1}
                     color={pointColor} fontSize="xl" fontWeight="400" fontFamily={headFont}
            >{ job.jobTitle }</Heading>

            <Heading as="h4" mb={2}
                     color="gray.400" fontSize="sm" fontWeight="600" fontFamily={headFont}
            >{ job.company } | { job.location } | { job.duration }</Heading>
            
            {
                !consise && 
                <List mb={2} spacing={1}>
                    {job.tasks.map((task, i) => (
                        <ListItem key={i} ml={6} style={{ textIndent: "-1.4rem" }}
                                color="gray.700" fontSize="sm" fontFamily={bodyFont}
                        >
                            <ListIcon as={FiFeather} color="gray.500"></ListIcon>
                            { task }
                        </ListItem>
                    ))}
                </List>
            }
            {
                !consise && 
                <SkillTags tags={[...meta.skills.backend, ...meta.skills.others]} />   
            }
        </Box>
    )
}

function Experience() {

    return (
        <Box>
            <Title>Expericnce</Title>
            { jobs.slice(0, 3).map((job, i) => <Job key={i} job={job} /> ) }
            { jobs.slice(3).map((job, i) => <Job key={i} job={job} consise={true} /> ) }
        </Box>
    )
}

function Ball({ size, bg, pos, ...rest }) {
    return (
        <Box position="absolute" { ...pos }
             width={size} height={size} bg={bg} rounded="full" 
             { ...rest }
        />
    )
}

function ContactInfo({ children, icon: Icon }) {
    return (
        <ListItem>
            <Flex justify="space-between" align="center">
                <Text textAlign="right" pr={8} flexGrow={1}>{ children }</Text>
                <Icon />
            </Flex>
        </ListItem>
    )
}

function Contact() {
    return (
        <Box position="absolute" w="300px" right={10} top={0}>
            <List position="relative" zIndex="2"
                  fontSize={"sm"} pt={8} spacing={2}>
                <ContactInfo icon={FiMapPin}>Taiwan, Taipei</ContactInfo>
                <ContactInfo icon={FiPhone}>(+886) 921-240064</ContactInfo>
                <ContactInfo icon={FiMail}>jaster1019@gmail.com</ContactInfo>
                <ContactInfo icon={FiLinkedin}>/jaster-chang-24250590</ContactInfo>
            </List>
            <Box position="absolute" right="-13px" top="-40px" zIndex="1"  rounded="full"
                  w={"40px"} height={"200px"} 
                 bg={"rgb(255, 220, 86)"}
            
            />
        </Box>
    )
}

function Header() {
    return (
        <Box as="header" position="relative" height="45mm">
            <Ball size="180px" bg="rgb(255, 220, 86)"  
                  pos={{ left: "-40px", top: "-40px" }}
                  zIndex={1} />

            <Ball size="80px" bg="rgba(117, 117, 117, 0.7)" 
                  pos={{ left: "100px", top: "-30px" }}
                  zIndex={2} />

            <Box position="relative" zIndex={3} left={6} top={6}> 
                <Heading as="h1" 
                        fontSize={"6xl"} fontWeight="900" fontFamily={headFont} letterSpacing={4}
                >
                    Jaster
                    <Text as="span" ml={4} color={pointColor}>Chang</Text>
                </Heading>
                <Heading as="h2"
                        fontSize={"2xl"} fontWeight="600" fontFamily={headFont} letterSpacing={2}
                >Front-end Developer</Heading>
            </Box>

            <Contact />
        </Box>
    )
}
export default function Resume() {
    return (
        <>
        <Head>
            <title>Resume</title>
            <link rel="icon" href={svgIcon('💼')}></link>
        </Head>
        <Box w="full" minH="100vh" p={8} bg="gray.50"
             className={s.resumeWrapper}
        >
            <Box width="210mm" height="296mm"  mx={"auto"} border="1px" bg="white" 
                 position="relative" overflow="hidden"
            >
                <Header />
                <Grid as="section" position="relative" zIndex="3"
                      templateColumns={"80mm 1fr"} templateRows="1fr"
                      height="calc(100% - 45mm)" pb={10} 
                >
                    <Flex flexDir="column" w="full" height="auto" 
                          pb={9} pl={6} pr={4}
                    >
                        <AboutMe />
                        <Expertise />
                        <Education />
                    </Flex>
                    <Box pb={6} pl={4} pr={6}> 
                        <Experience />
                    </Box>
                </Grid>

                <Ball size="120px" zIndex={2}
                    pos={{ bottom: "-40px", right: "-30px" }}
                    bg="rgba(255, 238, 167, 0.7)" />

                <Ball size="100px" zIndex={1}
                    pos={{ bottom: "-60px", right: "70px" }}
                    bg="rgba(117, 117, 117, 0.7)" />

                <Ball size="100px" zIndex={2}
                    pos={{ bottom: "240px", left: "-60px" }}
                    bg="rgba(255, 238, 167, 0.7)" />

                <Ball size="100px" zIndex={1}
                    pos={{ bottom: "200px", left: "-30px" }}
                    bg="rgba(117, 117, 117, 0.7)" />
            </Box>
        </Box>
        </>
    )
}