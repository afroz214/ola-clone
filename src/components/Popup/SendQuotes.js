import React, { useState } from "react";
import styled from "styled-components";

import Popup from "./Popup";

import { useSelector, useDispatch } from "react-redux";
import { useLocation } from 'react-router';

export const SendQuotes = ({ show, onClose }) => {

  const dispatch = useDispatch();
  const [msg, setMsg] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const enquiry_id = query.get("enquiry_id");

  const onSubmit = () => {
    setMsg(true);
    // dispatch(sendQuotes({ enquiry_id }));
    setTimeout(() => {
      onClose(false);
      setMsg(false);
    }, 2500);
  }


  const content2 = (
    <MessageContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#4fcc6e"
        width="48px"
        height="48px">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </svg>
      <FlexDiv>
        <LaxmiWrapper>
          <Laxmi src="/assets/images/auto-car.jpg" alt="Laxmi" />
        </LaxmiWrapper>
        <Wrapper>
          <Text>
            Thank you! Your quotes has been sent via SMS on <strong>{'7021493032'}</strong> and also email on <strong>{"Email@email.com"}</strong>
          </Text>
        </Wrapper>
      </FlexDiv>

    </MessageContainer>
  );

  const content = (
    <>
      <MainWrapper>
        <LaxmiWrapper>
          <Laxmi src="/assets/images/auto-car.jpg" alt="Laxmi" />
        </LaxmiWrapper>
        <Wrapper>
          <Text>
            We will send you this quote via SMS on <strong>{"7021493032"}</strong> and also email on <strong>{"Email@email.com"}</strong>
          </Text>
          <div>
            <ConfirmButton
              onClick={onSubmit}>
              Send</ConfirmButton>
          </div>
        </Wrapper>
      </MainWrapper>
      <Content2>
        <p><span>*</span>Please note that the premium may vary in future.</p>
      </Content2>
    </>
  );

  return (
    <div>
      <Popup
        height={msg ? "240px" : "auto"}
        width="640px"
        show={show}
        onClose={onClose}
        content={msg ? content2 : content}
        position="middle"
      ></Popup>
    </div>
  );
};

export default SendQuotes;

const LaxmiWrapper = styled.div`
float:left;
margin-right:28px;
@media (max-width: 500px) {
  margin-right:0;
}
`;

const Laxmi = styled.img`
height:100px;
width: 100px;
border-radius:50%;
box-shadow: 0px 4px 13px rgba(41,41,41,0.35);
border: 2.5px solid #006600;
`;

const MainWrapper = styled.div`
margin: 90px 0 75px;
padding:0px 20px;
display: flex;
justify-content: center;
flex-wrap: wrap;
@media (max-width: 500px) {
  margin: 50px 0;
  padding: 0 2px;
}
`;

const Wrapper = styled.div`
max-width: 400px;
text-align: left;
align-self: center;
  &>div{
    text-align:center;
    margin-top:10px;
  }
  @media (max-width: 500px) {
  margin-top: 20px;
  }
`;

const Text = styled.p`
font-size: 14px;
line-height: 20px;
color: #666666;
font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
& strong{
  color:#000000;
  font-weight:700;
}
`;

const ConfirmButton = styled.button`
background-color:#bdd400;
display:block;
margin:25px 30%;
font-size: 15px;
color: #fff;
padding:12px 40px;
font-weight: bold;
border-radius: 5px;
border:none;
&:focus {
  outline: none;
}
@media (max-width: 500px) {
  margin: auto;
}
`;

const Content2 = styled.div`
  & p {
    color: #000000;
    font-family: "basier_squaremedium";
    font-size: 14px;
    font-weight: 500;
    margin: 0;
  }
  height: 20%;
  padding: 23px 0;
  background-color: #eae8e8;
  text-align: center;
`;

const MessageContainer = styled.div`
  padding: 10px;
  & svg {
    margin: 0 auto;
    width: 100%;
  }
`;

const FlexDiv = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
