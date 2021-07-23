import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Link, LinkProps, Text, TextProps } from '@chakra-ui/react';

import CodeBlock, { CodeBlockWrapper } from 'components/CodeBlock';
import Br from 'components/Br';

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

export default function MDX({ source }: { source: MDXRemoteSerializeResult }) {
    return (
        <MDXRemote {...source}  components={{ 
            p: P,
            a: A,
            pre : CodeBlockWrapper,
            code: CodeBlock,
            Br 
        }} />
    )
}