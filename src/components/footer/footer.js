import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding: 15px 0 15px;
  background: ${({ theme }) => (theme.PrimaryColors?.color2 || '#2e0d34')};
  margin-top: 20px;
  > p {
    color: #fff;
    margin-bottom: 0;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 600;
    font-family: 'Titillium Web', sans-serif;
    line-height: 26px;
  }
  ${({ noLogin }) => noLogin ? `position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;` : ''}
  
`;

const Footer = ({ noLogin }) => {
  const todayDate = new Date();
  const presentYear = todayDate.getFullYear();
  return (
    <Wrapper noLogin={noLogin}>
      <p>© Copyright {presentYear}. All right reserved FynTune Solutions.</p>
    </Wrapper>
  );
};

export default Footer;
