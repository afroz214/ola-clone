import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import tooltip from "../../../assets/img/tooltip.svg";
import CustomTooltip from "../../../components/tooltip/CustomTooltip";
import Popup from "../../../components/Popup/Popup";
import "./idvPopup.css";

const NCBPopup = ({ show, onClose, ncb, setNcb }) => {
	const onSubmit = (data) => {
		//setNCB(data);
		onClose(false);
	};
	const content = (
		<>
			<Conatiner>
				<Row>
					<PaymentTermTitle>
						No Claim Bonus (NCB) Value
						<span
							class="cardTooltipSvg"
							data-toggle="popover"
							title=""
							data-content="Insured Value (IDV) Text"
							data-original-title="Insured Value (IDV)"
						>
							<CustomTooltip
								rider="true"
								id="RiderInbuilt__Tooltip"
								place={"bottom"}
								customClassName="mt-3 riderPageTooltip "
							>
								<img
									data-tip="<h3 >No claim Bonus</h3> <div>No claim Bonus Text</div>"
									data-html={true}
									data-for="RiderInbuilt__Tooltip"
									src={tooltip}
									alt="tooltip"
									className="toolTipRiderChild"
								/>
							</CustomTooltip>
						</span>
					</PaymentTermTitle>
					<PopupSubTitle>
						No Claim Bonus or NCB is a reward given by an insurance company to
						an insured for not raising any claim requests during a policy year.
						The NCB discount is applicable on the premium amount.
					</PopupSubTitle>
					<PopupSubHead>Any claims made in your existing policy?</PopupSubHead>
					<div class="vehRadioWrap">
						<input
							type="radio"
							id="claimMadeYes"
							name="claimMade"
							value="yes"
						/>
						<label for="claimMadeYes">Yes</label>
						<input type="radio" id="ownerNo" name="claimMade" value="no" />
						<label for="ownerNo">No</label>
					</div>
					<EligText>
						Since you have made claim in your existing policy, your NCB will be
						reset to 0%
					</EligText>
					<PaymentTermRadioWrap>
						<ApplyButton onClick={() => onSubmit()}>APPLY</ApplyButton>
					</PaymentTermRadioWrap>
				</Row>
			</Conatiner>
		</>
	);
	return (
		<Popup
			height={"auto"}
			width="360px"
			show={show}
			onClose={onClose}
			content={content}
			position="center"
			top="top"
			left="85%"
		/>
	);
};

// PropTypes
NCBPopup.propTypes = {
	show: PropTypes.bool,
	onClose: PropTypes.func,
};

// DefaultTypes
NCBPopup.defaultProps = {
	show: false,
	onClose: () => {},
};

const Conatiner = styled.div`
	padding: 30px;
`;

const PaymentTermTitle = styled.div`
	float: left;
	width: 100%;
	font-family: "Inter-SemiBold";
	font-size: 16px;
	line-height: 20px;
	color: #333;
	padding-bottom: 10px;
	border-bottom: solid 1px #e3e4e8;
`;

const PopupSubTitle = styled.div`
	float: left;
	width: 100%;
	font-family: "Inter-Regular";
	font-size: 14px;
	line-height: 20px;
	color: #333;
	margin-top: 16px;
	margin-bottom: 16px;
`;

const PopupSubHead = styled.div`
	float: left;
	width: 100%;
	font-family: "Inter-SemiBold";
	font-size: 14px;
	line-height: 17px;
	color: #333;
	margin-bottom: 12px;
`;

const ApplyButton = styled.button`
	width: 117px;
	height: 32px;
	border-radius: 4px;
	background-color: #bdd400;
	border: solid 1px #bdd400;
	font-family: "Inter-SemiBold";
	font-size: 15px;
	line-height: 20px;
	color: #000;
	/* text-transform: uppercase; */
	margin: 0;
	float: right;
	border-radius: 50px;
`;

const EligText = styled.div`
	float: left;
	width: 100%;
	border: dashed 1px #000;
	padding: 11px 13px;
	font-size: 14px;
	line-height: 20px;
	color: #000;
	margin-bottom: 24px;
`;

const PaymentTermRadioWrap = styled.div`
	float: left;
	width: 100%;
	margin-bottom: 18px;
`;

export default NCBPopup;
