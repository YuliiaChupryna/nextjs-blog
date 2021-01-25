import { State } from '../interfaces';

const initialState: State = {
    posts: [],
    post: {},
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'GET_POSTS_LIST':
            return {
                ...state,
                posts: action.posts,
            };
        case 'GET_POST':
            return {
                ...state,
                post: action.post,
            };
        case 'POST_ADD_POST':
            return {
                ...state,
            };
        case 'POST_ADD_COMMENTS':
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default reducer;