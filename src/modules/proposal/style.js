import styled from "styled-components";
import { Form, ButtonGroup, Col } from "react-bootstrap";

const Label = styled.label`
  color: #1a5105;
  font-size: 16px;
  font-weight: 600;
`;

const FormGroupTag = styled(Form.Label)`
  font-size: 12px;
  font-weight: normal;
`;

const ButtonGroupTag = styled(ButtonGroup).attrs((props) => ({
  className: props.className,
}))`
  .btn-secondary {
    color: #6c757d;
    background-color: #fff;
    border-color: #6c757d;
    transition: ease-in-out 0.2s;
    border-radius: 0;
  }

  .btn-secondary:hover {
    color: #fff;
    background-image: linear-gradient(100deg, rgba(16,82,3,1) 19%, rgba(34,113,4,1) 65%);
    border-color: #545b62;
    transition: ease-in-out 0.2s;
    box-shadow: 6.994px 5.664px 21px #a4e88a;
  }
  .btn-secondary:active {
    color: #fff;
    background-image: linear-gradient(100deg, rgba(16,82,3,1) 19%, rgba(34,113,4,1) 65%);
    border-color: #545b62;
    transition: ease-in-out 0.2s;
    box-shadow: 6.994px 5.664px 21px #a4e88a;
  }

  .btn-secondary:not(:disabled):not(.disabled).active,
  .btn-secondary:not(:disabled):not(.disabled):active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-image: linear-gradient(100deg, rgba(16,82,3,1) 19%, rgba(34,113,4,1) 65%);
    border-color: #545b62;
    transition: ease-in-out 0.2s;
    box-shadow: 6.994px 5.664px 21px #a4e88a;
  }
`;

const H4Tag2 = styled.h4`
  display: none;
  @media (max-width: 992px) {
    display: flex;
    text-align: center;
    width: 100%;
    justify-content: center;
    margin: 20px 30px 0px 30px;
  }
  @media (max-width: 600px) {
    margin: 20px 0px 0px 0px;
  }
`;

//title shift -proposal cards
const ShiftingLabel = styled.label`
  color: #1a5105;
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 992px) {
    display: none;
  }
`;

const ColDiv = styled(Col)`
  display: none;
  @media (max-width: 992px) {
    display: flex;
  }
`;

const SubmitDiv = styled.div`
  .checkbox-container {
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-bottom: 0.5rem;
  }
  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkbox-container input:checked ~ .checkmark,
  .plan-card .checkbox-container input:checked ~ .checkmark {
    background-color: #2edd2e;
  }
  .checkbox-container .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border: 1px solid #ddd;
    border-radius: 0;
  }
  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }
  .checkbox-container .checkmark:after {
    content: url(/assets/images/checkbox-select.png);
    left: 1px;
    top: -10px;
    width: 17px;
    height: 16px;
    position: absolute;
  }
  .privacyPolicy {
    padding-left: 40px;
    font-size: 13px;
    color: #545151;
    font-family: sans-serif;
  }
`;

export {
  Label,
  FormGroupTag,
  ButtonGroupTag,
  H4Tag2,
  ShiftingLabel,
  ColDiv,
  SubmitDiv,
};
