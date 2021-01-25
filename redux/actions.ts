import axios from 'axios';
import { Post } from '../interfaces';

const GET_POSTS_LIST = 'GET_POSTS_LIST';
const GET_POST = 'GET_POST';
const POST_ADD_POST = 'POST_ADD_POST';
const POST_ADD_COMMENTS = 'POST_ADD_COMMENTS';

interface PostsList {
    type: typeof GET_POSTS_LIST;
    posts: Post[];
}

interface PostDetails {
    type: typeof GET_POST;
    post: Post;
}

interface AddPost {
    type: typeof POST_ADD_POST;
}

interface AddComments {
    type: typeof POST_ADD_COMMENTS;
}

export const getPostsList = (posts: Post[]): PostsList => ({
    type: GET_POSTS_LIST,
    posts,
});

export const getPost = (post: Post): PostDetails => ({
    type: GET_POST,
    post,
});

export const addPost = (): AddPost => ({
    type: POST_ADD_POST,
});

export const addPostComments = (): AddComments => ({
    type: POST_ADD_COMMENTS,
});

export const getAllPosts = () => (dispatch: any) => {
    axios.get(`https://simple-blog-api.crew.red/posts`)
        .then((response) => {
            dispatch(getPostsList(response.data));
    })
        .catch((error) => console.log( error));
};

export const getCurrentPost = (id: number) => (dispatch: any) => {
    if (id) {
        axios
            .get(`https://simple-blog-api.crew.red/posts/${id}`, {
                params: {
                    _embed: 'comments',
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    dispatch(getPost(response.data));
                } else {
                    console.log('Response status: ', response.status);
                }
            })
            .catch((error) => console.log( error));
    }
};

export const addPostData = (title: string, body: string) => (
    dispatch: any,
) => {
    if (title && body) {
        axios
            .post(`https://simple-blog-api.crew.red/posts`, {
                title,
                body,
            })
            .then((response) => {
                    dispatch(addPost());
            })
            .catch((error) => console.log(error));
    }
};


export const addCommentsData = (postId: number, body: string) => (
    dispatch: any,
) => {
    if (postId && body) {
        axios
            .post(`https://simple-blog-api.crew.red/comments`, {
                postId,
                body,
            })
            .then((response) => {
                    dispatch(addPostComments());
                    dispatch(getCurrentPost(postId));
            })
            .catch((error) => console.log('error', error));
    }
};