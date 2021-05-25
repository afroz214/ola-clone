import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../utils/logo.svg';
import CallMe from "../Popup/CallMe";
import { SendQuotes } from "../Popup/SendQuotes";
import { useLocation } from 'react-router';
import { useOutsideClick } from '../../hoc'
// import { setSearchQuery } from '../../modules/home/home.slice';
import { useDispatch, useSelector } from 'react-redux';
import { reloadPage } from '../../utils';

const includeRoute = ['/proposal-form'];
const excludeRoute = ['/fg/payment/success', '/payment/success',
  '/bharti/payment/success', '/otp-verification-tata',
  '/payment/failed', '/payment-gateway', '/404'];

const excludeRoutePayment = ['/fg/payment/success', '/payment/success',
  '/bharti/payment/success', '/payment/failed', '/mailed-policy', '/', '/404'];



const Header = () => {

  const location = useLocation();
  // const { isPaymentDone1, isPaymentDone2, isPaymentDone3, searchQuery } = useSelector(state => ({
  //   isPaymentDone1: state.home?.isPaymentDone,
  //   isPaymentDone2: state.form?.policy?.has_completed_payment,
  //   isPaymentDone3: state.payment_gateway?.user_data?.has_completed_payment,
  //   searchQuery: state.home.searchQuery
  // }))
  const [modal, setModal] = useState(false);
  const [sendQuotes, setSendQuotes] = useState(false);
  const [navCheck, setNavCheck] = useState(false);
  const dispatch = useDispatch();
  const query = new URLSearchParams(location.search);
  const id = query.get("enquiry_id");

  const dropDownRef = useRef(null);
  useOutsideClick(dropDownRef, () => setNavCheck(false));

  // useEffect(() => {
  //   dispatch(setSearchQuery(location.search
  //     .replace('enquiry_id=' + id + '&', '')
  //     .replace('enquiry_id=' + id, '')
  //     .replace('dropout=true&', '')
  //     .replace('dropout=true', '')));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // useEffect(() => {

  //   if ((isPaymentDone1 || isPaymentDone2 || isPaymentDone3) && !excludeRoutePayment.includes(location.pathname)) {
  //     reloadPage(searchQuery ? `/${searchQuery}` : '/')
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isPaymentDone1, isPaymentDone2, isPaymentDone3])


  return (
    <header>
      <Navbar>
        <div>
          <a
            className="logo"
            href="https://www.elephant.in/AllianceIB-WorksiteGen/forms/home.aspx"
          >
            <Logo src={logo} alt='logo' />
          </a>
        </div>
        <div className='d-flex my-auto'>
          {!excludeRoute.includes(location.pathname) && <>

            <CallButton>
              <a href="tel:18002669639">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#656565">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M21 15.46l-5.27-.61-2.52 2.52c-2.83-1.44-5.15-3.75-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51z" />
                </svg>
              </a>
            </CallButton>
            {includeRoute.includes(location.pathname) &&
              <CallButton onClick={() => setSendQuotes(true)}>
                <SendQuery className="fa fa-share-alt" />
              </CallButton>}
            <div>
              <ConfirmButton onClick={() => setModal(true)}>
                <img src={'/assets/images/phone.png'} alt='phone' className='mr-2 my-auto' />
              <label className='m-0 p-0' style={{fontSize:'16px'}}>Call Us</label>
            </ConfirmButton>
            </div>
            <div>
              {includeRoute.includes(location.pathname) &&
                <ConfirmButton onClick={() => setSendQuotes(true)}>
                  {/* <i class="fa mr-2 fa-share-alt" style={{ fontSize: '25px' }}></i> */}
               <label className='m-0 p-0' style={{fontSize:'16px'}}>Send Quotes</label> 
            </ConfirmButton>
              }
            </div>
          </>}
          <div className='my-auto'>
            <SideMenu ref={dropDownRef}>
              <div
                id="menuToggle2">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="navi-toggle"
                  checked={navCheck}
                  onChange={(e) => setNavCheck(e.target.checked)} />
                <label htmlFor="navi-toggle" className="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#666666"
                    width="38px"
                    height="38px">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                  </svg>
                </label>

                <div className="nav">
                  <label htmlFor="navi-toggle" className="close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fff">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                      <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                  </label>
                  <ul className="list">
                    <li>
                      <a
                        href="https://elephant.in/AllianceIB-WorksiteGen/forms/home.aspx"
                        target="_blank" rel="noopener noreferrer">
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://elephant.in/AllianceIB-WorksiteGen/forms/about.aspx"
                        target="_blank" rel="noopener noreferrer">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://elephant.in/AllianceIB-WorksiteGen/forms/Home.aspx#features"
                        target="_blank" rel="noopener noreferrer">
                        Why Elephant?
                      </a>
                    </li>
                    <li>
                      <a href="https://pos.elephant.in/" target="_blank" rel="noopener noreferrer">
                        Become an Agent
                      </a>
                    </li>
                    <li>
                      <a href="https://elephant.in/AllianceIB-WorksiteGen/members/login.aspx?ID=L6pmkulsWEI="
                        target="_blank" rel="noopener noreferrer">
                        Claims
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://elephant.in/AllianceIB-WorksiteGen/Forms/Frm_HR_Registration.aspx"
                        target="_blank"
                        rel="noopener noreferrer">
                        Corporate Sign-Up
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://elephant.in/AllianceIB-WorksiteGen/forms/contact.aspx"
                        target="_blank" rel="noopener noreferrer">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SideMenu>
          </div>
        </div>
      </Navbar>
      {modal && <CallMe show={modal} onClose={setModal} />}
      {sendQuotes && <SendQuotes show={sendQuotes} onClose={setSendQuotes} />}
    </header >)
};

