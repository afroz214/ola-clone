import React, { useState } from "react";
import { CompactCard } from "components";
import { Row } from "react-bootstrap";
import demoLogo from "../../../assets/img/brand-digit.png";
import styled from "styled-components";

export const InfoCard = ({}) => {
	const [company, setCompany] = useState(true);
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
				<FormleftTerm>
					<FormleftSingleHead>IDV Value</FormleftSingleHead>
				</FormleftTerm>
				<FormRightTerm>
					<FormleftSingleTermTxt>₹3,61,950</FormleftSingleTermTxt>
				</FormRightTerm>
			</FormLeftWrap>
			<FormLeftWrap>
				<FormTermHeading>Premium Break-up</FormTermHeading>

				<FormTermDataRow>
					<FormleftTerm>
						<FormleftTermTxt>Own Damage Premium</FormleftTermTxt>
					</FormleftTerm>
					<FormRightTerm>
						<FormleftTermTxt>₹6,350</FormleftTermTxt>
					</FormRightTerm>
				</FormTermDataRow>
				<FormTermDataRow>
					<FormleftTerm>
						<FormleftTermTxt>Third Party Premium</FormleftTermTxt>
					</FormleftTerm>
					<FormRightTerm>
						<FormleftTermTxt>₹6,350</FormleftTermTxt>
					</FormRightTerm>
				</FormTermDataRow>
				<FormTermDataRow>
					<FormleftTerm>
						<FormleftTermTxt>Add-On Premium</FormleftTermTxt>
					</FormleftTerm>
					<FormRightTerm>
						<FormleftTermTxt>₹6,350</FormleftTermTxt>
					</FormRightTerm>
				</FormTermDataRow>
				<FormTermDataRow>
					<FormleftTerm>
						<FormleftTermTxt>Gross Premium</FormleftTermTxt>
					</FormleftTerm>
					<FormRightTerm>
						<FormleftTermTxt>₹6,350</FormleftTermTxt>
					</FormRightTerm>
				</FormTermDataRow>
				<FormTermDataRow>
					<FormleftTerm>
						<FormleftTermTxt>GST (18%)</FormleftTermTxt>
					</FormleftTerm>
					<FormRightTerm>
						<FormleftTermTxt>₹1,130</FormleftTermTxt>
					</FormRightTerm>
				</FormTermDataRow>
				<FormTotalRow>
					<FormTotalLeft>Final Premium</FormTotalLeft>
					<FormTotalRight>₹9,350</FormTotalRight>
				</FormTotalRow>
			</FormLeftWrap>
			<FormLeftWrap>
				<FormTermHeading>Selected Add-ons</FormTermHeading>
				<FormleftTerm>
					<FormleftTermTxt>PA Cover</FormleftTermTxt>
				</FormleftTerm>
				<FormRightTerm>
					<FormleftTermTxt>₹300</FormleftTermTxt>
				</FormRightTerm>
				{company && (
					<CompanyCheckAddOn>
						Car registered under Company is not eligible for Personal Accident
						Cover
					</CompanyCheckAddOn>
				)}
			</FormLeftWrap>
		</FormLeftCont>
	);
};

const FormLeftCont = styled.div`
	width: 310px;
	margin-left: 12px;
	float: left;
	position: relative;
	width: 302px;
	border-radius: 12px;
	background-color: #ffffff;
	margin-left: 14px;
	padding: 24px 24px 0 24px;
	box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1),
		0 10px 10px -5px rgba(0, 0, 0, 0.04);
	border: solid 1px #e3e4e8;
	top: 30px;
	@media (max-width: 960px) {
		width: 100%;
		margin-left: 0px;
	}
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
	margin-left: 88px;
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

const FormleftSingleHead = styled.div`
	font-family: "Inter-SemiBold";
	font-size: 12px;
	line-height: 24px;
	color: #333;
`;

const FormRightTerm = styled.div`
	float: left;
	width: 110px;
	text-align: right;
`;

const FormleftSingleTermTxt = styled.div`
	font-family: "Inter-Regular";
	font-size: 16px;
	line-height: 23px;
	color: #333;
	text-align: right;
`;

const FormTermHeading = styled.div`
	font-family: "Inter-SemiBold";
	font-size: 14px;
	line-height: 33px;
	color: #333;
	border-bottom: solid 1px #e3e4e8;
	padding-bottom: 4px;
	margin-bottom: 8px;
	margin-top: -14px;
`;

const FormTermDataRow = styled.div`
	float: left;
	margin-bottom: 12px;
`;

const FormleftTermTxt = styled.div`
	font-family: "Inter-Regular";
	font-size: 11px;
	line-height: 18px;
	color: #333;
`;

const FormTotalRow = styled.div`
	float: left;
	width: 100%;
	padding: 14px 0;
	border-top: solid 1px #e3e4e8;
	border-bottom: solid 1px #e3e4e8;
	color: #333;
`;
const FormTotalLeft = styled.div`
	float: left;
	width: 134px;
	font-family: "Inter-SemiBold";
	font-size: 16px;
	line-height: 20px;
`;
const FormTotalRight = styled.div`
	float: left;
	width: 110px;
	font-family: "Inter-Regular";
	font-size: 20px;
	line-height: 24px;
	text-align: right;
`;

const CompanyCheckAddOn = styled.div`
	display: block;
	float: left;
	width: 100%;
	border: dashed 1px #bdd400;
	font-family: "Inter-Regular";
	font-size: 12px;
	line-height: 20px;
	color: #000000;
	padding: 11px 13px;
	border-radius: 0px !important;
	padding: 11px 9px;
	margin-top: 4px;
`;

export default InfoCard;
