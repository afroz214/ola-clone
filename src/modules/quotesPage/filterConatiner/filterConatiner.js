import React, { useState } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import editImg from "../../../assets/img/edit.png";
import PolicyTypePopup from "../quotesPopup/policyTypePopup";
import IDVPopup from "../quotesPopup/IDVPopup";
import NCBPopup from "../quotesPopup/NCBPopup";
import { useHistory } from "react-router-dom";
import { ErrorMsg } from "components";
import PrevInsurerPopup from "../quotesPopup/prevInsurerPopup";
import DateInput from "../../proposal/DateInput";
import { Row, Col } from "react-bootstrap";
export const FilterContainer = (quotesPage) => {
	const { handleSubmit, register, watch, control, errors, setValue } = useForm({
		// resolver: yupResolver(yupValidate),
		// mode: "all",
		// reValidateMode: "onBlur",
	});
	const history = useHistory();
	const [policyPopup, setPolicyPopup] = useState(true);
	const [idvPopup, setIdvPopup] = useState(false);
	const [prevPopup, setPrevPopup] = useState(false);
	const [ncbPopup, setNcbPopup] = useState(false);
	const [policyType, setPolicyType] = useState("Comprehensive");
	return (
		<>
			<FilterContainerMain>
				<FilterMenuWrap>
					<FilterMenuRow>
						<FilterMenuOpenWrap
							onClick={() => {
								history.push(`/`);
							}}
						>
							<FilterMenuOpenEdit />
							<FilterMenuOpenTitle>
								Volkswagen Polo - Dreamline 1197 CC{" "}
							</FilterMenuOpenTitle>
							<FilterMenuOpenSub>
								Private Car | Petrol | MH01 AR 7294
								<img src={editImg} />
							</FilterMenuOpenSub>
						</FilterMenuOpenWrap>

						<FilterMenuOpenWrap>
							<FilterMenuOpenSub onClick={() => setPolicyPopup(true)}>
								Previous policy type:
								<FilterMenuOpenSubBold>
									{policyType} <img src={editImg} />
								</FilterMenuOpenSubBold>
							</FilterMenuOpenSub>
							<FilterMenuOpenEdit>
								<FilterMenuOpenTitle onClick={() => setPrevPopup(true)}>
									Previous Insurer:
									<FilterMenuOpenSubBold>
										<b>Bajaj Allianz</b> <img src={editImg} />
									</FilterMenuOpenSubBold>
								</FilterMenuOpenTitle>
							</FilterMenuOpenEdit>
						</FilterMenuOpenWrap>

						<FilterMenuTopBoxWrap>
							<FilterMenuTopBoxWrap>
								<div>
									Policy Expiry:{" "}
									<span>
										<b>30-Apr-2021</b>
									</span>
									{/* <div className="py-2 dateTimeOne">
										<Controller
											control={control}
											name="policyExpiry"
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
										{!!errors.policyExpiry && (
											<ErrorMsg fontSize={"12px"}>
												{errors.policyExpiry.message}
											</ErrorMsg>
										)}
									</div> */}
								</div>
								<div>
									Registered on:{" "}
									<span>
										<b>01-Apr-2018</b>
										<img src={editImg} />
									</span>
									{/* <div className="py-2 dateTimeOne">
										<Controller
											control={control}
											name="policyReg"
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
										{!!errors.policyReg && (
											<ErrorMsg fontSize={"12px"}>
												{errors.policyReg.message}
											</ErrorMsg>
										)}
									</div> */}
								</div>
							</FilterMenuTopBoxWrap>
							<FilterTopBoxRs></FilterTopBoxRs>
						</FilterMenuTopBoxWrap>

						<FilterMenuTopBoxWrap>
							<FilterMenuTopBoxWrap onClick={() => setNcbPopup(true)}>
								<div>
									New NCB:{" "}
									<span>
										<b>10%</b>
									</span>
								</div>
								<div>
									Previous NCB:{" "}
									<span>
										<b>10%</b>
										<img src={editImg} onClick={() => setNcbPopup(true)} />
									</span>
								</div>
							</FilterMenuTopBoxWrap>
							<FilterTopBoxRs></FilterTopBoxRs>
						</FilterMenuTopBoxWrap>
					</FilterMenuRow>
					{quotesPage && (
						<FilterMenuRow>
							<FilterMenuQuoteBoxWrap onClick={() => setIdvPopup(true)}>
								<FilterTopBoxChange>
									<img src={editImg} />
								</FilterTopBoxChange>
								<FilterTopBoxTitle>
									Vehicle Value (IDV) <span>₹ 3,02,575</span>
								</FilterTopBoxTitle>
							</FilterMenuQuoteBoxWrap>
							<FilterSubMenuCont>
								<FilterSubMenuWrap>
									<InclusiveGstWrap>
										<PremiumFilterWrap>
											<PremiumFilterlabel>
												Sort by:<b> Relevance</b>
											</PremiumFilterlabel>
										</PremiumFilterWrap>
									</InclusiveGstWrap>
								</FilterSubMenuWrap>
							</FilterSubMenuCont>
						</FilterMenuRow>
					)}
				</FilterMenuWrap>
			</FilterContainerMain>
			{policyPopup && (
				<PolicyTypePopup
					setPolicy={setPolicyType}
					policyType={policyType}
					show={policyPopup}
					onClose={setPolicyPopup}
				/>
			)}
			{idvPopup && <IDVPopup show={idvPopup} onClose={setIdvPopup} />}
			{prevPopup && (
				<PrevInsurerPopup show={prevPopup} onClose={setPrevPopup} />
			)}
			{ncbPopup && <NCBPopup show={ncbPopup} onClose={setNcbPopup} />}
		</>
	);
};

