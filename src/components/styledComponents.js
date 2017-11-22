/* eslint-disable */
import styled from 'styled-components';

const BUTTON_COLOR = '#0C5AA6';
const BUTTON_COLOR_HOVER = '#04396C';

export const HeaderWrapper = styled.div`
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #87B4FD;
`;

export const LogoWrapper = styled.div`
  height: 30px;
  width: 30px;
`;

export const UserWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const UserName = styled.p`
  line-height: 18px;
  font-size: 14px;
  font-family: "Roboto";
  color: gray;
  text-align: left;
  margin-right: 5px;
`;

export const Button = styled.button`
  display: block;
  width: 60px;
  height: 20px;
  flex-shrink: 0;
  border-width: 2px;
  border-style: solid;
  border-radius: 2px;
  background-color: #A8BFFF;
  padding: 0;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  &>span {
    position: absolute;
    top: 0;
    bottom: 0;
    transform: translateX(-50%);
    width: 100%;
    line-height: 14px;
    font-size: 14px;
    text-align: center;
    transition: all 0.3s ease-in-out;
  }
`;

export const SignInButton = Button.extend`
  display: ${props => props.visible ? 'block' : 'none'};
  border-color: ${BUTTON_COLOR};
  margin-right: 5px;
  &:hover {
    border-color: ${BUTTON_COLOR_HOVER};
    &>span {
      color: ${BUTTON_COLOR_HOVER};
    }
  }
  &>span {
    color: ${BUTTON_COLOR};
  }
`;

export const SignUpButton = Button.extend`
  display: ${props => props.visible ? 'block' : 'none'};
  border-color: ${BUTTON_COLOR};
  &:hover {
    border-color: ${BUTTON_COLOR_HOVER};
    &>span {
      color: ${BUTTON_COLOR_HOVER};
    }
  }
  &>span {
    color: ${BUTTON_COLOR};
  }
`;

export const SignOutButton = Button.extend`
  display: ${props => props.visible ? 'block' : 'none'};
  border-color: ${BUTTON_COLOR};
  &:hover {
    border-color: ${BUTTON_COLOR_HOVER};
    &>span {
      color: ${BUTTON_COLOR_HOVER};
    }
  }
  &>span {
    color: ${BUTTON_COLOR};
  }
`;

export const FormWrapper = styled.div`
  width: 300px;
  display: ${props => props.visible === true ? 'block' : 'none !important'};
  background-color: #87B4FD;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
`;

export const FormTitle = styled.p`
  width: 100%;
  line-height: 18px;
  font-size: 18px;
  font-family: "Roboto";
  color: ${BUTTON_COLOR};
  text-align: center;
  margin-bottom: 15px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 16px;
`;

export const InputField = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px;
  margin-bottom: 4px;
  line-height: 20px;
  font-size: 16px;
  font-family: "Roboto";
  color: gray;
  border: 1px solid #c0af97;
  border-radius: 6px;
  border-color: ${props => props.borderColor};
`;

export const SubmitFormButton = Button.extend`
  display: ${props => props.visible === true ? 'block' : 'none'};
  border-color: ${BUTTON_COLOR};
  &:hover {
    border-color: ${BUTTON_COLOR_HOVER};
    &>span {
      color: ${BUTTON_COLOR_HOVER};
    }
  }
  &>span {
    color: ${BUTTON_COLOR};
  }
`;

export const CloseFormButton = Button.extend`
  border-color: ${BUTTON_COLOR};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 5px;
  &:hover {
    border-color: ${BUTTON_COLOR_HOVER};
    &>span {
      color: ${BUTTON_COLOR_HOVER};
    }
  }
  &>span {
    width: 100%;
    font-size: 13px;
    line-height: 10px;
    text-align: center;
    color: ${BUTTON_COLOR};
  }
`;

export const SectionWrapper = styled.section`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  margin: 0 auto;
`;

export const CardWrapper = styled.section`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  height: 200px;
  width: 300px;
  overflow: hidden;
  margin-bottom: 10px;
  &>img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const Title = styled.p`
  width: 100%;
  line-height: 24px;
  font-size: 24px;
  font-family: "Roboto";
  color: gray;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  width: 100%;
  line-height: 18px;
  font-size: 18px;
  font-family: "Roboto";
  color: gray;
  text-align: center;
  margin-bottom: 10px;
`;

export const AddCommentWrapper = styled.div`
  height: auto;
  width: 100%;
  overflow: hidden;
  padding: 10px 0;
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommentField = styled.textarea`
  width: 100%;
  height: 60px;
  padding: 5px;
  margin-bottom: 10px;
  line-height: 16px;
  font-size: 16px;
  font-family: "Roboto";
  color: gray;
  border: 1px solid ${BUTTON_COLOR};
  border-radius: 6px;
  resize: none;
`;

export const TitleList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  &>li {
    margin-right: 5px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const ListButton = Button.extend`
  border-color: ${BUTTON_COLOR};
  width: 70px;
  &:hover {
    border-color: ${BUTTON_COLOR_HOVER};
    &>span {
      color: ${BUTTON_COLOR_HOVER};
    }
  }
  &>span {
    color: ${BUTTON_COLOR};
  }
`;

export const AddCommentButton = Button.extend`
  border-color: ${BUTTON_COLOR};
  width: 100px;
  &:hover {
    border-color: ${BUTTON_COLOR_HOVER};
    &>span {
      color: ${BUTTON_COLOR_HOVER};
    }
  }
  &>span {
    color: ${BUTTON_COLOR};
  }
`;

export const CommentList = styled.ul`
  display: block;
  width: 100%;
  height: auto;
`;

export const CommentListBlock = styled.div`
  width: 100%;
  padding: 5px;
  border: 1px solid gray;
  margin-bottom: 3px;
`;

export const CommentListRate = styled.p`
  width: 100%;
  line-height: 12px;
  font-size: 12px;
  font-family: "Roboto";
  color: gray;
  text-align: left;
  margin-bottom: 3px;
  &>span {
    font-weight: 700;
  }
`;

export const CommentListText = styled.p`
  width: 100%;
  line-height: 14px;
  font-size: 14px;
  font-family: "Roboto";
  color: gray;
  text-align: left;
  margin-bottom: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CommentListAuthor = styled.p`
  width: 100%;
  line-height: 12px;
  font-size: 12px;
  font-family: "Roboto";
  color: gray;
  text-align: right;
  &>span {
    font-weight: 700;
  }
`;

export const ErrorText = styled.p`
  width: 100%;
  line-height: 10px;
  font-size: 10px;
  font-weight: 300;
  font-family: "Roboto";
  color: #A60000;
  text-align: left;
  padding-left: 5px;
  opacity: ${props => props.visible};
`;

export const Overlay = styled.div`
  background-color: rgba(0,0,0,.6);
  display: ${props => props.visible ? 'block' : 'none'};
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;