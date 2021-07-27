import { Box, Flex, Grid } from "@chakra-ui/react";

import meta from 'components/resume/constants';
import Paper from "./Paper";
import { Ball, Header, AboutMe, Expertise, Education, Experience } from "components/resume/Common";

export default function ResumeZhHant() {
    const about = meta.about.zhHant;
    const jobs  = meta.jobs.zhHant;

    return (
        <Paper height="auto">
            <Header contact={meta.contact.zhHant}  />

            <Grid as="section" position="relative" zIndex="3"
                    templateColumns={"80mm 1fr"} templateRows="1fr"
                    height="calc(100% - 45mm)" pb={10} 
            >
                <Flex flexDir="column" w="full" height="auto" 
                      pb={9} pl={6} pr={3}
                >
                    <AboutMe   title="關於我" brief={about.brief} />
                    <Expertise title="技能" skills={about.skills} />
                    <Education title="學歷" education={about.education} />
                </Flex>
                <Box pb={6} pl={4} pr={6}> 
                    <Experience title="工作經歷" jobs={jobs} />
                </Box>
            </Grid>

    
            {/** Right Bottom Side Balls */}
            <Ball size="120px" zIndex={2}
                pos={{ bottom: "-40px", right: "-30px" }}
                bg="rgba(255, 238, 167, 0.7)" />

            <Ball size="100px" zIndex={1}
                pos={{ bottom: "-60px", right: "70px" }}
                bg="rgba(117, 117, 117, 0.7)" />

            {/** Left Side Balls */}
            <Ball size="100px" zIndex={2}
                pos={{ bottom: "290px", left: "-60px" }}
                bg="rgba(255, 238, 167, 0.7)" />

            <Ball size="100px" zIndex={1}
                pos={{ bottom: "250px", left: "-30px" }}
                bg="rgba(117, 117, 117, 0.7)" />
        </Paper>
    )
}