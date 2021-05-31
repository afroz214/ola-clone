import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="13"
								height="13"
								viewBox="0 0 13 13"
							>
								<g transform="translate(-.5 -.5)">
									<g transform="translate(1 1)">
										<circle
											cx="6"
											cy="6"
											r="6"
											fill="none"
											stroke="#333"
										></circle>
										<path
											fill="#333"
											d="M7.359 8.409h1.025v-.06c0-1.359 1.615-.983 1.615-2.6A1.79 1.79 0 0 0 8.025 4 2 2 0 0 0 6 5.265l1.06.453a.951.951 0 0 1 .914-.684.749.749 0 0 1 .826.726c0 .966-1.444.649-1.444 2.589zm.513 2.354a.752.752 0 1 0-.752-.752.72.72 0 0 0 .751.752z"
											data-name="?-copy"
											transform="translate(-2.056 -1.37)"
										></path>
									</g>
								</g>
							</svg>
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
