import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Link, LinkProps, Text, TextProps, Code, CodeProps } from '@chakra-ui/react';

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
    return <Code px="1" {...props}>{ children }</Code>
}

export default function MDX({ source, customComponents }: { 
    source: MDXRemoteSerializeResult,
    customComponents: { [k:string]: FunctionComponent }
}) {
    return (
        <MDXRemote {...source}  components={{ 
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