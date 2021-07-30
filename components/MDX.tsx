import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Link, LinkProps, Text, TextProps, Code, CodeProps, Heading, HeadingProps } from '@chakra-ui/react';

import CodeBlock, { CodeBlockWrapper } from 'components/CodeBlock';
import Br from 'components/Br';
import { FunctionComponent } from 'react';

function P({ children, ...props } : { 
    children: JSX.Element, 
    props : TextProps 
}) {
    return <Text pb={2} fontSize={["sm", "md", "lg"]} {...props}>{ children }</Text>
}

function A({ children, ...props } : { 
    children: JSX.Element, 
    props : LinkProps 
}) {
    return <Link color="blue.400" target="_blank" {...props}>{ children }</Link>
}

function InlineCode({ children, ...props }: {
    children: JSX.Element, 
    props : CodeProps 
}) {
    return <Code mx={-1} fontSize="inherit" transform="scale(0.9)" {...props}>{ children }</Code>
}

function H2({ children, ...props }: {
    children: JSX.Element, 
    props : HeadingProps 
}) {
    return <Heading as="h2" mb={2} fontWeight="500" 
                            fontSize={["xl"]}
    
    {...props}>{ children }</Heading>
}

export default function MDX({ source, customComponents }: { 
    source: MDXRemoteSerializeResult,
    customComponents: { [k:string]: FunctionComponent }
}) {
    return (
        <MDXRemote {...source}  components={{ 
            h2: H2,
            p: P,
            a: A,
            pre : CodeBlockWrapper,
            code: CodeBlock,
            inlineCode: InlineCode,
            Br,
            ...customComponents 
        }} />
    )
}