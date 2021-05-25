import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import {
	TextInput,
	Button,
	FormWrapper,
	FormGroup,
	ErrorMsg,
	Label,
} from "components";
import { useForm } from "react-hook-form";
import { numOnly } from "utils";
import styled from "styled-components";

export const Registration = () => {
	const { handleSubmit, register, errors } = useForm();
	const handleChange = () => {};
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="ml-4 my-4">
			<Row className="text-center w-100">
				<div className="mt-4 d-flex flex-column justify-content-center w-100">
					<h4 className="text-center w-100">
						Smart choice, We'll make it quick and easy for you.
					</h4>
					<h3 className="text-center w-100">
						Let's begin with your vehicle registration number
					</h3>
				</div>
			</Row>

			<Row className="w-100 d-flex no-wrap mt-5">
				<StyledCol sm="12" md="12" lg="9" xl="9" className="p-0 my-2 mx-2">
					<div className="w-100">
						<TextInput
							lg
							type="text"
							id="reg_no"
							name="reg_no"
							placeholder=" "
							ref={register}
							onChange={handleChange}
							error={errors?.phone}
							maxLength="10"
						/>
						<Label lg htmlFor="reg_no">
							Enter your Car Number
						</Label>
						<Form.Text className="text-muted">
							<text style={{ color: "#bdbdbd" }}>e.g MH-01-AR-7294</text>
						</Form.Text>
						{!!errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
					</div>
				</StyledCol>
				<StyledCol sm="12" md="12" lg="2" xl="2" className="p-0 my-2 mx-2 d-flex">
					<Button
						buttonStyle="outline-solid"
						hex1="#bdd400"
						hex2="#bdd400"
						borderRadius="5px"
						height="60px"
					>
						Proceed
					</Button>
				</StyledCol>
			</Row>
			<Row className="w-100 d-flex no-wrap mt-4">
				<Col sm="12" md="12" lg="12" xl="12" className="text-center ">
					<h4 className="font-weight-bolder">OR</h4>
				</Col>
				<Col
					sm="12"
					md="12"
					lg="12"
					xl="12"
					className="text-center mt-4 d-flex flex-wrap justify-content-center p-0 my-2 mx-2"
				>
					<Button
						className="mx-2 my-2"
						buttonStyle="outline-solid"
						hex1="#006400"
						hex2="#228B22"
						borderRadius="5px"
					>
						<label style={{cursor:'pointer'}} className='p-0 m-0'>Proceed without reg. no.</label>
					</Button>
					<Button
						className="mx-2 m-2"
						buttonStyle="outline-solid"
						hex1="#006400"
						hex2="#228B22"
						borderRadius="5px"
					>
						<label style={{cursor:'pointer'}} className='p-0 m-0'>New Car? Click Here</label>
					</Button>
				</Col>
			</Row>
		</div>
	);
};

const StyledCol = styled(Col)`
	@media (max-width: 992px) {
		display: flex;
		justify-content: center;
	}
`;
