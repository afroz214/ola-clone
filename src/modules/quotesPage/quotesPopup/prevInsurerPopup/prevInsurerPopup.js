import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
	Row,
	Col,
	Form,
	Button,
	ToggleButtonGroup,
	ToggleButton,
} from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import backButton from "../../../../assets/img/back-button.png";
import { Tile, ErrorMsg, Button as Btn, Error } from "components";
import Popup from "../../../../components/Popup/Popup";
import { set_temp_data } from "modules/Home/home.slice";
import DateInput from "../../../proposal/DateInput";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { toDate } from "utils";
import { subYears, addDays, differenceInDays } from "date-fns";
import _ from "lodash";
import "./preInsurerPopup.scss";
/*---------------date config----------------*/
const CarCheck = subYears(new Date(Date.now() - 86400000), 15);
const policyMin = subYears(new Date(Date.now() - 86400000), 1);
const policyMax = addDays(new Date(Date.now() - 86400000), 45);
/*-----x---------date config-----x----------*/

// validation schema
const yupValidate = yup.object({
	expiry: yup.string().required("Expiry is required field").nullable(),
	//ncb: yup.string().required("Ncb is required field").nullable(),
});

const PrevInsurerPopup = ({ show, onClose }) => {
	const { handleSubmit, register, watch, control, errors, setValue } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});
	const [step, setStep] = useState(1);
	const prevIns = watch("prevInsu");
	console.log(prevIns);
	const DummyData = {
		name: "Bajaj Allianz",
		id: "1",
	};

	const BooleanData = [
		{
			name: "Yes",
			id: "1",
		},
		{
			name: "No",
			id: "0",
		},
	];

	// page 2 logic

	const dispatch = useDispatch();
	const { temp_data } = useSelector((state) => state.home);
	const [noClaimMade, setNoClaimMade] = useState(
		temp_data?.noClaimMade || false
	);

	//prefill

	//NCB logic
	const ncb = watch("ncb");
	const expiry = watch("expiry");

	let a = expiry;
	let b = moment().format("DD-MM-YYYY");

	let diffDays = a && b && differenceInDays(toDate(b), toDate(a));

	useEffect(() => {
		if (diffDays > 90) {
			setValue("ncb", 0);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// useEffect(() => {
	// 	if(temp_data?.noClaimMade){

	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [temp_data?.noClaimMade]);

	const onSubmit = (data) => {
		console.log(data);
		dispatch(
			set_temp_data({
				ncb: noClaimMade ? data?.ncb : "0%",
				expiry: data?.expiry,
				noClaimMade: noClaimMade,
				policyExpired: diffDays > 0 ? true : false,
			})
		);
		onClose(false);
	};

	const handleNoPrev = () => {
		dispatch(
			set_temp_data({
				ncb: "0%",
				expiry: "Not Sure",
				policyExpired: false,
			})
		);
		onClose(false);
	};

	const { ncbList, tempData } = useSelector((state) => state.quoteFilter);
	const myOrderedNcbList = _.sortBy(ncbList, (o) => o.discountRate);

	const Page1 = (
		<>
			<Body>
				<Row>
					<ModelWrap>
						<RegiHeading>Who was your previous insurance provider?</RegiHeading>
						<TileConatiner>
							<Row className="mx-auto">
								{[...Array(24)].map((item, index) => (
									<Col
										xs="4"
										sm="4"
										md="2"
										lg="2"
										xl="2"
										className="d-flex justify-content-center"
										onClick={() => {
											setStep(step + 1);
										}}
									>
										<Tile
											text={DummyData?.name}
											id={index}
											register={register}
											name={"prevInsu"}
											value={index}
											height={"50px"}
											width={"90px"}
											setValue={setValue}
											Selected={prevIns}
										/>
									</Col>
								))}
							</Row>
						</TileConatiner>
						<TabContinueWrap>
							<div onClick={() => handleNoPrev()}>
								I dont know the Policy details
							</div>
						</TabContinueWrap>
					</ModelWrap>
				</Row>
			</Body>
		</>
	);

	const Page2 = (
		<>
			<Body>
				<Row>
					<BackBtn
						onClick={() => {
							setStep(step - 1);
						}}
					>
						<img src={backButton} />
					</BackBtn>
					<ModelWrap>
						<Form onSubmit={handleSubmit(onSubmit)} className="w-100 ncbForm">
							<RegiHeading> Enter Policy Expiration Date</RegiHeading>
							<Col
								xs="12"
								sm="12"
								md="12"
								lg="12"
								xl="12"
								className="w-100 mt-4"
							>
								<div className="py-2 dateTimeThree">
									<Controller
										control={control}
										name="expiry"
										defaultValue={temp_data?.expiry}
										render={({ onChange, onBlur, value, name }) => (
											<DateInput
												maxDate={policyMax}
												minDate={policyMin}
												value={value}
												name={name}
												onChange={onChange}
												ref={register}
												error={errors && errors?.expiry}
											/>
										)}
									/>
									{!!errors?.expiry && (
										<Error className="mt-1">{errors?.expiry?.message}</Error>
									)}
								</div>
								<input ref={register} name="ncb" type="hidden" />
							</Col>
							{watch("expiry") && diffDays < 91 && (
								<>
									<Row className="w-100 d-flex justify-content-center mt-4 mx-auto">
										<RegiHeading>
											{" "}
											Did you make a claim in your existing policy?
										</RegiHeading>
										<div
											className="px-5 d-flex justify-content-center mx-auto "
											style={{ width: "50%" }}
										>
											<Col
												sm="6"
												md="6"
												lg="6"
												xl="6"
												className="d-flex justify-content-center px-5 mt-2"
											>
												<Button
													onClick={() => setNoClaimMade(true)}
													variant={noClaimMade ? "success" : "outline-success"}
												>
													No
												</Button>
											</Col>
											<Col
												sm="6"
												md="6"
												lg="6"
												xl="6"
												className="d-flex justify-content-center px-5 mt-2"
											>
												<Button
													onClick={() => setNoClaimMade(false)}
													variant={!noClaimMade ? "success" : "outline-success"}
												>
													Yes
												</Button>
											</Col>
										</div>
									</Row>
									{noClaimMade && (
										<Row className="w-100 d-flex justify-content-center mt-4 mx-auto">
											<div className="px-5 d-flex flex-column align-content-center mx-auto mt-4">
												<RegiHeading>
													{"Enter your NCB (No Claim Bonus)"}
												</RegiHeading>

												<>
													<div
														class="vehRadioWrap ncsPercentCheck"
														style={{ display: "block" }}
													>
														{myOrderedNcbList.map((item, index) => (
															<>
																<input
																	type="radio"
																	id={item?.ncbId}
																	name="ncb"
																	value={`${item?.discountRate}%`}
																	ref={register}
																	defaultChecked={
																		temp_data?.ncb
																			? temp_data?.ncb ===
																			  `${item?.discountRate}%`
																			: `${item?.discountRate}%` === `0%`
																	}
																/>
																<label for={item?.ncbId}>
																	{item?.discountRate}%
																</label>
															</>
														))}
													</div>
												</>
											</div>
										</Row>
									)}
								</>
							)}
							<Col
								sm="12"
								md="12"
								lg="12"
								xl="12"
								className="d-flex justify-content-center mt-5"
							>
								<Btn
									buttonStyle="outline-solid"
									hex1="#bdd400"
									hex2="#bdd400"
									borderRadius="10px"
									type="submit"
								>
									Proceed
								</Btn>
							</Col>
						</Form>
					</ModelWrap>
				</Row>
			</Body>
		</>
	);

	return (
		<Popup
			height={"auto"}
			width="900px"
			show={show}
			onClose={onClose}
			content={step === 1 ? Page1 : Page2}
			position="bottom"
			backGround="grey"
			outside={true}
			overFlowDisable={true}
		/>
	);
};

// PropTypes
PrevInsurerPopup.propTypes = {
	show: PropTypes.bool,
	onClose: PropTypes.func,
};

// DefaultTypes
PrevInsurerPopup.defaultProps = {
	show: false,
	onClose: () => {},
};

const Body = styled.div`
	padding: 0 15px 15px;
	position: relative;
	margin-top: 30px;
`;
const ModelWrap = styled.div`
	float: left;
	width: 100%;
	padding: 10px 22px 22px 22px;
	min-height: 480px;
	margin-top: 30px;
`;
const RegiHeading = styled.div`
	text-align: center !important;
	font-family: "Inter-SemiBold";
	font-size: 17px;
	line-height: 24px;
	color: #333;
	width: 100%;
	text-align: left;
	margin-top: 12px;
	margin-bottom: 24px;
`;
const TabContinueWrap = styled.div`
	/* float: left; */
	position: absolute;
	bottom: 60px;
	left: 0;
	width: 100%;
	text-align: center;
	margin-top: 0;
	& div {
		font-size: 13px;
		font-family: "Inter-Regular";
		color: #000;
		text-decoration: underline;
		cursor: pointer;
		margin-top: 8px;
	}
`;

const TileConatiner = styled.div`
	position: relative;
	left: 40px;
`;

const BackBtn = styled.div`
	border: none;
	background: none;
	color: #808080;
	font-size: 14px;
	font-family: "Inter-Regular";
	margin-top: 24px;
	margin-left: 62px;
	display: block;
	position: absolute;
	text-transform: uppercase;
`;

export default PrevInsurerPopup;
