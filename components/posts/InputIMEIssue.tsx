import { Box, Input, VStack } from "@chakra-ui/react";
import { useRef } from "react";
import { useState } from "react";

const bgs = [
    'gray.300', 'red.300', 'orange.300', 'yellow.300', 'green.300',
    'teal.300', 'blue.300', 'cyan.300', 'purple.300', 'pink.300'
];


function useCompostionChange(handleChange) {
    const isOnComposition = useRef(false);
    const handleComposition = (e) => {
        if (e.type === 'compositionend') {
          isOnComposition.current = false
          handleChange(e);
        } else {
          isOnComposition.current = true
        }
    }

    const onChange = (e) => {
        if (  
            e.target instanceof HTMLInputElement && 
            !isOnComposition.current
        ) {
            handleChange(e);
        }
    }

    return { 
        onCompositionStart: handleComposition,
        onCompositionUpdate: handleComposition,
        onCompositionEnd: handleComposition,
        onChange
    };
}

function InputIMEIssueBefore() {
    const [bg1, setBoxBg1] = useState(0);
    const setBg1 = () => setBoxBg1(d => (d + 1) % 10);

    return (
        <Box w={"full"} p={8} rounded="md" bg={bgs[bg1]}>
            <Input type="text" placeholder="中文輸入，觸發時機不正確" 
                   bg={"white"}  rounded="md"
                   onChange={setBg1} />
        </Box>
    )
}

function InputIMEIssueSolved() {
    const [bg2, setBoxBg2] = useState(0);
    const setBg2 = () => setBoxBg2(d => (d + 1) % 10);

    const events = useCompostionChange(setBg2);

    return (
        <Box w={"full"} p={8} rounded="md" bg={bgs[bg2]}>
            <Input type="text" placeholder="正確處理中文輸入觸發時機" 
                    bg={"white"}  rounded="md"
                    { ...events } />
        </Box>
    )
}

export default function InputIMEIssue({ type } : { type : 'before' | 'solved' }) {
    if(type === 'before') {
        return <InputIMEIssueBefore />
    }

    return <InputIMEIssueSolved />
}