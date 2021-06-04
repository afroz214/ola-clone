import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Row, Col, Table, Form } from "react-bootstrap";
import demoLogo from "../../../../assets/img/brand-digit.png";
import Popup from "../../../../components/Popup/Popup";
import InfoCardKnowMore from "./knowMoreInfo";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { MultiSelect, Error } from "components";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import "./knowMorePopup.css";
const KnowMorePopup = ({ show, onClose, selectedKnow }) => {
	const [key, setKey] = useState(selectedKnow);
	const { handleSubmit, register, errors, control, reset, watch, setValue } =
		useForm({});
	const DummyState = [
		{
			name: "Kerala",
			label: "Kerala",
			value: "2",
			id: "2",
		},
		{
			name: "Maharashtra",
			label: "Maharashtra",
			value: "3",
			id: "3",
		},
		{
			name: "Delhi",
			label: "Delhi",
			value: "4",
			id: "4",
		},
	];
	const DummyCity = [
		{
			name: "Mumbai",
			label: "Mumbai",
			value: "2",
			id: "2",
		},
		{
			name: "Chennai",
			label: "Chennai",
			value: "3",
			id: "3",
		},
		{
			name: "Delhi",
			label: "Delhi",
			value: "4",
			id: "4",
		},
	];
	const [width, setWidth] = useState(window.innerWidth);
	console.log(width);
	const updateWidth = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	});
	const content = (
		<>
			<ContentWrap>
				<Row>
					<Col lg={4} md={12}>
						<DetailsPopHeadWrap>
							<InfoCardKnowMore />
							<CardTopRightCenter>
								<BuyButton>
									<div>
										<span>BUY NOW</span>
									</div>
								</BuyButton>
							</CardTopRightCenter>
						</DetailsPopHeadWrap>
					</Col>
					<Col lg={8} md={12}>
						<DetailPopTabs>
							<ul className="nav nav-tabs">
								<li className={key === "premiumBreakupPop" ? "active" : ""}>
									<a
										data-toggle="tab"
										aria-expanded="true"
										onClick={() => setKey("premiumBreakupPop")}
									>
										Premium Breakup
									</a>
								</li>

								<li className={key === "cashlessGaragesPop" ? "active" : ""}>
									<a
										data-toggle="tab"
										aria-expanded="false"
										onClick={() => setKey("cashlessGaragesPop")}
									>
										Cashless Garages
									</a>
								</li>
							</ul>

							<TabContet>
								<div
									class={key === "premiumBreakupPop" ? "showDiv" : "hideDiv"}
								>
									<Body>
										<PdfMail>
											<a>
												<i class="fa fa-file-pdf-o" aria-hidden="true"></i>
												&nbsp; PDF&nbsp;&nbsp;
											</a>
											<a>
												<i class="fa fa-envelope" aria-hidden="true"></i>
												&nbsp; EMAIL
											</a>
										</PdfMail>
										<div>
											<Row>
												<Col md={6} sm={12}>
													<Table bordered>
														<tbody>
															<tr>
																<td
																	rowspan="5"
																	style={{
																		verticalAlign: "middle",
																		width: "20%",
																		borderRight: "1px solid #ccc",
																	}}
																>
																	<img
																		src={demoLogo}
																		alt=""
																		class="icon"
																		id="premium_breakup_ic_img"
																		style={{ height: "auto", width: "100%" }}
																	/>
																</td>
																<td>Go Digit General insurance</td>
															</tr>
															<tr>
																<td>Go Digit General insurance</td>
															</tr>
															<tr>
																<td>Go Digit General insurance</td>
															</tr>
															<tr>
																<td>Go Digit General insurance</td>
															</tr>
														</tbody>
													</Table>
												</Col>
												<Col md={6} sm={12}>
													<Table bordered>
														<tbody>
															<tr>
																<td>Go Digit General insurance</td>
															</tr>
															<tr>
																<td>Go Digit General insurance</td>
															</tr>
															<tr>
																<td>Go Digit General insurance</td>
															</tr>
															<tr>
																<td>Go Digit General insurance</td>
															</tr>
														</tbody>
													</Table>
												</Col>
											</Row>
											<Row>
												<Col md={6} sm={12}>
													<Table bordered>
														<thead>
															<tr>
																<th
																	style={{
																		textAlign: "center",
																	}}
																>
																	Own Damage
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
														</tbody>
													</Table>
												</Col>
												<Col md={6} sm={12}>
													<Table bordered>
														<thead>
															<tr>
																<th
																	style={{
																		textAlign: "center",
																	}}
																>
																	Liability
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
														</tbody>
													</Table>
												</Col>
											</Row>
											<Row>
												<Col md={6} sm={12}>
													<Table bordered>
														<thead>
															<tr>
																<th
																	style={{
																		textAlign: "center",
																	}}
																>
																	Discounts
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	<div
																		style={{
																			display: "flex",
																			justifyContent: "space-between",
																		}}
																	>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</div>
																</td>
															</tr>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
														</tbody>
													</Table>
												</Col>
												<Col md={6} sm={12}>
													<Table bordered>
														<thead>
															<tr>
																<th
																	style={{
																		textAlign: "center",
																	}}
																>
																	Add-ons
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
														</tbody>
													</Table>
												</Col>
											</Row>
											<Row>
												<Col md={12} sm={12}>
													<Table bordered>
														<tbody>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
															<tr>
																<td>
																	{" "}
																	<DetailRow>
																		<span> Basic Own Damage(OD)</span>
																		<span>₹ 13,913</span>
																	</DetailRow>
																</td>
															</tr>
														</tbody>
													</Table>
												</Col>
											</Row>
										</div>
									</Body>
								</div>
								<div
									class={key === "premiumBreakupPop" ? "hideDiv" : "showDiv"}
								>
									<Body>
										<Row>
											<Col md={6} sm={12}>
												<Controller
													control={control}
													name="state_other"
													defaultValue={""}
													render={({ onChange, onBlur, value, name }) => (
														<MultiSelect
															knowMore
															name={name}
															onChange={onChange}
															ref={register}
															value={value}
															onBlur={onBlur}
															isMulti={false}
															options={DummyState}
															placeholder={"State"}
															errors={errors.state}
															Styled
															closeOnSelect
														/>
													)}
												/>
												{!!errors?.state && (
													<Error className="mt-1">
														{errors?.state?.message}
													</Error>
												)}
											</Col>
											<Col md={6} sm={12}>
												<Controller
													control={control}
													name="city_other"
													defaultValue={""}
													render={({ onChange, onBlur, value, name }) => (
														<MultiSelect
															knowMore
															name={name}
															onChange={onChange}
															ref={register}
															value={value}
															onBlur={onBlur}
															isMulti={false}
															options={DummyCity}
															placeholder={"City"}
															errors={errors.city}
															Styled
															closeOnSelect
														/>
													)}
												/>
												{!!errors?.city && (
													<Error className="mt-1">
														{errors?.city?.message}
													</Error>
												)}
											</Col>
										</Row>

										<Table
											striped
											bordered
											hover
											style={{
												marginTop: "33px",
											}}
										>
											<thead>
												<tr>
													<th>Cashless Garage</th>
													<th>Contact Number</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<b>Ace Kudale Car Pvt Ltd</b>
														<br />
														S.No 232/2, Bhosarigaon, Pune-Nashik Road, Near
														Janseva Saha
													</td>
													<td>9689914041</td>
												</tr>
												<tr>
													<td>
														<b>Ahura Car Care</b>
														<br />8 Sant Savita Cross Lane 2 Byculla East
													</td>
													<td>9821065206</td>
												</tr>
												<tr>
													<td>
														<b>Allied Automobile Works</b>
														<br />
														86/20 Ambedkar Road, Khar West
													</td>
													<td>8286058967</td>
												</tr>
											</tbody>
										</Table>
									</Body>
								</div>
							</TabContet>
						</DetailPopTabs>
					</Col>
				</Row>
			</ContentWrap>
		</>
	);
	return (
		<Popup
			height={"600px"}
			width={width < 996 ? "100%" : "max-content"}
			show={show}
			onClose={onClose}
			content={content}
			position={"bottom"}
			outside={true}
		/>
	);
};

