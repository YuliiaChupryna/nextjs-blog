export interface Comments {
    id: number;
    postId: number;
    body: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
    comments: Array<Comments>;
}

export interface State {
    posts: Post[];
    post: Post | {};
}
