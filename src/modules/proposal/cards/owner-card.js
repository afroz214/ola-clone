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
	pincode: yup
		.string()
		.required("Pincode is Required")
		.matches(/^[0-9]+$/, "Must be only digits")
		.min(6, "Must be 6 digits")
		.max(6, "Must be 6 digits"),
	address_line_1: yup.string().required("Address1 is Required"),
	address_line_2: yup.string().required("Address2 is Required"),
	address_line_3: yup.string().required("Address3 is Required"),
	city_id: yup.string().required("Required"),
	state_id: yup.string().required("Required"),
	gstin: yup
		.string()
		.nullable()
		.transform((v, o) => (o === "" ? null : v))
		.matches(
			/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
			"GST number invalid"
		),
	pan_no: yup
		.string()
		.nullable()
		.transform((v, o) => (o === "" ? null : v))
		.matches(
			/[a-zA-Z]{3}[PCHFATBLJG]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$/,
			"PAN number invalid"
		),
	email: yup
		.string()
		.email("Please enter valid email id")
		.min(2, "Minimum 2 chars required")
		.max(50, "Must be less than 50 chars")
		.required("Email id is required"),
	mobile_no: yup
		.string()
		.required("Mobile No. is required")
		.matches(/^[7-9][0-9]{9}$/, "Must be only digits")
		.min(10, "Mobile No. should be 10 digits")
		.max(10, "Mobile No. should be 10 digits"),
	dob: yup.string().required("DOB is required"),
	gender: yup
		.string()
		.required("Gender is required")
		.matches(/^([A-Za-z\s])+$/, "Salutation and gender doesn't match"),
	last_name: yup
		.string()
		.required("Last Name is required")
		.min(2, "Minimum 2 chars required")
		.max(50, "Must be less than 50 chars")
		.matches(/^([A-Za-z\s])+$/, "Must contain only alphabets"),
	first_name: yup
		.string()
		.required("First Name is required")
		.matches(/^([A-Za-z\s])+$/, "Must contain only alphabets")
		.min(2, "Minimum 2 chars required")
		.max(50, "Must be less than 50 chars"),
	marital_status: yup.string().required("Marital Status is required"),
	occupation_type: yup.string().required("Occupation is required"),
});
/*----------x------Validation Schema----------x-----------*/

/*---------------date config----------------*/
const AdultCheck = subYears(new Date(Date.now() - 86400000), 18);
/*-----x---------date config-----x----------*/

const Occupations = [
	{ name: "Occupation 1", id: 1 },
	{ name: "Occupation 2", id: 2 },
	{ name: "Occupation 3", id: 3 },
];

