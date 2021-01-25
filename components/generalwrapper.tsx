import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Header, HeaderLinks, HeaderLink, Title, PageContent } from "../styles/style";

interface GeneralWrapper {
    title: string;
}

const GeneralWrapper: React.FC<GeneralWrapper> = ({ title, children}) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
        </Head>
        <Header>
            <HeaderLinks>
                <Link href="/">
                    <HeaderLink>Recent Posts</HeaderLink>
                </Link>
                <Link href="/posts/new">
                    <HeaderLink>New Post</HeaderLink>
                </Link>
            </HeaderLinks>
            <Title>{title}</Title>
        </Header>
        <PageContent>{children}</PageContent>
    </>
);

export default GeneralWrapper;