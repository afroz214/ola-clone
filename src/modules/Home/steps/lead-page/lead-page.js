import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Textbox, Button, Error, Label } from "components";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { numOnly } from "utils";
import { yupResolver } from "@hookform/resolvers/yup";

// validation schema
const yupValidate = yup.object({
	email: yup
		.string()
		.email("Please enter valid email id")
		.min(2, "Minimum 2 chars required")
		.max(50, "Must be less than 50 chars")
		.required("Email id is required"),
	mobile_no: yup
		.string()
		.required("Mobile No. is required")
		.matches(/^[7-9][0-9]{9}$/, "Must be only digits")
		.min(10, "Mobile No. should be 10 digits")
		.max(10, "Mobile No. should be 10 digits"),
	last_name: yup
		.string()
		.required("Last Name is required")
		.min(2, "Minimum 2 chars required")
		.max(50, "Must be less than 50 chars")
		.matches(/^([A-Za-z\s])+$/, "Must contain only alphabets"),
	first_name: yup
		.string()
		.required("First Name is required")
		.matches(/^([A-Za-z\s])+$/, "Must contain only alphabets")
		.min(2, "Minimum 2 chars required")
		.max(50, "Must be less than 50 chars"),
});

export const LeadPage = () => {
	const { handleSubmit, register, errors } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});
	const handleChange = () => {};

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="ml-4 my-4 w-100">
			<Row className="text-center w-100">
				<div className="mt-4 d-flex flex-column justify-content-center w-100">
					<h4 className="text-center w-100">Enter Details.</h4>
				</div>
			</Row>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Row className="w-100 d-flex no-wrap mt-5">
					<Col sm="12" md="6" lg="6" xl="6">
						<div className="w-100">
							<Textbox
								lg
								type="text"
								id="first_name"
								fieldName="First Name"
								name="first_name"
								placeholder=" "
								ref={register}
								onChange={handleChange}
								error={errors?.first_name}
							/>
							{!!errors.first_name && <Error style={{marginTop:'-20px'}}>{errors.first_name.message}</Error>}
						</div>
					</Col>
					<Col sm="12" md="6" lg="6" xl="6">
						<div className="w-100">
							<Textbox
								lg
								type="text"
								id="last_name"
								fieldName="Last Name"
								name="last_name"
								placeholder=" "
								ref={register}
								onChange={handleChange}
								error={errors?.last_name}
							/>
							{!!errors.last_name && <Error style={{marginTop:'-20px'}}>{errors.last_name.message}</Error>}
						</div>
					</Col>
					<Col sm="12" md="12" lg="12" xl="12">
						<div className="w-100">
							<Textbox
								lg
								type="tel"
								id="mobile_no"
								fieldName="Mobile No."
								name="mobile_no"
								placeholder=" "
								ref={register}
								onChange={handleChange}
								error={errors?.mobile_no}
								maxLength="10"
								onKeyDown={numOnly}
							/>
							{!!errors.mobile_no && <Error style={{marginTop:'-20px'}}>{errors.mobile_no.message}</Error>}
						</div>
					</Col>
					<Col sm="12" md="12" lg="12" xl="12">
						<div className="w-100">
							<Textbox
								lg
								type="text"
								id="email"
								fieldName="Email"
								name="email"
								placeholder=" "
								ref={register}
								onChange={handleChange}
								error={errors?.email}
							/>
							{!!errors.email && <Error style={{marginTop:'-20px'}}>{errors.email.message}</Error>}
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
