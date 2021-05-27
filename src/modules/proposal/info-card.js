import React from "react";
import { CompactCard } from "components";
import { Row } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";
import _ from "lodash";

const InfoCard = ({ getPolicyData }) => {
	// const MemberDetails = !_.isEmpty(getPolicyData)
	// 	? getPolicyData?.selected_plan
	// 	: {};
	// const PlanDetails = !_.isEmpty(MemberDetails)
	// 	? !_.isEmpty(MemberDetails?.plan_details)
	// 		? MemberDetails?.plan_details[0]
	// 		: []
	// 	: [];
	// const PlanFeatures = !_.isEmpty(PlanDetails)
	// 	? !_.isEmpty(PlanDetails?.plan_feature)
	// 		? PlanDetails?.plan_feature
	// 		: []
	// 	: [];
	// const IcDetails = !_.isEmpty(getPolicyData) ? getPolicyData?.ic_detail : {};
	// const Currency = getPolicyData?.currency;
	// const PerPerson =
	// 	(getPolicyData?.plan_type === "Indivdual" ||
	// 		getPolicyData?.travel_type_id * 1 === 3) &&
	// 	getPolicyData?.no_of_traveller * 1 !== 1;

	return (
		<CompactCard removeBottomHeader={"true"}>
			<div className="px-2">
				<DivContent>
					<Row>
						<div className="mb-1 mt-1 mr-2">
							<img
								// src={IcDetails?.logo || PlanDetails?.logo}
								src={"/assets/images/goDigit.jpg"}
								alt="logo"
								height={"60"}
								width={"auto"}
							/>
						</div>
						<TagLineDiv>
							<HeaderTagLine>{`lorem Ipsum lorem Ipsum`}</HeaderTagLine>
							<PTagLine>
								{/* {`${PlanDetails?.plan_name || IcDetails?.description || "N/A"}`}
							<p style={{color:'#808080'}}>{IcDetails?.tata_uin || ""}</p> */}
								{`lorem Ipsum lorem Ipsum lorem lorem Ipsum lorem Ipsum `}
							</PTagLine>
						</TagLineDiv>
						<DivSumIns>
							<HeaderSumIns>IDV Value</HeaderSumIns>
							<PSumIns>{`1000 Rs`}</PSumIns>
						</DivSumIns>
					</Row>
					<Row>
						<DivPremium>
							<HeaderPremium>Premium Break-up</HeaderPremium>
						</DivPremium>
					</Row>
					<RowTagPlan xs={1} sm={1} md={1} lg={1} xl={1}>
						<UlTag>
							<LiTag>
								Own Damage Premium
								<SpanTagRight>{`₹ 100`}</SpanTagRight>
							</LiTag>
							<LiTag>
								Third Party Premium
								<SpanTagRight>{`₹ 100`}</SpanTagRight>
							</LiTag>
							<LiTag>
								Add-On Premium
								<SpanTagRight>{`₹ 100`}</SpanTagRight>
							</LiTag>
							<LiTag>
								{"GST(18%)"}
								<SpanTagRight>{`₹ 200`}</SpanTagRight>
							</LiTag>
						</UlTag>
					</RowTagPlan>
					<Row xs={1} sm={1} md={1} lg={1} xl={1}>
						<DivTotal>
							<div>
								<small>Total Premium payable</small>
							</div>
							<div>
								<StrongTag>{`₹ 100`}</StrongTag>
							</div>
						</DivTotal>
					</Row>
				</DivContent>
				<div>
					<RowTag>
						<DivBenefits>
							<PTag>
								Selected Add-ons
								{/* <span>
								<img src="/assets/images/benefit.png" alt="benefit" />
							</span> */}
							</PTag>
							<DivTag>
								{[...Array(8)].map((item, index) => (
									<PBenefits>
										{`Add on ${index}`}
										<SpanRight>
											<img src="/assets/images/green-check.png" alt="check" />
										</SpanRight>
									</PBenefits>
								))}
							</DivTag>
						</DivBenefits>
					</RowTag>
					{/* <RowTag xs={1} sm={1} md={1} lg={1} xl={1}>
						<DivDownload>
							<a
								href={"/"}
								target="_blank"
								rel="noopener noreferrer"
								download
								className="brochure"
							>
								<img
									src="/assets/images/pdf.png"
									alt="BrocureImage"
									height="36"
									style={{ paddingRight: "10px" }}
								/>
								<SpanDownload>Download Policy Wording</SpanDownload>
							</a>
						</DivDownload>
						<DivDownload>
							<a
								href={"/"}
								target="_blank"
								rel="noopener noreferrer"
								download
								className="brochure"
							>
								<img
									src="/assets/images/pdf.png"
									alt="BrocureImage"
									height="36"
									style={{ paddingRight: "10px" }}
								/>
								<SpanDownload>Download Brochure</SpanDownload>
							</a>
						</DivDownload>
					</RowTag> */}
				</div>
			</div>
		</CompactCard>
	);
};

const DivContent = styled.div`
	margin-top: -55px;
	margin-left: 5px;
	margin-right: 5px;
	margin-bottom: 10px;
`;

const TagLineDiv = styled.div`
	width: 100%;
`;

const HeaderTagLine = styled.h6`
	font-size: 14px;
	font-weight: bold;
`;

const PTagLine = styled.p`
	font-size: 80%;
	margin-top: -5px;
	font-weight: 400;
`;

const DivSumIns = styled.div`
	margin-bottom: 15px;
`;

const HeaderSumIns = styled.h6`
	font-size: 11px;
	color: gray;
	font-weight: 1000;
`;

const PSumIns = styled.p`
	font-size: 14.5px;
	font-weight: 700;
	margin-top: -7px;
`;

const DivPremium = styled.div`
	margin-bottom: 15px;
	display: flex;
	margin-top: -10px;
`;

const HeaderPremium = styled.h6`
	font-size: 14px;
	font-weight: 700;
	margin-bottom: 5px;
`;

const RowTagPlan = styled(Row)`
	margin-bottom: 10px;
`;

const UlTag = styled.ul`
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	margin-top: -10px;
	list-style: none;
	line-height: 18px;
	padding: 8px 0;
`;

const LiTag = styled.li`
	font-size: 11px;
	line-height: 18px;
	font-weight: 400;
	margin-bottom: 5px;
`;

const SpanTagRight = styled.span`
	float: right;
	font-size: 13px;
`;

const DivTotal = styled.div`
	border: 1px dashed #f8cf39;
	margin-top: -10px;
	padding: 5px 10px;
`;

const RowTag = styled(Row)`
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	margin-top: 15px;
`;

const DivTag = styled.div`
	width: 100%;
	padding: 5px 6px;
`;

const SpanRight = styled.div`
	float: right;
	display: flex;
`;

const PTag = styled.p`
	padding: 5px 6px;
	font-weight: 600;
	margin-bottom: 15px;
	font-size: 14px;
`;

const StrongTag = styled.strong`
	font-size: 25px;
	@media (max-width: 1000px) {
		font-size: 13px;
	}
`;

const DivBenefits = styled.div`
	margin-top: 10px;
	width: 100%;
`;

const PBenefits = styled.p`
	font-size: 13px;
	font-weight: 400;
`;

const DivDownload = styled.div`
	margin-top: 15px;
	padding: 5px 6px;
`;

const SpanDownload = styled.span`
	font-size: 12px;
	color: #00a2ff;
`;



//proposal-page-font
export const GlobalStyle = createGlobalStyle`
body {
  font-family:basier_squaremedium;
}
`;

export default InfoCard;
