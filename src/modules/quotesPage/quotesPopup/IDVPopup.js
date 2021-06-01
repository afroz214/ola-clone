import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import tooltip from "../../../assets/img/tooltip.svg";
import CustomTooltip from "../../../components/tooltip/CustomTooltip";
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
							<CustomTooltip
								rider="true"
								id="RiderInbuilt__Tooltip"
								place={"bottom"}
								customClassName="mt-3 riderPageTooltip "
							>
								<img
									data-tip="<h3 >Insured Value (IDV)</h3> <div>Insured Value (IDV) Text</div>"
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
