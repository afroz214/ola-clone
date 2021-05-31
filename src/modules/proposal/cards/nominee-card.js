import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col } from "react-bootstrap";
import { Button, ErrorMsg } from "../../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { FormGroupTag } from "../style.js";
import DateInput from "../DateInput";
import _ from "lodash";
import { subYears } from "date-fns";
import moment from "moment";

/*---------------date config----------------*/
const AdultCheck = subYears(new Date(Date.now() - 86400000), 18);
/*-----x---------date config-----x----------*/

/*----------------Validation Schema---------------------*/
const yupValidate = yup.object({
	nominee_name: yup
		.string()
		.required("Nominee Name is required")
		.min(2, "Minimum 2 chars required")
		.matches(/^([A-Za-z\s])+$/, "Must contain only alphabets"),
	nominee_dob: yup.string().required("DOB is required"),
	nominee_relation_id: yup
		.string()
		.required("Required")
		.matches(/[1-9]\d*|0\d+/, "Nominee Relation Required"),
});
/*----------x------Validation Schema----------x-----------*/

const Relations = [
	{ name: "Father", id: 1 },
	{ name: "Mother", id: 2 },
	{ name: "Spouse", id: 3 },
];

const NomineeCard = ({ onSubmitNominee, nominee }) => {
	const { handleSubmit, register, errors, control, reset, watch, setValue } =
		useForm({
			defaultValues: !_.isEmpty(nominee) ? nominee : {},
			resolver: yupResolver(yupValidate),
			mode: "onBlur",
			reValidateMode: "onBlur",
		});

	//setting hidden i/p
	const NomineeRel = watch("nominee_relation_id");
	const NomineeRelName = Relations.filter(
		({ id }) => id === Number(NomineeRel)
	)[0]?.name;

	return (
		<Form onSubmit={handleSubmit(onSubmitNominee)}>
			<Row style={{ margin: "-60px -20px 20px -30px" }} className="p-2">
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2">
						<FormGroupTag>Nominee Name</FormGroupTag>
						<Form.Control
							type="text"
							placeholder="Nominee Name"
							name={`nominee_name`}
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
						{!!errors?.nominee_name && (
							<ErrorMsg fontSize={"12px"}>{errors?.nominee_name.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2 dateTimeOne">
						<FormGroupTag>Nominee DOB</FormGroupTag>
						<Controller
							control={control}
							name={`nominee_dob`}
							render={({ onChange, onBlur, value, name }) => (
								<DateInput
									maxDate={AdultCheck}
									value={value}
									name={name}
									onChange={onChange}
									ref={register}
								/>
							)}
						/>
						{!!errors?.nominee_dob && (
							<ErrorMsg fontSize={"12px"}>{errors?.nominee_dob.message}</ErrorMsg>
						)}
					</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={6} xl={4} className="">
					<div className="py-2 fname">
						<FormGroupTag>Relationship with the Proposar</FormGroupTag>
						<Form.Control
							as="select"
							size="sm"
							ref={register}
							name={`nominee_relation_id`}
						>
							{Relations.map(({ name, id }, index) => (
								<option selected={index === 0 ? true : false} value={id}>
									{name}
								</option>
							))}
						</Form.Control>
						{!!errors?.nominee_relation_id && (
							<ErrorMsg fontSize={"12px"}>
								{errors?.nominee_relation_id.message}
							</ErrorMsg>
						)}
					</div>
					{watch("nominee_relation_id") && (
						<input
							type="hidden"
							name={"relationship_with_owner"}
							ref={register}
							value={NomineeRelName}
						/>
					)}
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
							{"Proceed to Vehicle"}
						</text>
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default NomineeCard;