const Navbar = styled.div`
  background-color: #f6f6f6;
  border-bottom: solid 2px #dfe3e8;
  margin: 0;
  position: relative;
  height: 88px;
  padding: 18px 30px 18px 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 18px 25px 18px 15px; 
  }
`
const CallButton = styled.span`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    padding-top: 5px;
    margin-right: 15px;
    & > a > svg {
      width: 38px;
      height: 38px;
      border: 1px solid #777;
      padding: 4px;
      border-radius: 50%;
    }
  }
`;

const ConfirmButton = styled.button`
  font-family: 'basier_squaremedium';
  background-color: #edeced;
  border: solid 1px #666666;
  padding: 11px 0;
  border-radius: 4px;
  z-index: 2;
  width: 161px;
  height: 48px;
  font-size: 16px;
  color: #666666;
  margin-right: 0px;
  font-weight: 400;
  outline:none;
  margin-right: 30px;
  cursor: pointer;
  &:focus{
    outline:none;
  }
  @media (max-width: 768px) {
    display: none;
  }
  & svg {
    width: 27px;
    height: 24px;
    margin-right: 6px;
  }
`;

const SideMenu = styled.nav`

& > div{
  background: #f6f6f6; 
}
.checkbox {
  display: none !important;
}
.button {
  cursor: pointer;
  margin: 0;
}
.button svg{
  cursor:pointer;
}
.nav {
  height: 100%;
  background-color: black;
  width: 0;
  position: fixed;
  right: 0;
  top: 0;
  opacity: 0;
  z-index: 1500;
  transition: all 0.2s;
  visibility: hidden;
  transition: width 500ms ease-in-out,visibility 250ms ease-in-out,opacity 200ms ease-in-out;
}
.list {
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
  li a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-family: 'basier_squaremedium';
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  display: block;
    }
  }
  
  li a:link,li a:visited{
    text-decoration: none;
    }
  li a:hover{
    background-color: #056b88;
  }

  .checkbox:checked ~ .nav{
    width:280px;
    opacity: 1;
    visibility: visible;
    display: flex;
    flex-direction: column;
  }

  .close{
    opacity: 1;
    float: right;
    margin-right: 20px;
    margin-top:20px;
    padding: 5px;
    font-size: 0;
    cursor: pointer;
    align-self: flex-end;
  }
  .close:hover{
    background-color: #056b88;
    opacity: 1;
  }
  .close svg{
    width:20px;
    height: 20px;
  }
  .close:not(:disabled):not(.disabled):focus, .close:not(:disabled):not(.disabled):hover{
    opacity: 1;
  }
`;

const Logo = styled.img`
width: 160px;
height: 50px;
@media (max-width: 768px) {
  width: 130px;
}`;

const SendQuery = styled.i`
color: #656565;
max-height: 38px;
font-size: 25px;
border: 1px solid #777777;
border-radius: 50px;
padding: 6px 8px 7px 7px;
cursor: pointer`

export default Header;
