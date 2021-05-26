import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { numOnly } from "../../utils";
import Popup from "./Popup";
import { TextInput, Label, FormGroup, FormWrapper, ErrorMsg } from "../";

import { useForm } from "react-hook-form";
// import { loadTalkToExpert } from '../../modules/home/home.slice';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { validation } from "../../utils";

const mobileValidation = yup.object({
	phone: validation.mobile,
});

const CallMe = ({ show, onClose }) => {
	const { register, handleSubmit, errors, setValue, watch } = useForm({
		resolver: yupResolver(mobileValidation),
		mode: "onBlur",
		reValidateMode: "onBlur",
	});

  //temporary
	useEffect(() => {
		setValue("phone", "7021493032");
	}, []);
  
	// const mobileNumber = watch('phone');
	// const { group_details: { self_mobile_no } } = useSelector(state => state.home);
	// const { policy: { proposer_mobile_no } } = useSelector(state => state.form);
	const dispatch = useDispatch();
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const enquiry_id = query.get("enquiry_id");
	const [msg, setMsg] = useState(false);

	// useEffect(() => {
	//   if (proposer_mobile_no || self_mobile_no) {
	//     setValue('phone', proposer_mobile_no || self_mobile_no)
	//   }

	//   // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [self_mobile_no, proposer_mobile_no])

	const handleChange = () => {};

	const onSubmit = (data) => {
		setMsg(true);

		// eslint-disable-next-line no-unused-vars
		// let payload = {};
		// switch (location.pathname) {
		//   case '/proposal-form':
		//     payload = {
		//       mobile_no: data.phone,
		//       enquiry_number: enquiry_id,
		//       step: 3
		//     }
		//     break;

		//   case '/plans':
		//     payload = {
		//       mobile_no: data.phone,
		//       enquiry_number: enquiry_id,
		//       step: 2
		//     }
		//     break;

		//   default:
		//     payload = {
		//       mobile_no: data.phone,
		//       ...(enquiry_id && { enquiry_number: enquiry_id }),
		//       step: 1
		//     }
		// }

		// dispatch(loadTalkToExpert({
		//   mobile_no: data.phone,
		//   ...(enquiry_id && { enquiry_number: enquiry_id }),
		// }))
		setTimeout(() => {
			onClose(false);
			setMsg(false);
		}, 2500);
	};
	const content2 = (
		<MessageContainer>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="#4fcc6e"
				width="48px"
				height="48px"
			>
				<path d="M0 0h24v24H0z" fill="none"></path>
				<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
			</svg>
			<CallText>
				One of our experts will get back to you within few minutes
			</CallText>
		</MessageContainer>
	);
	const content1 = (
		<>
			<Content1>
				<div className="contact__imgbox">
					<ContactImg src="/assets/images/laxmiImg.png" alt="Lakshmi"></ContactImg>
				</div>
				<ContactText>
					<p>
						Hi, please confirm your mobile number and we will get back to you shortly.
					</p>
				</ContactText>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormWrapper>
						<FormGroup lg>
							<TextInput
								lg
								type="tel"
								id="phone"
								name="phone"
								placeholder=" "
								ref={register}
								onChange={handleChange}
								error={errors?.phone}
								maxLength="10"
								onKeyDown={numOnly}
							/>
							<Label lg htmlFor="phone">
								Mobile No.
							</Label>
							{!!errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
						</FormGroup>
						<FormGroup sm style={{ width: "29%" }}>
							<Button>Call Me</Button>
						</FormGroup>
					</FormWrapper>
				</form>
			</Content1>
			<Content2>
				<p>In a hurry? Call us on our toll free no. 1800 266 9693</p>
			</Content2>
		</>
	);
	return (
		<Popup
			height={msg ? "200px" : "auto"}
			width="640px"
			show={show}
			onClose={onClose}
			content={msg ? content2 : content1}
			position="middle"
		/>
	);
};

// PropTypes
CallMe.propTypes = {
	show: PropTypes.bool,
	onClose: PropTypes.func,
};

// DefaultTypes
CallMe.defaultProps = {
	show: false,
	onClose: () => {},
};

const CallText = styled.div`
	width: 340px;
	margin: 7px auto 37px;
	text-align: center;
	font-family: "basier_squareregular";
	font-size: 16px;
	color: #000000;
`;
const MessageContainer = styled.div`
	padding: 10px;
	& svg {
		margin: 0 auto;
		width: 100%;
	}
`;

const Content1 = styled.div`
	height: 90%;
	padding: 60px 100px;
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
const ContactImg = styled.img`
	float: left;
	margin-right: 10px;
	height: 70px;
`;

const ContactText = styled.div`
	padding: 1rem;
	font-weight: 400;
	font-family: basier_squareregular;
	font-size: 16px;
	margin-bottom: 20px;
	color: #111;
`;
const Button = styled.button`
	&:disabled {
		background-color: #dfe3e8;
		color: #111;
		border: solid 1px #d2d3d4;
	}
	&:focus {
		outline: none;
	}
	display: inline-block;
	border-radius: 5px;
	padding: 0px 25px;
	box-sizing: content-box;
	font-size: 17px;
	background-color: #bdd400;
	font-weight: 600;
	border: none;
	color: white;
	height: 60px;
`;

export default CallMe;
