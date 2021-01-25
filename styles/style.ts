import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;
`;

export const Header = styled.header`
  padding: 10px;
  text-align: center;
  color: black;
`;

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLink = styled.a`
  background: rgba(0, 0, 0, 0);
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  color: black;
  font-size: 14px;
  font-family: Arial, sans-serif;
  transition: background-color 1s;
  &:hover {
    background-color: #E6E2FE;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: black;
  font-family: Arial, sans-serif;
`;

export const PageContent = styled.section`
  text-align: center;
`;

export const PostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const PostArticle = styled.article`
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px hsla(0, 0%, 50%, 0.5);
  background-color: #E6E2FE;
  &:hover {
    background-color: #E3D0FE;
    cursor: pointer;
  }
`;

export const PostTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: black;
  font-family: Arial, sans-serif;
`;

export const PostBody = styled.p`
  font-size: 16px;
  color: black;
  font-family: Arial, sans-serif;
`;

export const PostLink = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

export const CommentsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const CommentWrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  background-color: #EEEBFE;
  color: black;
  text-align: center;
`;

export const Subtitle = styled.h4`
  color: black;
  text-align: center;
  font-size: 24px;
`;


export const Button = styled.button`
  background: rgba(0, 0, 0, 0);
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  color: black;
  font-size: 14px;
  font-family: Arial, sans-serif;
  transition: background-color 1s;
  margin-top: 10px;
  &:hover {
    background-color: #E6E2FE;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;
  font-family: Arial, sans-serif;
  margin-bottom: 10px;
`;

export const Textarea = styled.textarea`
  width: 85%;
  border: 1px solid black;
  border-radius: 10px;
  height: 100px;
  outline: none;
  padding: 10px;
  font-family: Arial, sans-serif;
`;


export const Form = styled.form`
  width: 80%;
  margin: auto;
`;