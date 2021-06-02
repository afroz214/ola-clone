import React, { useState } from "react";
import styled from "styled-components";
import demoLogo from "../../../assets/img/logo02.png";

import { useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
export const QuoteCard = ({ setKnow }) => {
	const history = useHistory();

	return (
		<>
			<Col lg={4} md={12} sm={12} style={{ marginTop: "30px" }}>
				<QuoteCardMain>
					<CardOtherItemInner>
						<Row>
							<Col lg={12}>
								<LogoImg src={demoLogo} alt="Plan Logo" />
							</Col>
							<Col lg={12}>
								<CardOtherName>ICICI Lombard Insurance</CardOtherName>
							</Col>
						</Row>
						<CardOtherIdv>IDV Value : ₹ 3,02,575</CardOtherIdv>
						<CardBuyButton
							onClick={() => {
								history.push(`/review`);
							}}
						>
							BUY NOW
							<span> ₹ 5,300</span>
						</CardBuyButton>
					</CardOtherItemInner>

					<CardOtherItemNoBorder>
						<Row>
							<Col lg={8} md={8} sm={8} xs={8}>
								<ItemName>Base Premium</ItemName>
							</Col>
							<Col lg={4} md={4} sm={4} xs={4}>
								<ItemPrice>₹ 7,561</ItemPrice>
							</Col>
							<Col lg={8} md={8} sm={8} xs={8}>
								<ItemName>Zero Depreciation</ItemName>
							</Col>
							<Col lg={4} md={4} sm={4} xs={4}>
								<ItemPrice>₹ 7,561</ItemPrice>
							</Col>
							<Col lg={8} md={8} sm={8} xs={8}>
								<ItemName>Road Side Assistance </ItemName>
							</Col>
							<Col lg={4} md={4} sm={4} xs={4}>
								<ItemPrice>₹ 7,561</ItemPrice>
							</Col>
						</Row>
					</CardOtherItemNoBorder>
					<Row
						mb-10
						style={{ marginBottom: "10px" }}
						onClick={() => setKnow(true)}
					>
						<Col lg={6}>
							<CardOtherItemBtn>Cashless Garages</CardOtherItemBtn>
						</Col>
						<Col lg={6}>
							<CardOtherItemBtn>Premium Breakup</CardOtherItemBtn>
						</Col>
					</Row>
				</QuoteCardMain>
			</Col>
		</>
	);
};

const QuoteCardMain = styled.div`
	display: inline-block;
	position: relative;
	// width: 303px;
	margin-right: 16px;
	padding: 10px 0 0;
	border-radius: 4px;
	width: 100%;
	min-height: "min-content";
	box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1),
		0 10px 10px -5px rgba(0, 0, 0, 0.04);

	background-color: #ffffff;
	text-align: center;
	@media screen and (max-width: 1290px) {
		// width: 95%;
	}
`;
const CardOtherItemInner = styled.div`
	border-bottom: solid 1px #e3e4e8;
	padding: 0 20px 0;
`;

const LogoImg = styled.img`
	max-height: 80px;
	margin-bottom: 0px;
	margin-left: -10px;
	margin-top: -10px;
`;

const CardOtherName = styled.div`
	font-family: "Inter-SemiBold";
	font-size: 13px;
	line-height: 20px;
	margin-bottom: 4px;
`;
//

const CardOtherIdv = styled.div`
	float: left;
	position: relative;
	width: 100%;
	font-family: "Inter-Regular";
	font-size: 16px;
	line-height: 20px;
	color: #000;
	margin-bottom: 14px;
	cursor: pointer;
	font-weight: 600;
`;

const CardBuyButton = styled.button`
	float: left;
	// width: 220px;
	display: flex;
	height: 47px;
	margin-top: 6px;
	background-color: #bdd400 !important;
	border: 1px solid #bdd400;
	color: #000 !important;
	font-family: "Inter-SemiBold";
	font-size: 12px;
	line-height: 40px;
	border-radius: 50px;
	margin-left: 0;
	outline: none;
	display: grid;
	width: 65%;
	float: none;
	background: #fff;
	color: #bdd400;
	padding: 3px 0;
	margin-bottom: 16px !important;
	margin: 0 auto;
	justify-contnet: space-between;
	& span {
		font-size: 15px;
		display: contents;
		font-family: "Inter-Light";
	}
`;

const CardOtherItemNoBorder = styled.div`
	padding: 4px 12px 0px 17px;
	border-bottom: none;
`;

const ItemName = styled.p`
	font-size: 12px;
	text-align: left;
`;

const ItemPrice = styled.p`
	text-align: end;
	font-weight: 600;
	font-size: 12px;
	margin-right: 5px;
`;

const CardOtherItemBtn = styled.span`
	background-color: rgba(241, 242, 246, 0.3);
	color: #000;
	cursor: pointer;
	height: 40px;
	font-size: 11px;
	line-height: 20px;
	padding: 10px 4px 10px 0;
	/* border-top: solid 1px #e3e4e8; */
	/* text-align: left; */
	font-weight: 600;
`;

// const AmontContainer = styled.span`
// 	font-size: 14px;
// `;
