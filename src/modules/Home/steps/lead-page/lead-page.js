import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Textbox, Button, ErrorMsg, Label, Error } from "components";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { numOnly } from 'utils';

export const LeadPage = () => {
	const { handleSubmit, register, errors } = useForm();
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
							{!!errors.first_name && <ErrorMsg>{errors.first_name.message}</ErrorMsg>}
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
							{!!errors.last_name && <ErrorMsg>{errors.last_name.message}</ErrorMsg>}
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
							{!!errors.mobile_no && <ErrorMsg>{errors.mobile_no.message}</ErrorMsg>}
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
							{!!errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
						</div>
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
