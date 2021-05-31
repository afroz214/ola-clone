import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

import Popup from "../../../components/Popup/Popup";
import "./idvPopup.css";

const IDVPopup = ({ show, onClose, idv, setIDV }) => {
	const onSubmit = (data) => {
		//setIDV(data);
		onClose(false);
	};
	const content = (
		<>
			<Conatiner>
				<Row>
					<PaymentTermTitle>
						Insured Value (IDV)
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
						IDV is the maximum value that you get in case of total loss or theft
						of your car.
					</PopupSubTitle>
					<PopupSubHead>Choose your IDV value:</PopupSubHead>
					<div class="paymentTermRadioWrap">
						<label class="panel-heading ratioButton IDVRatio">
							{/* radioCheckedColor class */}
							<input
								type="radio"
								class="idvInputClass"
								name="idvRadio4"
								value="recIDV"
							/>
							<span class="checkmark"></span>
							<span class="checkBoxTextIdv">Recommended IDV: ₹ 7,21,655</span>
						</label>
					</div>
					<div class="paymentTermRadioWrap">
						<label class="panel-heading ratioButton IDVRatio">
							<input
								type="radio"
								class="idvInputClass"
								name="idvRadio4"
								value="lowestIDV"
							/>
							<span class="checkmark"></span>
							<span class="checkBoxTextIdv">Lowest IDV: ₹ 9,33, 759</span>
						</label>
					</div>
					<div class="paymentTermRadioWrap">
						<label class="panel-heading ratioButton IDVRatio">
							<input
								type="radio"
								class="idvInputClass"
								name="idvRadio4"
								value="highestIDV"
							/>
							<span class="checkmark"></span>
							<span class="checkBoxTextIdv">Highest IDV: ₹ 13,41,250</span>
						</label>
					</div>
					<div class="paymentTermRadioWrap">
						<label class="panel-heading ratioButton IDVRatio">
							<input
								type="radio"
								class="idvInputClass"
								name="idvRadio4"
								value="ownIDV"
							/>
							<span class="checkmark"></span>
							<span class="checkBoxTextIdv">Choose your own IDV</span>
						</label>
						<div class="paymentTermRadioContent">
							<input
								type="text"
								class="idvInput"
								placeholder="Eg. ₹ 11,21,280"
							/>
							<div class="idvCustmTxt">
								Enter value between ₹ 9,33,759 and ₹ 13,41,250
							</div>
						</div>
					</div>
					<div class="paymentTermRadioWrap">
						<ApplyButton onClick={() => onSubmit()}>APPLY</ApplyButton>
					</div>
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
			top="45%"
			left="65%"
		/>
	);
};

// PropTypes
IDVPopup.propTypes = {
	show: PropTypes.bool,
	onClose: PropTypes.func,
};

// DefaultTypes
IDVPopup.defaultProps = {
	show: false,
	onClose: () => {},
};

const Conatiner = styled.div`
	padding: 20px 30px;
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

export default IDVPopup;
