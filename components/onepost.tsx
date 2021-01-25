import React, { FC } from 'react';
import Link from 'next/link';
import { Post } from '../interfaces';
import {  PostLink, PostArticle, PostTitle, PostBody } from "../styles/style";

interface OnePostProps {
    post: Post;
}

const OnePost: FC<OnePostProps> = ({ post }) => {
    const { id, title, body } = post;

    return (
        <PostArticle>
            <Link href={`/posts/${id}`}>
                <PostLink>
                    <PostTitle>{title}</PostTitle>
                    <PostBody>{body}</PostBody>
                </PostLink>
            </Link>
        </PostArticle>
    );
};

export default OnePost;