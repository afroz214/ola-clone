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

/*---------------date config----------------*/
const AdultCheck = subYears(new Date(Date.now() - 86400000), 18);
/*-----x---------date config-----x----------*/

const Agreement = [
	{ name: "No", id: 0 },
	{ name: "Yes", id: 1 },
];

const Bank = [
	{ name: "bank 1", id: 1 },
	{ name: "bank 2", id: 2 },
	{ name: "bank 3", id: 3 },
];

const CityBranch = [
	{ name: "Branch 1", id: 1 },
	{ name: "Branch 2", id: 2 },
	{ name: "Branch 3", id: 3 },
];

const VehicleCard = ({ onSubmitVehicle, vehicle }) => {
	const [addValidation, setAddValidation] = useState(false);
	const [financeValidation, setFinanceValidation] = useState(false);

	/*----------------Validation Schema---------------------*/
	const yupValidate = yup.object({
		...(addValidation && {
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
		}),
		engine_no: yup.string().required("Engine Number is required"),
		manufacture_date: yup.string().required("Manufacture date is required"),
		chasis_no: yup.string().required("Chasis Number is required"),
		...(financeValidation && {
			financer_sel: yup.string().required("Financer is required"),
			financer_type: yup.string().required("Financer Type is required"),
			financer_city: yup.string().required("Financer city/branch is required"),
		}),
	});
	/*----------x------Validation Schema----------x-----------*/

	const { handleSubmit, register, errors, control, reset, setValue, watch } =
		useForm({
			defaultValues: !_.isEmpty(vehicle) ? vehicle : {},
			resolver: yupResolver(yupValidate),
			mode: "onBlur",
			reValidateMode: "onBlur",
		});

	//setting validations
	const financer = watch("financer");
	const car_address = watch("car_address");

	useEffect(() => {
		if (financer) {
			setFinanceValidation(true);
		} else {
			setFinanceValidation(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [financer]);

	useEffect(() => {
		if (car_address) {
			setAddValidation(true);
		} else {
			setAddValidation(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [car_address]);

	//Toggle
	const ToggleElem = (name, content) => (
		<Col xs={12} sm={12} md={12} lg={12} xl={12} className="">
			<div className="toggleRadio m-0">
				<label
					className="selectLabel ml-0"
					style={{
						color: "#00CC00",
						letterSpacing: "1px",
						fontSize: "12px",
					}}
				>
					{content}
				</label>
				<label className="selectLabel ml-0">No</label>
				<label className="switch yes-switch">
					<input
						name={name}
						type="checkbox"
						id={name}
						className="min-y"
						ref={register}
					/>
					<span className="slider round"></span>
				</label>
				<label class="selectLabel">Yes</label>
			</div>
		</Col>
	);

	//setting hidden i/p
	const financer_sel = watch("financer_sel");
	const BankName = Bank.filter(({ id }) => id === Number(financer_sel))[0]?.name;

	const financer_city = watch("financer_city");
	const BranchName = CityBranch.filter(
		({ id }) => id === Number(financer_city)
	)[0]?.name;

	return (
		<Form onSubmit={handleSubmit(onSubmitVehicle)}>
			<Row style={{ margin: "-60px -20px 20px -30px" }} className="p-2">
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Engine Number</FormGroupTag>
						<Form.Control
							type="text"
							placeholder="Engine Number"
							name="engine_no"
							maxLength="50"
							minlength="2"
							ref={register}
							onInput={(e) =>
								(e.target.value =
									e.target.value.length <= 1
										? ("" + e.target.value).toUpperCase()
										: e.target.value)
							}
							errors={errors.engine_no}
							size="sm"
						/>
						{!!errors.engine_no && (
							<ErrorMsg fontSize={"12px"}>{errors.engine_no.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2 dateTimeOne">
						<FormGroupTag>Manufacture Date</FormGroupTag>
						<Controller
							control={control}
							name="manufacture_date"
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
						{!!errors.manufacture_date && (
							<ErrorMsg fontSize={"12px"}>{errors.manufacture_date.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Chasis Number</FormGroupTag>
						<Form.Control
							name="chasis_no"
							ref={register}
							type="text"
							placeholder="Chasis Number"
							errors={errors.chasis_no}
							size="sm"
							maxLength="50"
						/>
						{!!errors.chasis_no && (
							<ErrorMsg fontSize={"12px"}>{errors.chasis_no.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Vehicle Color</FormGroupTag>
						<Form.Control
							type="text"
							placeholder="Vehicle Color"
							size="sm"
							name="vehicle_color"
							maxLength="50"
							ref={register}
							errors={errors.vehicle_color}
						/>
						{!!errors.vehicle_color && (
							<ErrorMsg fontSize={"12px"}>{errors.vehicle_color.message}</ErrorMsg>
						)}
					</div>
				</Col>
				{ToggleElem("puc", "Do you have a valid PUC Certificate?")}
				{ToggleElem("financer", "Is your Vehicle Financed?")}
				{watch("financer") && (
					<>
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
								Financer details
							</p>
						</Col>
						<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
							<div className="py-2 fname">
								<FormGroupTag>Select Financer</FormGroupTag>
								<Form.Control
									as="select"
									size="sm"
									ref={register}
									name="financer_sel"
									className="title_list"
								>
									{Bank.map(({ name, id }, index) => (
										<option selected={index === 0 ? true : false} value={id}>
											{name}
										</option>
									))}
								</Form.Control>
							</div>
							{watch("financer_sel") && (
								<input
									type="hidden"
									ref={register}
									name="financer_name"
									value={BankName}
								/>
							)}
						</Col>
						<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
							<div className="py-2 fname">
								<FormGroupTag>Financer agreement type</FormGroupTag>
								<Form.Control
									as="select"
									size="sm"
									ref={register}
									name="financer_type"
									className="title_list"
								>
									{Agreement.map(({ name, id }, index) => (
										<option selected={index === 0 ? true : false} value={id}>
											{name}
										</option>
									))}
								</Form.Control>
							</div>
						</Col>
						<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
							<div className="py-2 fname">
								<FormGroupTag>Financer (City/Branch)</FormGroupTag>
								<Form.Control
									as="select"
									size="sm"
									ref={register}
									name="financer_city"
									className="title_list"
								>
									{CityBranch.map(({ name, id }, index) => (
										<option selected={index === 0 ? true : false} value={id}>
											{name}
										</option>
									))}
								</Form.Control>
							</div>
							{watch("financer_city") && (
								<input
									type="hidden"
									ref={register}
									name="financer_branch"
									value={BranchName}
								/>
							)}
						</Col>
					</>
				)}
				{ToggleElem(
					"car_address",
					"Is your Vehicle registration address not same as communication address?"
				)}
				{watch("car_address") && (
					<>
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
								Vehicle Registration Address
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
					</>
				)}
				<Col sm={12} lg={12} md={12} xl={12}  className="d-flex justify-content-center mt-5">
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
							{"Proceed to Policy"}
						</text>
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default VehicleCard;
