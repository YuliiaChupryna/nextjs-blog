import React, { FC, useState } from 'react';
import {
    Section,
    Form,
    Input,
    Textarea,
    Button,
} from "../styles/style";

interface NewPost {
    addNewPost: (title: string, body: string) => void;
}

const NewPost: FC<NewPost> = ({ addNewPost }) => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [done, setDone] = useState<boolean>(false);

    const addPost = ( event ) => {
        event.preventDefault();

        if (title && body) {
            addNewPost(title, body);
            setTitle('');
            setBody('');
            setDone(true);
        }
    };

    return (
        <Section>
            {done ?
                <Button type="button" onClick={() => {setDone(false)}}>Add one more post</Button>
                :
                <Form onSubmit={addPost}>
                    <Input
                        placeholder="Title"
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <br />
                    <Textarea
                        placeholder="Body"
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                    />
                    <br />
                    <Button type="submit" disabled={title === '' || body === ''} onClick={addPost}>Send</Button>
                </Form>
            }
        </Section>
    );
};

export default NewPost;