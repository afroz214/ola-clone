import React, { useState, useEffect } from "react";
import { CompactCard, Error, Button } from "components";
import { Row, Col, Form } from "react-bootstrap";
import { FormTextInput, FormTextIcon } from "./style";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { clear, Login as LoginAction } from "./login.slice";
import swal from "sweetalert";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from 'react-router';

/*----------------Validation Schema---------------------*/
const yupValidate = yup.object({
	userName: yup.string().required("Username is required"),
	password: yup.string().required("Password is required"),
});
/*----------x------Validation Schema----------x-----------*/

export const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { login, error } = useSelector((state) => state.login);
	const { errors, control, handleSubmit } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "onBlur",
		reValidateMode: "onBlur",
	});

	const [passwordShown, setPasswordShown] = useState(false);
	const togglePasswordVisibility = () => {
		setPasswordShown((prev) => !prev);
	};

	//onSuccess & onError
	useEffect(() => {
		if (login) {
			history.replace('/lead-page')
		}
		if (error) {
			swal(error, "", "error");
		}
		return () => {
			dispatch(clear());
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [login, error]);

	const onSubmit = (data) => {
		dispatch(LoginAction(data));
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)} className="w-100">
			<RowTag className="w-100 mx-auto d-flex justify-content-center my-0 p-0">
				<Col xs="12" sm="12" md="12" lg="12" xl="12" className="mt-5 mx-auto">
					<h2 className="text-center w-100 d-flex justify-content-center d-flex flex-wrap">
						<p
							style={{ color: "#1f0054", fontWeight: "600", whiteSpace: "nowrap" }}
							className="m-0 p-0"
						>
							Save Time,
						</p>
						<p
							style={{ color: "#fdbc58", fontWeight: "600", whiteSpace: "nowrap" }}
							className="m-0 p-0"
						>
							&nbsp;Save Money!
						</p>
					</h2>
				</Col>
				<Col xs="12" sm="12" md="12" lg="6" xl="6" className="mt-2">
					<CompactCard removeBottomHeader>
						<h3
							className="text-center font-weight-bold"
							style={{ marginTop: "-25px" }}
						>
							Employee Login
						</h3>
						<div className="px-4">
							<Row className="flex-column mt-4">
								<TitleLabel className="text-center">Email/Mobile</TitleLabel>
								<OutputLabel>
									<Controller
										as={
											<FormTextInput
												name="userName"
												type="input"
												placeholder="Your Email Id/Mobile No."
												error={errors && errors.userName}
											/>
										}
										name="userName"
										control={control}
									/>
									{!!errors?.userName && (
										<Error style={{ marginTop: "5px" }}>{errors?.userName.message}</Error>
									)}
								</OutputLabel>
							</Row>
							<Row className="flex-column mt-3">
								<TitleLabel className="text-center">Password</TitleLabel>
								<OutputLabel>
									<Controller
										as={
											<FormTextInput
												type={passwordShown ? "text" : "password"}
												name="password"
												defaultValue=""
												placeholder="Your Password"
												error={errors && errors.password}
											/>
										}
										name="password"
										control={control}
									/>
									<FormTextIcon>
										{passwordShown ? (
											<i
												className="fa fa-eye-slash"
												onClick={togglePasswordVisibility}
											></i>
										) : (
											<i className="fa fa-eye" onClick={togglePasswordVisibility}></i>
										)}
									</FormTextIcon>
									{!!errors?.password && (
										<Error style={{ marginTop: "5px" }}>{errors?.password.message}</Error>
									)}
								</OutputLabel>
							</Row>
							<Row>
								<Col
									sm="12"
									md="12"
									lg="12"
									xl="12"
									xs="12"
									className="d-flex justify-content-center mt-5 mb-3"
								>
									<Button buttonStyle="outline-solid" borderRadius="5px">
										Submit
									</Button>
								</Col>
							</Row>
						</div>
					</CompactCard>
				</Col>
			</RowTag>
		</Form>
	);
};

const TitleLabel = styled.label`
	font-size: 15px;
	font-weight: bold;
`;
const OutputLabel = styled.label`
	font-size: 18px;
	font-weight: bold;
	color: #51516f;
`;

const RowTag = styled(Row)`
	background-repeat: no-repeat;
	background-position: top right;
	background-size: 100% 100%;
	background-image: url("/assets/images/landing-page/bg-2.png");
`;
