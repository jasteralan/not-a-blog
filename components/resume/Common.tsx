import { Box, Flex, Heading, Icon, List, ListIcon, ListItem, Tag, Text } from "@chakra-ui/react";
import { FiFeather, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export const pointColor = "#f1c00e";
export const headFont = "var(--chakra-fonts-montserrat)";
export const bodyFont = "var(--chakra-fonts-openSans)";

export function Ball({ size, bg, pos, ...rest }) {
    return (
        <Box position="absolute" { ...pos }
             width={size} height={size} bg={bg} rounded="full" 
             { ...rest }
        />
    )
}

export function Title({ children }: { children : string }) {
    return (
        <Heading as="h2" mb={6} 
                 color="gray.500" fontSize="2xl"
                 fontFamily={headFont} fontWeight="400"
                 textTransform="uppercase"
        >{ children }</Heading>   
    )
}

export function AboutMe({ title, brief }: { title:string, brief : string }) {
    return (
        <Box w={"full"} mb={8}>
            <Title>{ title }</Title>
            <Text color="gray.700" fontFamily={bodyFont} 
                  dangerouslySetInnerHTML={{ __html: brief }}
            />
        </Box>
    )
}

function SkillTag({ children }: { children : string }) {
    return <Tag mr={2} mb={2} rounded="3px"
                bg={"rgba(255, 255, 255, 0.7)"}
                border="1px" borderColor="gray.400" 
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

export function Expertise({ title, skills: { frontend, backend, others } } : {
    title: string,
    skills: {
        frontend: string[],
        backend: string[],
        others: string[]
    }
}) {
    return (
        <Box w={"full"}>
            <Title>{ title }</Title>

            <Box mb={4}>
                <Heading as="h3" mb={1} 
                        color="gray.500" fontSize="sm" fontWeight="400"
                        fontFamily={headFont} textTransform="uppercase"
                >Front-end</Heading>
                <SkillTags tags={frontend} /> 
            </Box>

            <Box>
                <Heading as="h3" mb={1}  
                        color="gray.500" fontSize="sm" fontWeight="400"
                        fontFamily={headFont} textTransform="uppercase"
                >Back-end / Others</Heading>
                <SkillTags tags={[...backend, ...others]} />                
            </Box>
        </Box>
    )
}

export function Education({ title, education }: { 
    title: string, 
    education: { [k:string]: string } 
}) {
    return (
        <Box w={"full"} mt="auto">
            <Title>{ title }</Title>
            
            <Text mb={2} color={pointColor} fontSize="lg" fontFamily={headFont} fontWeight={400}
            >{ education.degree }</Text>
            
            <Text fontFamily={bodyFont} fontSize="sm"
            >{ education.college }</Text>

            <Text fontFamily={bodyFont} fontSize="sm" color="gray.600">
                { education.location && <span>{ `${ education.location },` }</span> }
                <span> { education.duration }</span>
            </Text>
        </Box>
    )
}

function Job({ job }) {
    return (
        <Box mb={4}>
            <Heading as="h3" mb={1}
                     color={pointColor} fontSize="xl" fontWeight="400" fontFamily={headFont}
            >{ job.jobTitle }</Heading>

            <Heading as="h4" mb={2}
                     color="gray.400" fontSize="sm" fontWeight="600" fontFamily={headFont}
            >
                {[
                    `${ job.company } | `,
                    job.location? `${ job.location } | ` : '',
                    `${ job.duration }`,
                ].join('')}
            </Heading>
            
            {
                !job.consise && 
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
                !job.consise && 
                <SkillTags tags={job.skills} />   
            }
        </Box>
    )
}

export function Experience({ title, jobs }: {
    title: string,
    jobs: { [key: string]: string }[]
}) {
    return (
        <Box mb={-4}>
            <Title>{ title }</Title>
            { jobs.map((job, i) => <Job key={i} job={job} />) }
        </Box>
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

export function Contact({ contact }) {
    return (
        <Box position="absolute" w="300px" right={10} top={0}>
            <List position="relative" zIndex="2"
                  fontSize={"sm"} pt={8} spacing={2}>
                {contact.map(({ icon: Icon, text }, i) => (
                    <ContactInfo key={i} icon={Icon}>{ text }</ContactInfo>
                ))}
            </List>

            <Box position="absolute" right="-13px" top="-40px" zIndex="1" rounded="full"
                 w={"40px"} height={"200px"} 
                 bg={"rgb(255, 220, 86)"}
            />
        </Box>
    )
}

export function Header({ contact }) {
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
                    Jaster<Text as="span" ml={4} color={pointColor}>Chang</Text>
                </Heading>
                <Heading as="h2"
                        fontSize={"2xl"} fontWeight="600" fontFamily={headFont} letterSpacing={2}
                >Front-end Developer</Heading>
            </Box>

            <Contact contact={contact} />
        </Box>
    )
}