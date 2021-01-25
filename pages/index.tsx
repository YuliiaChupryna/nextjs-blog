import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../redux/actions';
import {State, Post} from '../interfaces';
import GeneralWrapper from "../components/generalwrapper";
import PostsList from '../components/postslist';
import { Subtitle } from "../styles/style";

interface PageRecentPostsProps {
    posts: Post[];
    getAllPosts: () => void;
}

const PageRecentPosts: FC<PageRecentPostsProps> = ({posts, getAllPosts}) => {
    useEffect(() => {getAllPosts()}, []);

    return (
        <GeneralWrapper title="Recent posts">
            {posts ? (
                <PostsList data={posts.length >= 5 ? posts.slice(posts.length - 5, posts.length) : posts}  />
            ) : (
                <Subtitle>Wait a few seconds</Subtitle>
            )}
        </GeneralWrapper>
    );
};

const mapStateToProps = (state: State) => {
    return {
        posts: state.posts,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllPosts: () => dispatch(getAllPosts()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageRecentPosts);
