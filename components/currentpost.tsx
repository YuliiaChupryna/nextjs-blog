import React, { FC, useState } from 'react';
import {
    Section,
    Textarea,
    PostArticle,
    PostTitle,
    PostBody,
    CommentsBlock,
    CommentWrapper,
    Subtitle,
    Button
} from "../styles/style";
import {Post} from "../interfaces";

interface CurrentPost {
    post: Post;
    addCommentsData: (postId: number, body: string) => void;
}

const CurrentPost: FC<CurrentPost> = ({ post, addCommentsData }) => {
    const { id, title, body, comments } = post;

    const [comment, setComment] = useState<string>('');

    const addComment = () => {
        if (comment) {
            addCommentsData(id, comment);
            setComment('');
        }
    };

    return (
        <>
            <Section key={id}>
                <PostArticle>
                    <PostTitle>{title}</PostTitle>
                    <PostBody>{body}</PostBody>
                </PostArticle>
                {comments && comments.length > 0 &&
                <CommentsBlock>
                    <Subtitle>Comments:</Subtitle>
                    {comments.map((comment: any) => {
                        return (
                            <CommentWrapper key={comment.id}>
                                <PostBody>{comment.body}</PostBody>
                            </CommentWrapper>
                        );
                    })}
                </CommentsBlock>
                }
                <CommentsBlock>
                    <Subtitle>Add your comment:</Subtitle>
                    <Textarea
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                    />
                    <Button disabled={comment === ''} onClick={addComment}>Add comment</Button>
                </CommentsBlock>
            </Section>
        </>
    );
};

export default CurrentPost;