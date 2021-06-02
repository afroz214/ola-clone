import React, { useState } from "react";
import { CompactCard } from "components";
import { Row } from "react-bootstrap";
import demoLogo from "../../../../assets/img/brand-digit.png";
import styled from "styled-components";

export const InfoCardKnowMore = ({}) => {
	return (
		<FormLeftCont>
			<FormLeftLogoNameWrap>
				<FormLeftLogo>
					<img src={demoLogo} alt="plan logo" />
				</FormLeftLogo>
				<FormLeftNameWrap>
					<FormLeftPlanName>Go Digit Insurance</FormLeftPlanName>
				</FormLeftNameWrap>
			</FormLeftLogoNameWrap>

			<FormLeftWrap>
				<FormTermDataRow>
					<FormleftTerm>
						<FormleftTermTxt>Cover Value (IDV) </FormleftTermTxt>
					</FormleftTerm>
					<FormRightTerm>
						<FormleftTermAmount>₹6,350</FormleftTermAmount>
					</FormRightTerm>
				</FormTermDataRow>
				<FormTermDataRow>
					<FormleftTerm>
						<FormleftTermTxt>New NCB (25%) </FormleftTermTxt>
					</FormleftTerm>
					<FormRightTerm>
						<FormleftTermAmount>₹6,350</FormleftTermAmount>
					</FormRightTerm>
				</FormTermDataRow>
				<FormTermDataRow>
					<FormleftTerm>
						<FormleftTermTxt>
							Final Premium
							<div>(Including GST)</div>
						</FormleftTermTxt>
					</FormleftTerm>
					<FormRightTerm>
						<FormleftTermAmount>₹6,350</FormleftTermAmount>
					</FormRightTerm>
				</FormTermDataRow>
			</FormLeftWrap>
		</FormLeftCont>
	);
};

const FormLeftCont = styled.div`
	width: 258px;
	float: left;
	position: relative;
	border-radius: 12px;
	background-color: #ffffff;
	padding: 24px 24px 0 24px;
	box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1),
		0 10px 10px -5px rgba(0, 0, 0, 0.04);
	border: solid 1px #e3e4e8;
`;

const FormLeftLogoNameWrap = styled.div`
	float: left;
	width: 100%;
	margin-bottom: 0;
`;

const FormLeftLogo = styled.div`
	float: left;
	width: 62px;
	height: 41px;
	margin-right: 18px;
	margin-left: 64px;
	& img {
		width: 100%;
	}
`;

const FormLeftNameWrap = styled.div`
	float: left;
	width: 100%;
	margin-bottom: 12px;
	text-align: center;
`;

const FormLeftPlanName = styled.div`
	font-family: "Inter-SemiBold";
	font-size: 14px;
	line-height: 18px;
	color: #333;
	max-height: 38px;
	overflow: hidden;
`;

const FormLeftWrap = styled.div`
	float: left;
	width: 100%;
	margin-bottom: 13px;
`;

const FormleftTerm = styled.div`
	float: left;
	width: 134px;
	margin-right: 0;
`;

const FormRightTerm = styled.div`
	float: left;
	text-align: right;
`;

const FormTermDataRow = styled.div`
	float: left;
	margin-bottom: 12px;
`;

const FormleftTermTxt = styled.div`
	font-family: "Inter-SemiBold";
	font-size: 12px;
	line-height: 18px;
	color: #333;
	margin-left: 10px;
	& div {
		font-size: 10px !important;
		font-family: "Inter-Regular";
	}
`;

const FormleftTermAmount = styled.div`
	font-family: "Inter-Regular";
	font-size: 16px;
	line-height: 18px;
	color: #333;
`;

export default InfoCardKnowMore;
