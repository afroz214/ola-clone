import React from "react";
import styled from 'styled-components'

import { Row, Col } from 'react-bootstrap'


export const Footer = () => {
  const todayDate = new Date();
  const presentYear = todayDate.getFullYear();
  return (
    <footer>
      <Row>
        <Col xl={8} lg={8} md={12} sm={12} className="footerBold">
          <div className="footerInline"><span>Category: </span>Composite Broker</div>
          <div className="footerInline"><span>CIN No. </span>U67200MH2003PTC141621</div>
          <div className="footerInline"><span>IRDAI Registration No. </span>CA0682</div>
        </Col>
        <Col xl={4} lg={4} md={12} sm={12} className="footerCopy">
          Copyright &copy; {presentYear} <span></span>
          Ola Financial Services Pvt. Ltd.</Col>
      </Row>
    </footer>
  );
};

export default Footer;

export const Layout = styled.div`
margin-bottom: 100px;
`
