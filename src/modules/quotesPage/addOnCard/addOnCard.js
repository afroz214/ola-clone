import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {
	CustomAccordion,
	AccordionHeader,
	AccordionContent,
	ErrorMsg,
	CustomRadio,
} from "components";
import tooltip from "../../../assets/img/tooltip.svg";
import CustomTooltip from "../../../components/tooltip/CustomTooltip";

import Checkbox from "../../../components/inputs/checkbox/checkbox";
import { Row, Col, Form } from "react-bootstrap";
export const AddOnsCard = () => {
	const { handleSubmit, register, watch, control, errors, setValue } = useForm({
		// resolver: yupResolver(),
		// mode: "all",
		// reValidateMode: "onBlur",
	});

	// demo data

	const Addons = [
		"Zero Depreciation",
		"Compulsory PA Cover",
		"Roadside Assistance (RSA)",
		"Engine Protector",
		"NCB Protector",
		"Key & Lock Replacement",
		"Consumables",
		"Daily Allowance",
		"Invoice Price",
		"Tyre Protection",
		"Loss of Personal Belongings",
	];
	const Insurers = [
		"Select All",
		"Bajaj Allianz",
		"Bharti AXA",
		"Hdfc Ergo",
		"Cholamandalam",
		"Future Generali",
		"ICICI Lombard",
		"Daily Allowance",
		"Iffco Tokio",
	];

	const unNamedCover = ["₹ 1 lac", "₹ 2 lac"];

	const volDiscount = ["None", "₹2500", "₹5000", "₹7500", "₹10000"];

	const other = watch("tools");
	console.log(other);

	return (
		<CardOtherItem>
			<Col lg={12} md={12} style={{ textAlign: "left", padding: "16px 12px" }}>
				<AddOnTitle>
					Add-ons & Others
					<span style={{ marginLeft: "3px" }}>
						<CustomTooltip
							rider="true"
							id="RiderInbuilt__Tooltip"
							place={"bottom"}
							customClassName="mt-3 riderPageTooltip "
						>
							<img
								data-tip="<h3 >Add-ons & Others</h3> <div>Additional covers which you may add in your policy for better financial protection of your car or the individuals traveling in your car.</div>"
								data-html={true}
								data-for="RiderInbuilt__Tooltip"
								src={tooltip}
								alt="tooltip"
								className="toolTipRiderChild"
							/>
						</CustomTooltip>
					</span>
				</AddOnTitle>
				<Col md={12} style={{ padding: "0" }}>
					<AccordionTab>
						<CustomAccordion id="addons" noPadding>
							<AccordionHeader>Addons</AccordionHeader>
							<AccordionContent>
								<CardBlock>
									{Addons.map((item, index) => (
										<Checkbox
											id={item}
											name="addons"
											fieldName={item}
											register={register}
											index={index}
										/>
									))}
								</CardBlock>
							</AccordionContent>
						</CustomAccordion>
						<CustomAccordion id="accessories" noPadding>
							<AccordionHeader>Accessories</AccordionHeader>
							<AccordionContent>
								<CardBlock>
									<Checkbox
										id={"Electrical Accessories"}
										fieldName={"Electrical Accessories"}
										register={register}
										index={0}
										name="accesories"
									/>
									<InputFieldSmall>
										<Form.Control
											type="text"
											placeholder="Enter value between ₹ 9,33,759 and ₹ 13,41,250"
											name="amount"
											maxLength="50"
											minlength="2"
											ref={register}
											onInput={(e) =>
												(e.target.value =
													e.target.value.length <= 1
														? "" + e.target.value
														: e.target.value)
											}
											errors={errors.amount}
											size="sm"
										/>
										{!!errors.amount && (
											<ErrorMsg fontSize={"12px"}>
												{errors.amount.message}
											</ErrorMsg>
										)}
									</InputFieldSmall>
									<InputFieldSmall>
										<Form.Control
											type="text"
											placeholder="Sum Insured"
											name="sum_insured"
											maxLength="50"
											minlength="2"
											ref={register}
											onInput={(e) =>
												(e.target.value =
													e.target.value.length <= 1
														? "" + e.target.value
														: e.target.value)
											}
											errors={errors.sum_insured}
											size="sm"
										/>
										{!!errors.sum_insured && (
											<ErrorMsg fontSize={"12px"}>
												{errors.sum_insured.message}
											</ErrorMsg>
										)}
									</InputFieldSmall>

									<Checkbox
										id={"Non-Electrical Accessories"}
										fieldName={"Non-Electrical Accessories"}
										register={register}
										index={1}
										name="accesories"
									/>
									<InputFieldSmall>
										<Form.Control
											type="text"
											placeholder="Enter value between ₹ 9,33,759 and ₹ 13,41,250"
											name="amount"
											maxLength="50"
											minlength="2"
											ref={register}
											onInput={(e) =>
												(e.target.value =
													e.target.value.length <= 1
														? "" + e.target.value
														: e.target.value)
											}
											errors={errors.amount}
											size="sm"
										/>
										{!!errors.amount && (
											<ErrorMsg fontSize={"12px"}>
												{errors.amount.message}
											</ErrorMsg>
										)}
									</InputFieldSmall>
									<InputFieldSmall>
										<Form.Control
											type="text"
											placeholder="Sum Insured"
											name="sum_insured"
											maxLength="50"
											minlength="2"
											ref={register}
											onInput={(e) =>
												(e.target.value =
													e.target.value.length <= 1
														? "" + e.target.value
														: e.target.value)
											}
											errors={errors.sum_insured}
											size="sm"
										/>
										{!!errors.sum_insured && (
											<ErrorMsg fontSize={"12px"}>
												{errors.sum_insured.message}
											</ErrorMsg>
										)}
									</InputFieldSmall>
									<Checkbox
										id={"External Bi-Fuel Kit CNG/LPG"}
										fieldName={"External Bi-Fuel Kit CNG/LPG"}
										register={register}
										index={2}
										name="accesories"
									/>
									<InputFieldSmall>
										<Form.Control
											type="text"
											placeholder="Enter value between ₹ 9,33,759 and ₹ 13,41,250"
											name="amount"
											maxLength="50"
											minlength="2"
											ref={register}
											onInput={(e) =>
												(e.target.value =
													e.target.value.length <= 1
														? "" + e.target.value
														: e.target.value)
											}
											errors={errors.amount}
											size="sm"
										/>
										{!!errors.amount && (
											<ErrorMsg fontSize={"12px"}>
												{errors.amount.message}
											</ErrorMsg>
										)}
									</InputFieldSmall>
									<InputFieldSmall>
										<Form.Control
											type="text"
											placeholder="Sum Insured"
											name="sum_insured"
											maxLength="50"
											minlength="2"
											ref={register}
											onInput={(e) =>
												(e.target.value =
													e.target.value.length <= 1
														? "" + e.target.value
														: e.target.value)
											}
											errors={errors.sum_insured}
											size="sm"
										/>
										{!!errors.sum_insured && (
											<ErrorMsg fontSize={"12px"}>
												{errors.sum_insured.message}
											</ErrorMsg>
										)}
									</InputFieldSmall>
								</CardBlock>
							</AccordionContent>
						</CustomAccordion>
						<CustomAccordion id="additional" noPadding>
							<AccordionHeader>Additional Covers</AccordionHeader>
							<AccordionContent>
								<CardBlock>
									<Checkbox
										id={"Paid Driver Cover"}
										fieldName={"Paid Driver Cover"}
										register={register}
										index={0}
										name="additional"
									/>
									<Checkbox
										id={"Owner Driver PA Cover"}
										fieldName={"Owner Driver PA Cover"}
										register={register}
										index={1}
										name="additional"
									/>
									<Checkbox
										id={"Unnamed Passenger PA Cover"}
										fieldName={"Unnamed Passenger PA Cover"}
										register={register}
										index={2}
										name="additional"
									/>

									{unNamedCover.map((item, index) => (
										<CustomRadio
											id={item}
											name="tools"
											fieldName={item}
											index={1}
											register={register}
										/>
									))}

									<Checkbox
										id={
											"Is the car fitted with ARAI approved anti-theft device?"
										}
										fieldName={
											"Is the car fitted with ARAI approved anti-theft device?"
										}
										register={register}
										index={3}
										name="additional"
									/>
								</CardBlock>
							</AccordionContent>
						</CustomAccordion>

						<CustomAccordion id="voluntary" noPadding>
							<AccordionHeader>Voluntary Insurer Discounts</AccordionHeader>
							<AccordionContent>
								<CardBlock>
									{volDiscount.map((item, index) => (
										<CustomRadio
											id={item}
											name="tools"
											fieldName={item}
											index={2}
											register={register}
											items={volDiscount}
										/>
									))}
								</CardBlock>
							</AccordionContent>
						</CustomAccordion>
						<CustomAccordion id="insurers" noPadding>
							<AccordionHeader>Insurers</AccordionHeader>
							<AccordionContent>
								<CardBlock>
									{Insurers.map((item, index) => (
										<Checkbox
											id={item}
											fieldName={item}
											register={register}
											index={index}
											name="insurers"
										/>
									))}
								</CardBlock>
							</AccordionContent>
						</CustomAccordion>
					</AccordionTab>
				</Col>
			</Col>
		</CardOtherItem>
	);
};

