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
import VehicleCard from './cards/vehicle-card';
/*---summary---*/
import SummaryOwner from "./summary/summary-owner";
import SummaryProposal from "./summary/summary-proposal";
import SummaryVehicle from './summary/summary-vehicle';

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
		console.log(data);
	};

	//switch(vehicle -> pre-policy)
	useEffect(() => {
		if (!_.isEmpty(vehicle)) {
			setFormVehicle("summary");
			setFormPrepolicy("form");
		}
	}, [vehicle]);
	/*---------x----------form onSubmits----------------x-----------*/

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
				image={"/assets/images/laxmiImg.png"}
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
				id="proposer"
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
		</div>
	);
};

export default FormSection;
