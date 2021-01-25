import React, { FC, useEffect, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import {State, Post} from '../../interfaces';
import * as actions from '../../redux/actions';
import CurrentPost from "../../components/currentpost";
import GeneralWrapper from "../../components/generalwrapper";
import {Subtitle} from "../../styles/style";

interface PageCurrentPost {
    post: Post;
    getCurrentPost: (id: number) => void;
    addCommentsData: (postId: number, body: string) => void;
}

const PageCurrentPost: FC<PageCurrentPost> = ({ post, getCurrentPost, addCommentsData }) => {
    const postId = Number(useRouter().query.postId);

    useEffect(() => {getCurrentPost(postId)}, [postId]);

    return (
        <GeneralWrapper title={`Post ${postId}`}>
            {post.id ? (
                <CurrentPost
                    post={post}
                    addCommentsData={addCommentsData}
                />
            ) : (
                <Subtitle>Wait a few seconds or this post does not exist</Subtitle>
            )}
        </GeneralWrapper>
    );
};

const mapStateToProps = (state: State) => {
    return {
        post: state.post,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    const {
        getCurrentPost,
        addCommentsData,
    } = bindActionCreators(actions, dispatch);

    return {
        getCurrentPost: (id: number) => getCurrentPost(id),
        addCommentsData: (postId: number, body: string) =>
            addCommentsData(postId, body),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageCurrentPost);