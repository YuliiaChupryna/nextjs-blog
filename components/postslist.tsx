import React, { FC } from 'react';
import { Post } from '../interfaces';
import { PostsWrapper} from "../styles/style";
import OnePost from "./onepost"

interface PostsListProps {
    data: Post[];
}

const PostsList: FC<PostsListProps> = ({ data}) => {
    return (
        <PostsWrapper>
            {data.map((post: Post) => (
                <OnePost key={post.id} post={post}  />
            ))}
        </PostsWrapper>
    );
};

export default PostsList;