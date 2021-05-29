import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { TextInput, Button, ErrorMsg, Label, BackButton } from "components";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";

// validation schema
const yupValidate = yup.object({
	reg_no: yup.string().required("Registration No. is required"),
});

// .matches(
// 	/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/,
// 	"Invalid Registration Number"
// )

export const Registration = () => {
	/*---------------- back button---------------------*/
	const back = () => {
		history.push("/lead-page");
	};
	/*----------x----- back button-------x-------------*/
	const history = useHistory();
	const { handleSubmit, register, errors } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});
	const handleChange = () => {};
	const onSubmit = (data) => {
		console.log(data);
		history.push("/vehicle-type");
	};

	return (
		<>
			<div className="backBtn" style={{ paddingBottom: "30px" }}>
				<BackButton type="button" onClick={back} style={{ marginTop: "-20px" }}>
					<svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 24 24">
						<path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
					<text style={{ color: "black" }}>Back</text>
				</BackButton>
			</div>
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
				<Form onSubmit={handleSubmit(onSubmit)}>
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
									error={errors?.reg_no}
								/>
								<Label lg htmlFor="reg_no">
									Enter your Vehicle Number
								</Label>
								{!!errors.reg_no ? (
									<ErrorMsg>{errors.reg_no.message}</ErrorMsg>
								) : (
									<Form.Text className="text-muted">
										<text style={{ color: "#bdbdbd" }}>e.g MH-01-AR-7294</text>
									</Form.Text>
								)}
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
				</Form>
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
							onClick={() => history.push("/car-details")}
						>
							<label style={{ cursor: "pointer" }} className="p-0 m-0">
								Proceed without reg. no.
							</label>
						</Button>
						<Button
							className="mx-2 m-2"
							buttonStyle="outline-solid"
							hex1="#006400"
							hex2="#228B22"
							borderRadius="5px"
							onClick={() => history.push("/car-details")}
						>
							<label style={{ cursor: "pointer" }} className="p-0 m-0">
								New Car? Click Here
							</label>
						</Button>
					</Col>
				</Row>
			</div>
		</>
	);
};

const StyledCol = styled(Col)`
	@media (max-width: 992px) {
		display: flex;
		justify-content: center;
	}
`;
