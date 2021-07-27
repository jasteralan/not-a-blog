import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from 'framer-motion';

const MotionBox = motion<BoxProps>(Box);

export default function Paper({ children, ...rest }: { children: JSX.Element[], rest: BoxProps }) {
    return (
        <MotionBox  width="210mm" mx={"auto"} border="1px" bg="white" 
                    position="relative" overflow="hidden" {...rest}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0,   opacity: 1, transition: { ease: 'easeOut', duration: 0.5, delay: 0.2 } }}
                    exit={{ y: 100, opacity: 0, transition: { ease: 'easeIn', duration: 0.3 } }}
        >{ children }</MotionBox>
    )
}