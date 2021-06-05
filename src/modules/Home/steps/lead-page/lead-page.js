import React, { useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Textbox, Button, Error, Label } from "components";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { numOnly } from "utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { set_temp_data, Enquiry, clear } from "modules/Home/home.slice";

// validation schema
const yupValidate = yup.object({
	emailId: yup
		.string()
		.email("Please enter valid email id")
		.min(2, "Minimum 2 chars required")
		.max(50, "Must be less than 50 chars")
		.required("Email id is required"),
	mobileNo: yup
		.string()
		.required("Mobile No. is required")
		.matches(/^[7-9][0-9]{9}$/, "Must be only digits")
		.min(10, "Mobile No. should be 10 digits")
		.max(10, "Mobile No. should be 10 digits"),
	lastName: yup
		.string()
		.required("Last Name is required")
		.min(2, "Minimum 2 chars required")
		.max(50, "Must be less than 50 chars")
		.matches(/^([A-Za-z\s])+$/, "Must contain only alphabets"),
	firstName: yup
		.string()
		.required("First Name is required")
		.matches(/^([A-Za-z\s])+$/, "Must contain only alphabets")
		.min(2, "Minimum 2 chars required")
		.max(50, "Must be less than 50 chars"),
});

export const LeadPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { temp_data, enquiry_id } = useSelector((state) => state.home);
	console.log(enquiry_id?.enquiryId);

	const { handleSubmit, register, errors } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});
	const handleChange = () => {};

	//onSuccess
	useEffect(() => {
		if (enquiry_id?.enquiryId) {
			history.push(`/journey-type?enquiry_id=${enquiry_id?.enquiryId}`);
			dispatch(set_temp_data({enquiry_id: enquiry_id?.enquiryId}))
		}

		return () => {
			dispatch(clear("enquiry_id"));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [enquiry_id]);

	const onSubmit = (data) => {
		console.log(data);
		dispatch(set_temp_data(data));
		dispatch(Enquiry(data));
	};

	return (
		<div className="ml-4 my-4 w-100 mx-auto">
			<Row className="text-center w-100 mx-auto d-flex justify-content-center">
				<div className="mt-4 d-flex justify-content-center w-100 mx-auto">
					<h4 className="text-center w-100 mx-auto d-flex justify-content-center">
						Please Enter Your Details
					</h4>
				</div>
			</Row>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Row className="w-100 d-flex no-wrap mt-5 mx-auto">
					<Col sm="12" md="6" lg="6" xl="6">
						<div className="w-100">
							<Textbox
								lg
								type="text"
								id="firstName"
								fieldName="First Name"
								name="firstName"
								placeholder=" "
								register={register}
								onChange={handleChange}
								error={errors?.firstName}
							/>
							{!!errors.firstName && (
								<Error style={{ marginTop: "-20px" }}>{errors.firstName.message}</Error>
							)}
						</div>
					</Col>
					<Col sm="12" md="6" lg="6" xl="6">
						<div className="w-100">
							<Textbox
								lg
								type="text"
								id="lastName"
								fieldName="Last Name"
								name="lastName"
								placeholder=" "
								register={register}
								onChange={handleChange}
								error={errors?.lastName}
							/>
							{!!errors.lastName && (
								<Error style={{ marginTop: "-20px" }}>{errors.lastName.message}</Error>
							)}
						</div>
					</Col>
					<Col sm="12" md="12" lg="12" xl="12">
						<div className="w-100">
							<Textbox
								lg
								type="tel"
								id="mobileNo"
								fieldName="Mobile No."
								name="mobileNo"
								placeholder=" "
								register={register}
								onChange={handleChange}
								error={errors?.mobileNo}
								maxLength="10"
								onKeyDown={numOnly}
							/>
							{!!errors.mobileNo && (
								<Error style={{ marginTop: "-20px" }}>{errors.mobileNo.message}</Error>
							)}
						</div>
					</Col>
					<Col sm="12" md="12" lg="12" xl="12">
						<div className="w-100">
							<Textbox
								lg
								type="text"
								id="emailId"
								fieldName="Email"
								name="emailId"
								placeholder=" "
								register={register}
								onChange={handleChange}
								error={errors?.emailId}
							/>
							{!!errors.emailId && (
								<Error style={{ marginTop: "-20px" }}>{errors.emailId.message}</Error>
							)}
						</div>
					</Col>
					<Col
						sm="12"
						md="12"
						lg="12"
						xl="12"
						className="d-flex justify-content-center mt-3"
					>
						<Button
							className=""
							buttonStyle="outline-solid"
							hex1={"#bdd400"}
							hex2={"#bdd400"}
							borderRadius={"20px"}
							shadow={"none"}
							type="submit"
						>
							Proceed
						</Button>
					</Col>
				</Row>
			</Form>
		</div>
	);
};

const StyledCol = styled(Col)`
	@media (max-width: 992px) {
		display: flex;
		justify-content: center;
	}
`;
