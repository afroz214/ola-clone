import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

import { useForm, Controller } from "react-hook-form";
import backButton from "../../../../assets/img/back-button.png";
import { Tile, ErrorMsg } from "components";
import Popup from "../../../../components/Popup/Popup";
import "./preInsurerPopup.css";
import DateInput from "../../../proposal/DateInput";
const PrevInsurerPopup = ({ show, onClose }) => {
	const { handleSubmit, register, watch, control, errors, setValue } = useForm({
		// resolver: yupResolver(yupValidate),
		// mode: "all",
		// reValidateMode: "onBlur",
	});
	const [step, setStep] = useState(1);
	const model = watch("expiry");
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

	useEffect(() => {
		if (model) {
			onClose(false);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [model]);
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
											name={"model"}
											value={index}
											height={"50px"}
											width={"90px"}
											setValue={setValue}
											Selected={model}
										/>
									</Col>
								))}
							</Row>
						</TileConatiner>
						<TabContinueWrap>
							<div onclick="withoutExpiryDate()">
								I know the Policy expiry details
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
						<RegiHeading>
							Is there any claim made in your previous policy term?
						</RegiHeading>
						<TileConatiner>
							<Row
								className="YesNoToggle"
								style={{
									justifyContent: "Center",
									marginRight: "50px",
								}}
							>
								{BooleanData.map((item, index) => (
									<Col
										xs="6"
										sm="6"
										md="4"
										lg="3"
										xl="3"
										className="d-flex justify-content-center"
										onClick={() => {
											setStep(step + 1);
										}}
									>
										<Tile
											text={item?.name}
											id={index}
											register={register}
											name={"model"}
											value={index}
											height={"50px"}
											width={"130px"}
											setValue={setValue}
											Selected={model}
										/>
									</Col>
								))}
							</Row>
						</TileConatiner>
						<div class="col-md-12 text-center">
							<div
								class="popupSubHead ncsSubHeadNo"
								style={{
									display: "block",
									marginTop: "30px",
									marginBottom: "30px",
								}}
							>
								Please select your existing NCB
							</div>
							<div
								class="vehRadioWrap ncsPercentCheck"
								style={{ display: "block" }}
							>
								<input
									type="radio"
									id="existinNcb0"
									name="existinNcb"
									value="0%"
								/>
								<label for="existinNcb0">0%</label>
								<input
									type="radio"
									id="existinNcb20"
									name="existinNcb"
									value="20%"
								/>
								<label for="existinNcb20">20%</label>
								<input
									type="radio"
									id="existinNcb25"
									name="existinNcb"
									value="25%"
								/>
								<label for="existinNcb25">25%</label>
								<input
									type="radio"
									id="existinNcb35"
									name="existinNcb"
									value="35%"
								/>
								<label for="existinNcb35">35%</label>
								<input
									type="radio"
									id="existinNcb45"
									name="existinNcb"
									value="45%"
								/>
								<label for="existinNcb45">45%</label>
								<input
									type="radio"
									id="existinNcb50"
									name="existinNcb"
									value="50%"
								/>
								<label for="existinNcb50">50%</label>
							</div>
						</div>
					</ModelWrap>
				</Row>
			</Body>
		</>
	);

	const Page3 = (
		<>
			<Body>
				<BackBtn
					onClick={() => {
						setStep(step - 1);
					}}
				>
					<img src={backButton} />
				</BackBtn>
				<Row>
					<ModelWrap>
						<RegiHeading>When is your previous policy expiring?</RegiHeading>
						<TileConatiner>
							<Row
								style={{
									justifyContent: "Center",
									marginRight: "50px",
								}}
							>
								<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
									<div className="py-2 dateTimeOne">
										<Controller
											control={control}
											name="expiry"
											render={({ onChange, onBlur, value, name }) => (
												<DateInput
													minDate={false}
													value={value}
													name={name}
													onChange={onChange}
													ref={register}
												/>
											)}
										/>
										{!!errors.expiry && (
											<ErrorMsg fontSize={"12px"}>
												{errors.expiry.message}
											</ErrorMsg>
										)}
									</div>
								</Col>
							</Row>
						</TileConatiner>
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
			content={step === 1 ? Page1 : step === 2 ? Page2 : Page3}
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