const FilterContainerMain = styled.div`
	width: 100%;
	border-bottom: solid 1px #e3e4e8;
	box-shadow: 0 24px 34px -8px rgb(0 0 0 / 9%);
	margin-bottom: 16px;
	height: 68px;
`;
const FilterMenuWrap = styled.div`
	width: 1240px;
	margin: 0 auto;
	height: 124px;
	padding: 8px 0;
	font-family: "Inter-Regular";
	color: #333;
`;

const FilterMenuRow = styled.div`
	float: left;
	width: 100%;
	margin-bottom: 23px;
	&:last-child {
		margin-bottom: 0;
		margin-top: -10px;
	}
`;

const FilterMenuOpenWrap = styled.div`
	&:first-child {
		border-right: 1px solid #e3e4e8;
	}
	&:nth-child(2) {
		width: 291px;
		padding-left: 26px;
		margin-right: 16px;
	}
	float: left;
	width: 428px;
	position: relative;
	padding-bottom: 10px;
	margin-left: -8px;
`;
//

const FilterMenuOpenEdit = styled.div`
	position: absolute;
	top: 25px;
	right: 40px;
	font-size: 12px;
	line-height: 15px;
	color: #000;
	padding: 2px 6px;
	cursor: pointer;
`;

const FilterMenuOpenTitle = styled.div`
	float: left;
	width: 100%;
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 8px;
	padding-right: 7px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`;

const FilterMenuOpenSub = styled.div`
	color: #000000;
	font-weight: 600;
	float: left;
	width: 100%;
	font-size: 14px;
	line-height: 17px;
	color: #707070;
`;

const FilterMenuOpenSubBold = styled.span`
	color: #000000;
	font-weight: 600;
`;

const FilterMenuTopBoxWrap = styled.div`
	margin-left: -11px;
	margin-right: 0px;
	border-radius: 12px 0 0px 12px;
	float: left;
	position: relative;
	border-radius: 0 12px 12px 0;
	padding: 5px 16px 7px;
	margin-right: 4px;
	position: relative;
	bottom: 5px;
`;

const FilterTopBoxRs = styled.span`
	margin-top: -11px;
	float: left;
	font-size: 14px;
	line-height: 23px;
	margin-right: 4px;
`;

const FilterMenuQuoteBoxWrap = styled.button`
	margin-top: 1px;
	margin-left: -75px;
	background: #fff;
	border-radius: 8px;
	padding-top: 10px;
	line-height: 27px;
	height: 45px;
	margin-right: 220px;
	border: 1px solid #e0e0e0;
	float: right;
	position: relative;
	padding: 5px 16px 7px;
	z-index: 2;
`;

const FilterTopBoxChange = styled.div`
	float: right;
	font-size: 12px;
	line-height: 15px;
	color: #000;
	border-radius: 4px;
	padding: 6px 6px;
	cursor: pointer;
	margin-right: 3px;
`;

const FilterTopBoxTitle = styled.div`
	font-family: "Inter-SemiBold";
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 6px;
	padding-top: 6px;
	float: inherit;
`;

const FilterSubMenuCont = styled.div`
	margin-bottom: 22px;
	width: 100%;
`;

const FilterSubMenuWrap = styled.div`
	width: 1240px;
	margin: 0 auto;
	position: relative;
`;

const InclusiveGstWrap = styled.div`
	position: relative;
	float: right;
	margin-top: 5px;
	text-align: right;
	margin-bottom: 7px;
	width: 404px;
`;

const PremiumFilterWrap = styled.div`
	width: 218px;
	margin-bottom: 8px;
	position: relative;
	font-family: "Inter-Regular";
	font-size: 12px;
	line-height: 15px;
	border: solid 1px #e3e4e8;
	color: #808080;
	margin-top: -6px;
	margin-left: 610px;
	padding: 17px 12px;
	background-color: #ffffff;
	height: 47px;
	border-radius: 8px;
`;

const PremiumFilterlabel = styled.div`
	margin-bottom: 8px;
	font-family: "Inter-Regular" !important;
	font-size: 13px !important;
	line-height: 15px !important;
	color: #000000 !important;
	text-align: left;
`;
