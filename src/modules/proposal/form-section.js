import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompactCard as Card, Button } from "../../components";
import { scrollToTargetAdjusted } from "../../utils";
import { Button as Btn, Row, Col } from "react-bootstrap";
import { Label, ShiftingLabel, SubmitDiv } from "./style.js";
import "./bootstrapMod.scss";
import "react-datepicker/dist/react-datepicker.css";
import _ from "lodash";
import { useHistory } from "react-router";
import swal from "sweetalert";
import moment from "moment";
/*---cards---*/
import OwnerCard from './cards/owner-card';

const FormSection = () => {
	const history = useHistory();
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

	return (
		<div>
			{/*--------------------Proposal Form-----------------------------------*/}
				<Card
					title={
						formOwner === "form" ? (
							<ShiftingLabel>Proposer Details</ShiftingLabel>
						) : (
							// titleOwnerSummary
                            ""
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
								// onSubmit={onSubmit}
								// proposal={proposal}
								// PrefillProposar={PrefillProposar}
								// FetchedData={FetchedData}
								// buttonstate={buttonProposal}
								// TravelPurpose={TravelPurpose}
							/>
						</div>
					) : (
						// <SummaryProposal data={proposalSummary} />
                        <noscript />
					)}
				</Card>
			{/*---------------------------End of Proposal Card------------------------*/}
		</div>
	);
};

export default FormSection;
