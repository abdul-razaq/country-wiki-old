import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';


const StyledModal = styled.div`
  /* The modal background */
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  background-color: #fefefe;
  /* 15% from the top and centered */
  margin: 15% auto;
  padding: 2rem;
  border: 1px solid #888;
  width: 80%;
`;

const Close = styled.span`
  color: #aaa;
  float: right;
  font-size: 2.8rem;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Header = styled.div`
  padding: 2px 16px;
  background-color: #5cb85c;
  color: #fff;
`;

const Body = styled.div`
  padding: 2px 16px;
`;

const Footer = styled.div`
  padding: 2px 16px;
  background-color: #5cb85c;
  color: #fff;
`;


const Modal = () => {

  const onDismiss = () => {

  }

  return ReactDOM.createPortal(
    <StyledModal onClick={onDismiss}>
      <div onClick={ e => e.stopPropagation() }>
        <Content>
          <Header>
            <Close>&times;</Close>
            <h2>Country Encyclopedia</h2>
          </Header>
          <Body>
            <p>This was made by me</p>
            <p>Made with love for all</p>
          </Body>
          <Footer>
            <h3>This is the Footer</h3>
          </Footer>
        </Content>
      </div>
    </StyledModal>,

    document.querySelector("#modal")
  )
};

export default Modal;
