import React from 'react'
import { Box } from '@chakra-ui/react';
import Highlight, {defaultProps, Language} from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/vsDark';

export function CodeBlockWrapper({ children, ...rest } : { children: JSX.Element }) {
    return (
        <Box mt={2} p={4} maxW={"100vw"} overflowX="scroll" rounded="md"
             bg="rgb(42, 39, 52)" 
             {...rest}
        >{ children }</Box>
    )
}

interface CodeBlockProps {
    children: string,
    className: string
}

export default function CodeBlock({children, className = 'language-js'}: CodeBlockProps) {
    const language = className.replace(/language-/, '') as Language;

    return (
        <Highlight {...defaultProps} code={children} language={language} theme={github}>
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <Box as="pre" className={className} style={{...style }}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({line, key: i})}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({token, key})} />
                            ))}
                        </div>
                    ))}
                </Box>
            )}
        </Highlight>
    )
}