const OwnerCard = ({ onSubmitOwner, owner }) => {
	const { handleSubmit, register, errors, control, reset, setValue, watch } =
		useForm({
			defaultValues: !_.isEmpty(owner) ? owner : {},
			resolver: yupResolver(yupValidate),
			mode: "onBlur",
			reValidateMode: "onBlur",
		});

	/*----------------gender config-----------------------*/
	const radios = [
		{ name: "Male", value: "1" },
		{ name: "Female", value: "2" },
	];

	const [radioValue, setRadioValue] = useState(watch("gender"));

	//gender auto select fn
	const GenderAutoSel = (radioVal, GenderVar) => {
		switch (GenderVar) {
			case 1:
				radioVal("Male");
				break;
			case 2:
				radioVal("Female");
				break;
			case 3:
				radioVal("Female");
				break;
			case 4:
				return <noscript />;
			default:
				return <noscript />;
		}
	};

	// Gender Variables
	const GenderVar = watch("salutation_id") * 1;

	useMemo(() => {
		GenderAutoSel(setRadioValue, GenderVar);
	}, [GenderVar]);
	/*--------x-------gender config--------x--------------*/

	/*--------- marital status-----*/
	const maritalStatus = [
		{ name: "Single", value: "1" },
		{ name: "Married", value: "2" },
	];

	const [radioValue2, setRadioValue2] = useState(watch("marital_status"));
	/*----x---- marital status--x--*/

	//setting hidden i/p
	const OccupationType = watch("occupation_type");
	const OccupationName = Occupations.filter(
		({ id }) => id === Number(OccupationType)
	)[0]?.name;

	return (
		<Form onSubmit={handleSubmit(onSubmitOwner)}>
			<Row style={{ margin: "-60px -20px 20px -30px" }} className="p-1">
				<H4Tag2>Almost Done! Just a few more details.</H4Tag2>
				<ColDiv
					xs={12}
					sm={12}
					md={12}
					className=" mt-3"
					style={{ marginBottom: "-10px" }}
				>
					<p
						style={{
							color: "#004b83",
							fontSize: "16px",
							fontWeight: "600",
						}}
					>
						Owner Details
					</p>
				</ColDiv>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="w-100">
					<div className="py-2 w-100">
						<FormGroupTag>First Name</FormGroupTag>
						<div className="d-flex w-100 fname">
							<div
								style={{
									maxWidth: "23%",
									width: "23%",
									paddingRight: "2px",
								}}
							>
								<Form.Control
									as="select"
									size="sm"
									ref={register}
									name="salutation_id"
									className="title_list"
								>
									<option selected value="1">
										Mr
									</option>
									<option value="2">Ms</option>
									<option value="3">Mrs</option>
									<option value="4">Dr</option>
								</Form.Control>
							</div>
							<div style={{ maxWidth: "77%", width: "77%" }} className="fname1">
								<Form.Control
									ref={register}
									errors={errors.first_name}
									name="first_name"
									type="text"
									onInput={(e) =>
										(e.target.value =
											e.target.value.length <= 1
												? ("" + e.target.value).toUpperCase()
												: e.target.value)
									}
									maxLength="50"
									minlength="2"
									placeholder="First Name"
									size="sm"
								/>
								{!!errors.first_name && (
									<ErrorMsg fontSize={"12px"}>{errors.first_name.message}</ErrorMsg>
								)}
							</div>
						</div>
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Last Name</FormGroupTag>
						<Form.Control
							type="text"
							placeholder="Last Name"
							name="last_name"
							maxLength="50"
							minlength="2"
							ref={register}
							onInput={(e) =>
								(e.target.value =
									e.target.value.length <= 1
										? ("" + e.target.value).toUpperCase()
										: e.target.value)
							}
							errors={errors.last_name}
							size="sm"
						/>
						{!!errors.last_name && (
							<ErrorMsg fontSize={"12px"}>{errors.last_name.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<FormGroupTag style={{ paddingTop: "10px" }}>Gender</FormGroupTag>
					<div className="" style={{ width: "100%", paddingTop: "2px" }}>
						<ButtonGroupTag toggle style={{ width: "100%" }}>
							{radios.map((radio, idx) => (
								<ToggleButton
									style={{
										minWidth: "fill-available",
										width: "fill-available",
										minHeight: "32px",
									}}
									key={idx}
									className={radio.value === "1" ? "mb-2 mr-4" : "mb-2"}
									type="radio"
									variant="secondary"
									ref={register}
									size="sm"
									name="gender1"
									value={radio.name}
									checked={radioValue === radio.name}
									onChange={(e) => {
										setRadioValue(e.target.value);
									}}
								>
									{radio.name}
								</ToggleButton>
							))}
						</ButtonGroupTag>
					</div>
					<input
						type="hidden"
						name="gender"
						value={
							radioValue === "Male" && watch("salutation_id") * 1 === 1
								? radioValue
								: radioValue === "Female" && watch("salutation_id") * 1 !== 1
								? radioValue
								: watch("salutation_id") * 1 === 4
								? radioValue
								: radioValue
								? "@"
								: ""
						}
						ref={register}
					/>
					{!!errors.gender && (
						<ErrorMsg fontSize={"12px"} style={{ marginTop: "-3px" }}>
							{errors.gender.message}
						</ErrorMsg>
					)}
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2 dateTimeOne">
						<FormGroupTag>Date of Birth</FormGroupTag>
						<Controller
							control={control}
							name="dob"
							render={({ onChange, onBlur, value, name }) => (
								<DateInput
									minDate={false}
									maxDate={AdultCheck}
									value={value}
									name={name}
									onChange={onChange}
									ref={register}
								/>
							)}
						/>
						{!!errors.dob && (
							<ErrorMsg fontSize={"12px"}>{errors.dob.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Mobile Number</FormGroupTag>
						<Form.Control
							name="mobile_no"
							ref={register}
							type="tel"
							placeholder="Mobile Number"
							errors={errors.mobile_no}
							size="sm"
							onKeyDown={numOnly}
							maxLength="10"
						/>
						{!!errors.mobile_no && (
							<ErrorMsg fontSize={"12px"}>{errors.mobile_no.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Official Email ID</FormGroupTag>
						<Form.Control
							type="email"
							placeholder="Email Id"
							size="sm"
							name="email"
							maxLength="50"
							ref={register}
							errors={errors.email}
						/>
						{!!errors.email && (
							<ErrorMsg fontSize={"12px"}>{errors.email.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>PAN No (Optional)</FormGroupTag>
						<Form.Control
							type="text"
							placeholder="PAN No"
							size="sm"
							ref={register}
							name="pan_no"
							maxLength="10"
							onInput={(e) => (e.target.value = ("" + e.target.value).toUpperCase())}
						/>
						{errors.pan_no ? (
							<ErrorMsg fontSize={"12px"}>{errors.pan_no.message}</ErrorMsg>
						) : (
							<Form.Text className="text-muted">
								<text style={{ color: "#bdbdbd" }}>e.g AAAPL1234C</text>
							</Form.Text>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>GSTIN (Optional)</FormGroupTag>
						<Form.Control
							type="text"
							placeholder="GSTIN"
							size="sm"
							ref={register}
							name="gstin"
							onInput={(e) => (e.target.value = ("" + e.target.value).toUpperCase())}
						/>
						{errors.gstin ? (
							<ErrorMsg fontSize={"12px"}>{errors.gstin.message}</ErrorMsg>
						) : (
							<Form.Text className="text-muted">
								<text style={{ color: "#bdbdbd" }}>e.g 18AABCU9603R1ZM</text>
							</Form.Text>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2 fname">
						<FormGroupTag>Occupation Type</FormGroupTag>
						<Form.Control
							as="select"
							size="sm"
							ref={register}
							name="occupation_type"
							className="title_list"
						>
							{Occupations.map(({ name, id }, index) => (
								<option selected={index === 0 ? true : false} value={id}>
									{name}
								</option>
							))}
						</Form.Control>
					</div>
					{watch("occupation_type") && (
						<input
							type="hidden"
							ref={register}
							name="occupation_name"
							value={OccupationName}
						/>
					)}
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<FormGroupTag style={{ paddingTop: "10px" }}>Marital Status</FormGroupTag>
					<div className="" style={{ width: "100%", paddingTop: "2px" }}>
						<ButtonGroupTag toggle style={{ width: "100%" }}>
							{maritalStatus.map((item, idx) => (
								<ToggleButton
									style={{
										minWidth: "fill-available",
										width: "fill-available",
										minHeight: "32px",
									}}
									key={idx}
									className={item.value === "1" ? "mb-2 mr-4" : "mb-2"}
									type="radio"
									variant="secondary"
									ref={register}
									size="sm"
									name="maritalS"
									value={item.name}
									checked={radioValue2 === item.name}
									onChange={(e) => {
										setRadioValue2(e.target.value);
									}}
								>
									{item.name}
								</ToggleButton>
							))}
						</ButtonGroupTag>
					</div>
					<input
						type="hidden"
						name="marital_status"
						value={radioValue2}
						ref={register}
					/>
					{!!errors.marital_status && (
						<ErrorMsg fontSize={"12px"} style={{ marginTop: "-3px" }}>
							{errors.marital_status.message}
						</ErrorMsg>
					)}
				</Col>
				<Col
					xs={12}
					sm={12}
					md={12}
					lg={12}
					xl={12}
					className=" mt-1"
					style={{ marginBottom: "-10px" }}
				>
					<p
						style={{
							color: "#1a5105",
							fontSize: "16px",
							fontWeight: "600",
						}}
					>
						Communication Address
					</p>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Address Line 1</FormGroupTag>
						<Form.Control
							type="text"
							placeholder="Address Line 1"
							name="address_line_1"
							maxLength="50"
							minlength="2"
							ref={register}
							onInput={(e) =>
								(e.target.value =
									e.target.value.length <= 1
										? ("" + e.target.value).toUpperCase()
										: e.target.value)
							}
							errors={errors.address_line_1}
							size="sm"
						/>
						{!!errors.address_line_1 && (
							<ErrorMsg fontSize={"12px"}>{errors.address_line_1.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Address Line 2</FormGroupTag>
						<Form.Control
							type="text"
							placeholder="Address Line 2"
							name="address_line_2"
							maxLength="50"
							minlength="2"
							ref={register}
							onInput={(e) =>
								(e.target.value =
									e.target.value.length <= 1
										? ("" + e.target.value).toUpperCase()
										: e.target.value)
							}
							errors={errors.address_line_2}
							size="sm"
						/>
						{!!errors.address_line_2 && (
							<ErrorMsg fontSize={"12px"}>{errors.address_line_2.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Address Line 3</FormGroupTag>
						<Form.Control
							type="text"
							placeholder="Address Line 3"
							name="address_line_3"
							maxLength="50"
							minlength="2"
							ref={register}
							onInput={(e) =>
								(e.target.value =
									e.target.value.length <= 1
										? ("" + e.target.value).toUpperCase()
										: e.target.value)
							}
							errors={errors.address_line_3}
							size="sm"
						/>
						{!!errors.address_line_3 && (
							<ErrorMsg fontSize={"12px"}>{errors.address_line_3.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Pincode</FormGroupTag>
						<Form.Control
							name="pincode"
							ref={register}
							type="tel"
							placeholder="Pincode"
							errors={errors.pincode}
							size="sm"
							onKeyDown={numOnly}
							maxLength="6"
						/>
						{!!errors.pincode && (
							<ErrorMsg fontSize={"12px"}>{errors.pincode.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>State</FormGroupTag>
						<Form.Control
							name="state"
							ref={register}
							type="text"
							placeholder="State"
							errors={errors.state}
							size="sm"
							defaultValue={"Maharastra"}
							readOnly
						/>
						{!!errors.state && (
							<ErrorMsg fontSize={"12px"}>{errors.state.message}</ErrorMsg>
						)}
					</div>
					<input name="state_id" ref={register} type="hidden" value={"1"} />
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>City</FormGroupTag>
						<Form.Control
							name="city"
							ref={register}
							type="text"
							placeholder="City"
							errors={errors.city}
							size="sm"
							defaultValue={"Mumbai"}
							readOnly
						/>
						{!!errors.city && (
							<ErrorMsg fontSize={"12px"}>{errors.city.message}</ErrorMsg>
						)}
					</div>
					<input name="city_id" ref={register} type="hidden" value={"1"} />
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
							{"Proceed to Nominee"}
						</text>
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default OwnerCard;
