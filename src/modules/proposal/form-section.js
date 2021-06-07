import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompactCard as Card, Button } from "components";
import { scrollToTargetAdjusted } from "utils";
import { Button as Btn, Row, Col } from "react-bootstrap";
import { Label, ShiftingLabel, SubmitDiv } from "./style.js";
import "./bootstrapMod.scss";
import "react-datepicker/dist/react-datepicker.css";
import _ from "lodash";
import { useHistory } from "react-router";
import swal from "sweetalert";
import moment from "moment";

/*---cards---*/
import OwnerCard from "./cards/owner-card";
import NomineeCard from "./cards/nominee-card";
import VehicleCard from "./cards/vehicle-card";
import PolicyCard from "./cards/policy-card";
/*---summary---*/
import SummaryOwner from "./summary/summary-owner";
import SummaryProposal from "./summary/summary-proposal";
import SummaryVehicle from "./summary/summary-vehicle";

const FormSection = (props) => {
	const history = useHistory();

	/*------------- Dropout-status -----------------*/
	const [dropout, setDropout] = useState(false);
	useEffect(() => {
		if (props.dropout === "true") {
			setDropout(true);
		}
	}, [props.dropout]);
	/*------x------ Dropout-status -------x---------*/

	/*---------------------form data--------------------*/
	//saving the proposal card data in state
	const [owner, setOwner] = useState({});
	const [nominee, setNominee] = useState({});
	const [vehicle, setVehicle] = useState({});
	const [prepolicy, setPrepolicy] = useState({});
	/*-----------------x---form data-x------------------*/

	/*-----------------Switchers (form/summary) ------------------------*/
	const [formOwner, setFormOwner] = useState("form");
	const [formNominee, setFormNominee] = useState("hidden");
	const [formVehicle, setFormVehicle] = useState("hidden");
	const [formPrepolicy, setFormPrepolicy] = useState("hidden");
	/*-----------------Switchers section end--------------------------*/

	/*--------------------form switchers----------------------------*/
	useEffect(() => {
		if (formOwner === "form") {
			setFormNominee("hidden");
			setFormVehicle("hidden");
			setFormPrepolicy("hidden");
		}
		if (formNominee === "form") {
			setFormVehicle("hidden");
			setFormPrepolicy("hidden");
		}
		if (formVehicle === "form") {
			setFormPrepolicy("hidden");
		}
	}, [formOwner, formNominee, formVehicle, formPrepolicy]);
	/*---------x----------form switchers----------------x-----------*/

	/*--------------------form onSubmits----------------------------*/
	//owner
	const onSubmitOwner = (data) => {
		setOwner(data);
	};

	//switch(owner -> nominee)
	useEffect(() => {
		if (!_.isEmpty(owner)) {
			setFormOwner("summary");
			setFormNominee("form");
		}
	}, [owner]);

	//nominee
	const onSubmitNominee = (data) => {
		setNominee(data);
	};

	//switch(nominee -> vehicle)
	useEffect(() => {
		if (!_.isEmpty(nominee)) {
			setFormNominee("summary");
			setFormVehicle("form");
		}
	}, [nominee]);

	//vehicle
	const onSubmitVehicle = (data) => {
		setVehicle(data);
	};

	//switch(vehicle -> pre-policy)
	useEffect(() => {
		if (!_.isEmpty(vehicle)) {
			setFormVehicle("summary");
			setFormPrepolicy("form");
		}
	}, [vehicle]);

	//pre-policy
	const onSubmitPrepolicy = (data) => {
		setPrepolicy(data);
		console.log(data);
	};

	//switch(pre-policy -> review & submit)
	useEffect(() => {
		if (!_.isEmpty(prepolicy)) {
			setFormPrepolicy("summary");
		}
	}, [prepolicy]);
	/*---------x----------form onSubmits----------------x-----------*/

	/*--------------------Review & Submit Section End-------------------*/
	const [finalSubmit, setFinalSubmit] = useState(true);
	useEffect(() => {
		if (
			[formOwner, formNominee, formVehicle, formPrepolicy].every(
				(elem) => elem === "summary"
			)
		) {
			setFinalSubmit(true);
		} else {
			setFinalSubmit(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formOwner, formNominee, formVehicle, formPrepolicy]);

	const onFinalSubmit = () => {
		console.log("submitted");
	};
	//to store checkbox value
	const [terms_condition, setTerms_condition] = useState(false);
	const FinalSubmit = (
		<Row style={{ padding: "10.5px" }}>
			<Col xl="12" lg="12" md="12" sm="12">
				<SubmitDiv>
					<label className="checkbox-container">
						<input
							className="bajajCheck"
							defaultChecked={false}
							name="accept"
							type="checkbox"
							value={terms_condition}
							onChange={(e) => {
								setTerms_condition(e.target.checked);
							}}
						/>
						<span className="checkmark"></span>
					</label>
					<p className="privacyPolicy">
						I confirm all the details shared are correct and accurate as per my
						knowledge and I agree with all the T&C. I also declare that the
						information provided above is true and accept that if it is found to be
						false, it may impact claims. I agree any changes to the details post
						payment might require additional payment. OLA Pvt. Ltd. (including its
						representatives) shall not be held liable for any changes due to incorrect
						information.
					</p>
				</SubmitDiv>
			</Col>
			<Col
				sm="12"
				md="12"
				lg="12"
				xl="12"
				className="d-flex justify-content-center"
			>
				<Button
					type="submit"
					buttonStyle="outline-solid"
					hex1={"#4ca729"}
					hex2={"#4ca729"}
					borderRadius="5px"
					color="white"
					onClick={onFinalSubmit}
				>
					<text
						style={{
							fontSize: "15px",
							padding: "-20px",
							margin: "-20px -5px -20px -5px",
							fontWeight: "400",
						}}
					>
						{"Review & Submit"}
					</text>
				</Button>
			</Col>
		</Row>
	);
	/*---------------x----Review & Submit Section End----x--------------*/

	/*---------------------------card titles------------------------*/
	//Card Title Function
	const titleFn = (titleName, stateName) => {
		return (
			<div style={{ display: "flex", width: "100%", marginTop: "4px" }}>
				<Label style={{ width: "90%" }}>{titleName}</Label>
				<div style={{ display: "flex", justifyContent: "flex-end" }}>
					<Btn
						size="sm"
						style={{ background: "transparent", border: "none" }}
						variant="light"
						onClick={() => {
							stateName("form");
							setDropout(false);
						}}
					>
						<i style={{ fontSize: "13px", color: "#98FB98", fontWeight: "100" }}>
							EDIT
						</i>
					</Btn>
				</div>
			</div>
		);
	};
	//owner
	const titleOwnerSummary = titleFn("Owner Details", setFormOwner);
	//nominee
	const titleNomineeSummary = titleFn("Nominee Details", setFormNominee);
	//vehicle
	const titleVehicleSummary = titleFn("Vehicle Details", setFormVehicle);
	//pre-policy
	const titlePrepolicySummary = titleFn(
		"Previous Policy Details",
		setFormPrepolicy
	);

	/*--------------- Handle-page-scroll -------------*/
	//using html to scroll instead of refs
	useEffect(() => {
		if (formOwner === "form") {
			scrollToTargetAdjusted("owner", 45);
		}
		if (formNominee === "form") {
			scrollToTargetAdjusted("nominee", 45);
		}
		if (formVehicle === "form") {
			scrollToTargetAdjusted("vehicle", 45);
		}
		if (formPrepolicy === "form") {
			scrollToTargetAdjusted("prepolicy", 45);
		}
		//scroll to t&c checkbox
		if (
			[formOwner, formNominee, formVehicle, formPrepolicy].every(
				(elem) => elem === "summary"
			)
		) {
			scrollToTargetAdjusted("review-submit");
		}

		//eslint-disable-next-line
	}, [formOwner, formNominee, formVehicle, formPrepolicy]);
	/*-------x------- Handle-page-scroll ------x------*/

	return (
		<div>
			{/*--------------------Proposal Form-----------------------------------*/}
			<Card
				title={
					formOwner === "form" ? (
						<ShiftingLabel>Owner Details</ShiftingLabel>
					) : (
						titleOwnerSummary
					)
				}
				removeBottomHeader={true}
				image={"/assets/images/auto-car.jpg"}
				imageStyle={{
					position: "relative",
					top: "6px",
					left: "20px",
				}}
				imageTagStyle={{
					boxShadow: "1.753px -3.595px 35px #d9d8d8",
					borderRadius: "50%",
					border: "1px solid #495057",
				}}
				id="owner"
			>
				{formOwner === "form" ? (
					<div className="ElemFade m-0 p-1">
						<OwnerCard
							onSubmitOwner={onSubmitOwner}
							owner={owner}
							// PrefillProposar={PrefillProposar}
							// FetchedData={FetchedData}
							// buttonstate={buttonProposal}
							// TravelPurpose={TravelPurpose}
						/>
					</div>
				) : (
					<SummaryOwner summary={owner} />
				)}
			</Card>
			{/*---------------------------End of Proposal Card------------------------*/}
			{/*---------------------------Nominee Details Card-----------------------*/}
			<Card
				title={
					formNominee === "summary" ? (
						titleNomineeSummary
					) : (
						<Label>Nominee Details</Label>
					)
				}
				removeBottomHeader={true}
				marginTop={formNominee === "hidden" ? "5px" : ""}
				id="nominee"
			>
				<div
					style={
						formNominee === "hidden"
							? { maxHeight: "0", transition: "max-height 0.4s ease-in-out" }
							: {
									maxHeight: "100%",
									transition: "max-height 0.4s ease-in-out",
							  }
					}
				>
					{formNominee === "form" ? (
						<div className="ElemFade m-0 p-1">
							<NomineeCard
								onSubmitNominee={onSubmitNominee}
								nominee={nominee}
								// buttonstate={buttonNominee}
								// FetchedData={FetchedData}
								// traveller={prefillTraveller}
								// IcId={
								// 	policy?.selected_plan?.ic_id
								// 		? policy?.selected_plan?.ic_id
								// 		: policy?.ic_id
								// }
							/>
						</div>
					) : formNominee === "summary" ? (
						<div className="m-0 p-1">
							<SummaryProposal data={nominee} />
						</div>
					) : (
						<noscript />
					)}
				</div>
			</Card>
			{/*---------------x----End of Nominee Details Card--------x-----------*/}
			{/*---------------------------Vehicle Details Card-----------------------*/}
			<Card
				title={
					formVehicle === "summary" ? (
						titleVehicleSummary
					) : (
						<Label>Vehicle Details</Label>
					)
				}
				removeBottomHeader={true}
				marginTop={formVehicle === "hidden" ? "5px" : ""}
				id="vehicle"
			>
				<div
					style={
						formVehicle === "hidden"
							? { maxHeight: "0", transition: "max-height 0.4s ease-in-out" }
							: {
									maxHeight: "100%",
									transition: "max-height 0.4s ease-in-out",
							  }
					}
				>
					{formVehicle === "form" ? (
						<div className="ElemFade m-0 p-1">
							<VehicleCard
								onSubmitVehicle={onSubmitVehicle}
								vehicle={vehicle}
								// buttonstate={buttonNominee}
								// FetchedData={FetchedData}
								// traveller={prefillTraveller}
								// IcId={
								// 	policy?.selected_plan?.ic_id
								// 		? policy?.selected_plan?.ic_id
								// 		: policy?.ic_id
								// }
							/>
						</div>
					) : formVehicle === "summary" ? (
						<div className="m-0 p-1">
							<SummaryVehicle summary={vehicle} />
						</div>
					) : (
						<noscript />
					)}
				</div>
			</Card>
			{/*---------------x----End of Vehicle Details Card--------x-----------*/}
			{/*---------------------------Policy Details Card-----------------------*/}
			<Card
				title={
					formPrepolicy === "summary" ? (
						titlePrepolicySummary
					) : (
						<Label>Previous Policy Details</Label>
					)
				}
				removeBottomHeader={true}
				marginTop={formPrepolicy === "hidden" ? "5px" : ""}
				id="prepolicy"
			>
				<div
					style={
						formPrepolicy === "hidden"
							? { maxHeight: "0", transition: "max-height 0.4s ease-in-out" }
							: {
									maxHeight: "100%",
									transition: "max-height 0.4s ease-in-out",
							  }
					}
				>
					{formPrepolicy === "form" ? (
						<div className="ElemFade m-0 p-1">
							<PolicyCard
								onSubmitPrepolicy={onSubmitPrepolicy}
								prepolicy={prepolicy}
								// buttonstate={buttonNominee}
								// FetchedData={FetchedData}
								// traveller={prefillTraveller}
								// IcId={
								// 	policy?.selected_plan?.ic_id
								// 		? policy?.selected_plan?.ic_id
								// 		: policy?.ic_id
								// }
							/>
						</div>
					) : formPrepolicy === "summary" ? (
						<div className="m-0 p-1">
							<SummaryProposal data={prepolicy} />
						</div>
					) : (
						<noscript />
					)}
				</div>
			</Card>
			{/*---------------x----End of Policy Details Card--------x-----------*/}
			{/*---------------x----Review & Submit--------x-----------*/}
			<div id="review-submit">{finalSubmit && FinalSubmit}</div>
			{/*---------------x----End of Review & Submit--------x-----------*/}
		</div>
	);
};

export default FormSection;
