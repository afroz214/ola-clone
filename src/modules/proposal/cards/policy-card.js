import React, { useState, useEffect, useMemo } from "react";
import { Button, ErrorMsg } from "../../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Row, Col, Form, ToggleButton } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { FormGroupTag, ButtonGroupTag, H4Tag2, ColDiv } from "../style.js";
import DateInput from "../DateInput";
import _ from "lodash";
import { numOnly } from "../../../utils";
import { subYears } from "date-fns";

/*----------------Validation Schema---------------------*/
const yupValidate = yup.object({
	previous_ic_name: yup
		.string()
		.required("Previous insurance company is required")
		.min(2, "Minimum 2 chars required")
		.matches(/^([A-Za-z\s])+$/, "Must contain only alphabets"),
	policy_expiry_date: yup.string().required("Expiry date is required"),
	policy_number: yup.string().required("Policy number is required"),
	previous_ic_address: yup.string().required("Address is required"),
	previousv_ic_pincode: yup
		.string()
		.required("Pincode is Required")
		.matches(/^[0-9]+$/, "Must be only digits")
		.min(6, "Must be 6 digits")
		.max(6, "Must be 6 digits"),
});
/*----------x------Validation Schema----------x-----------*/

const PolicyCard = ({ onSubmitPrepolicy, prepolicy }) => {
	const { handleSubmit, register, errors, control, reset, watch, setValue } =
		useForm({
			defaultValues: !_.isEmpty(prepolicy) ? prepolicy : {},
			resolver: yupResolver(yupValidate),
			mode: "onBlur",
			reValidateMode: "onBlur",
		});

	return (
		<Form onSubmit={handleSubmit(onSubmitPrepolicy)}>
			<Row style={{ margin: "-60px -20px 20px -30px" }} className="p-2">
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Previous Insurance Company</FormGroupTag>
						<Form.Control
							type="text"
							placeholder="Insurance Company"
							name={`previous_ic_name`}
							ref={register}
							maxLength="50"
							onInput={(e) =>
								(e.target.value =
									e.target.value.length <= 1
										? ("" + e.target.value).toUpperCase()
										: e.target.value)
							}
							minlength="2"
							size="sm"
						/>
						{!!errors?.previous_ic_name && (
							<ErrorMsg fontSize={"12px"}>{errors?.previous_ic_name.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2 dateTimeOne">
						<FormGroupTag>Date of expiry</FormGroupTag>
						<Controller
							control={control}
							name={`policy_expiry_date`}
							render={({ onChange, onBlur, value, name }) => (
								<DateInput
									value={value}
									name={name}
									onChange={onChange}
									ref={register}
								/>
							)}
						/>
						{!!errors?.policy_expiry_date && (
							<ErrorMsg fontSize={"12px"}>
								{errors?.policy_expiry_date.message}
							</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Policy Number</FormGroupTag>
						<Form.Control
							type="text"
							placeholder="Policy Number"
							name={`policy_number`}
							ref={register}
							maxLength="50"
							onInput={(e) =>
								(e.target.value =
									e.target.value.length <= 1
										? ("" + e.target.value).toUpperCase()
										: e.target.value)
							}
							minlength="2"
							size="sm"
						/>
						{!!errors?.policy_number && (
							<ErrorMsg fontSize={"12px"}>{errors?.policy_number.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Previous Insurance Company Address</FormGroupTag>
						<Form.Control
							type="text"
							placeholder="Insurance Company"
							name={`previous_ic_address`}
							ref={register}
							maxLength="50"
							onInput={(e) =>
								(e.target.value =
									e.target.value.length <= 1
										? ("" + e.target.value).toUpperCase()
										: e.target.value)
							}
							minlength="2"
							size="sm"
						/>
						{!!errors?.previous_ic_address && (
							<ErrorMsg fontSize={"12px"}>{errors?.previous_ic_address.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Previous Insurer Pincode</FormGroupTag>
						<Form.Control
							name="previousv_ic_pincode"
							ref={register}
							type="tel"
							placeholder="Insurer Pincode"
							errors={errors.pincode}
							size="sm"
							onKeyDown={numOnly}
							maxLength="6"
						/>
						{!!errors.previousv_ic_pincode && (
							<ErrorMsg fontSize={"12px"}>
								{errors.previousv_ic_pincode.message}
							</ErrorMsg>
						)}
					</div>
				</Col>
				<Col sm={12} lg={12} md={12} xl={12} className="d-flex justify-content-center mt-5">
					<Button
						type="submit"
						buttonStyle="outline-solid"
						hex1={"#4ca729"}
						hex2={"#4ca729"}
						borderRadius="5px"
						color="white"
					>
						<text
							style={{
								fontSize: "15px",
								padding: "-20px",
								margin: "-20px -5px -20px -5px",
								fontWeight: "400",
							}}
						>
							{"Proceed"}
						</text>
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default PolicyCard;