const AddOnTitle = styled.div`
	float: left;
	width: 100%;
	font-family: "Inter-SemiBold";
	font-size: 16px;
	line-height: 20px;
	color: #333;
	padding-bottom: 10px;
	border-bottom: solid 1px #e3e4e8;
`;
const CardOtherItem = styled.div`
	display: inline-block;
	margin-top: "20px" 
	position: relative;
	// width: 303px;
	margin-right: 16px;
	padding: 10px 0 0;
	border-radius: 4px;
	/* box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1); */
	box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1),
		0 10px 10px -5px rgba(0, 0, 0, 0.04);
	/* border: solid 1px #e3e4e8; */
	background-color: #ffffff;
	text-align: center;
	width: 100%;
`;

const AccordionTab = styled.div`
	text-align: left;
	margin-top: 40px;
`;

const CardBlock = styled.div`
	-moz-box-flex: 1;
	flex: 1 1 auto;
	color: #232323;
	padding: 20px;
	box-shadow: inset 0px 4px 5px rgba(0, 0, 0, 0.1);
	border-top: 1px soild #000;
	border-radius: 0;
`;
const InputFieldSmall = styled.div`
	margin-top: 6px;
	margin-bottom: 12px;
	.form-control {
		display: block;
		font-size: 12px;
		width: 90%;
		margin-left: 35px;
		color: #495057;
		background-color: #fff;
		background-clip: padding-box;
		border: 1px solid #999;
		border-radius: 50px;
		transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	}
	.form-control:active,
	.form-control:focus {
		border: solid 2px #000;
		border-radius: 0px !important;
	}
`;
