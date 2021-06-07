import React, { useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { TextInput, Button, ErrorMsg, Label, BackButton } from "components";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { set_temp_data } from "modules/Home/home.slice";
import swal from "sweetalert";

// .matches(
// 	/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/,
// 	"Invalid Registration Number"
// )

export const Registration = ({ enquiry_id }) => {
	/*---------------- back button---------------------*/
	const back = () => {
		history.push(`/lead-page`);
	};
	/*----------x----- back button-------x-------------*/
	const history = useHistory();
	const dispatch = useDispatch();
	const { temp_data } = useSelector((state) => state.home);

	// validation schema
	const yupValidate = yup.object({
		// ...(val && { regNo: yup.string().required("Registration No. is required") }),
	});

	const { handleSubmit, register, errors, setValue, watch } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});

	//prefill
	useEffect(() => {
		if (temp_data?.regNo) {
			setValue("regNo", temp_data?.regNo);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [temp_data]);

	const handleChange = () => {};
	const regNo = watch("regNo");
	const onSubmit = (journeyType) => {
		if (
			(Number(journeyType) === 1 && regNo) ||
			Number(journeyType) === 2 ||
			Number(journeyType) === 3
		) {
			Number(journeyType) !== 1
				? dispatch(set_temp_data({ journeyType, regNo: null }))
				: dispatch(set_temp_data({ journeyType, regNo }));
			history.push(
				`/vehicle-type?enquiry_id=${temp_data?.enquiry_id || enquiry_id}`
			);
		} else {
			swal("Please fill all the details", "", "error");
		}
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
			<div className="my-4 w-100 mx-auto d-flex flex-column align-content-center ElemFade">
				<Row className="text-center w-100 mx-auto">
					<div className="mt-4 d-flex flex-column align-content-center w-100 mx-auto">
						<h4 className="text-center w-100">
							Smart choice, We'll make it quick and easy for you.
						</h4>
						<h3 className="text-center w-100 mt-1">
							Let's begin with your vehicle registration number
						</h3>
					</div>
				</Row>
				<StyledRow className="w-100 d-flex no-wrap mt-5 mx-auto justify-content-center">
					<StyledCol sm="12" md="12" lg="9" xl="9" className="p-0 my-2 mx-auto">
						<div className="w-100 mx-auto d-flex flex-column align-content-center">
							<TextInput
								lg
								type="text"
								id="regNo"
								name="regNo"
								placeholder=" "
								ref={register}
								onChange={handleChange}
								error={errors?.regNo}
							/>
							<Label lg htmlFor="regNo">
								Enter your Vehicle Number
							</Label>
							{!!errors.regNo ? (
								<ErrorMsg>{errors.regNo.message}</ErrorMsg>
							) : (
								<Form.Text className="text-muted">
									<text style={{ color: "#bdbdbd" }}>e.g MH-01-AR-7294</text>
								</Form.Text>
							)}
						</div>
					</StyledCol>
					<StyledCol
						sm="12"
						md="12"
						lg="2"
						xl="2"
						className="p-0 my-2 mx-auto d-flex justify-content-center"
					>
						<Button
							buttonStyle="outline-solid"
							hex1="#bdd400"
							hex2="#bdd400"
							borderRadius="5px"
							onClick={() => onSubmit(1)}
							height="60px"
							type="submit"
						>
							Proceed
						</Button>
					</StyledCol>
				</StyledRow>
				<Row className="w-100 d-flex no-wrap mt-2 justify-content-center mx-auto">
					<Col
						sm="12"
						md="12"
						lg="12"
						xl="12"
						className="text-center mx-auto d-flex justify-content-center"
					>
						<h4 className="font-weight-bolder text-center">OR</h4>
					</Col>
					<Col
						sm="12"
						md="12"
						lg="12"
						xl="12"
						className="text-center mt-4 d-flex flex-wrap justify-content-center p-0 my-2 mx-auto"
					>
						<Button
							className="mx-2 my-2"
							buttonStyle="outline-solid"
							hex1="#006400"
							hex2="#228B22"
							onClick={() => onSubmit(2)}
							borderRadius="5px"
							type="submit"
						>
							<label style={{ cursor: "pointer" }} className="p-0 m-0">
								Proceed without no.
							</label>
						</Button>
						<Button
							className="mx-2 my-2"
							buttonStyle="outline-solid"
							hex1="#006400"
							hex2="#228B22"
							borderRadius="5px"
							onClick={() => onSubmit(3)}
							type="submit"
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

const StyledRow = styled(Row)`
	@media (max-width: 992px) {
		display: flex !important;
		flex-direction: column !important;
		align-content: center !important;
		width: 100% !important;
		margin-left: auto !important;
		margin-right: auto !important;
		flex-wrap: no-wrap !important;
	}
`;