// PropTypes
KnowMorePopup.propTypes = {
	show: PropTypes.bool,
	onClose: PropTypes.func,
};

// DefaultTypes
KnowMorePopup.defaultProps = {
	show: false,
	onClose: () => {},
};

const ContentWrap = styled.div`
	padding: 14px 0px 0px 0px;
	font-family: "Inter-Regular";
	font-size: 14px;
	line-height: 22px;
	color: #333;
	position: relative;
`;
const DetailsPopHeadWrap = styled.div`
	float: left;
	width: 294px;
	padding: 0 18px;
	@media (max-width: 996px) {
		width: 100% !important;
	}
`;
const CardTopRightCenter = styled.div`
	margin: 0 auto;
	display: inline-block;
`;
const BuyButton = styled.button`
	float: left;
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
	width: 258px;
	margin-top: 20px;
	line-height: 24px;
	height: 54px;
	.div {
		width: 106px;
		position: relative;
		margin: 0 auto;
		height: 28px;
	}
	.span {
		font-family: "Inter-SemiBold";
		font-size: 14px;
		line-height: 2;
		display: contents;
		float: left;
	}
`;

const DetailPopTabs = styled.div`
	float: left;
	margin-top: -14px;
	border-left: 1px solid #e3e4e8;
	/*	width: 777px;*/
	@media (max-width: 996px) {
		margin-top: 0px;
		float: right;
		border-left: 0px solid #e3e4e8;
	}
`;

const TabContet = styled.div`
	padding: 0;
`;

const Body = styled.div`
	position: relative;
	padding: 15px;
`;
const PdfMail = styled.div`
	margin-bottom: 20px;
`;
const DetailRow = styled.div`
	justify-content: space-between;
	display: flex;
`;

export default KnowMorePopup;
