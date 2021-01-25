import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../interfaces';
import { addPostData } from '../../redux/actions';
import GeneralWrapper from "../../components/generalwrapper";
import NewPost from "../../components/newpost";

interface PageNewPost {
    addPostData: (title: string, body: string) => void;
}

const PageNewPost: React.FC<PageNewPost> = ({ addPostData }) => (
    <GeneralWrapper title="New Post">
        <NewPost addNewPost={addPostData} />
    </GeneralWrapper>
);

const mapStateToProps = (state: State) => {
    return {
        posts: state.posts,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPostData: (title: string, body: string) =>
            dispatch(addPostData(title, body)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNewPost);