import React, { useState, useEffect } from "react";
import { Tile, MultiSelect, Button as Btn, Error } from "components";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import DateInput from "../DateInput";

const DummyOthers = [
	{
		name: "2019",
		label: "2019",
		value: "2019",
		id: "2019",
	},
	{
		name: "2020",
		label: "2020",
		value: "2020",
		id: "2020",
	},
	{
		name: "2021",
		label: "2021",
		value: "2021",
		id: "2021",
	},
];

export const YearCM = ({ stepFn }) => {
	// validation schema
	const yupValidate = yup.object({
		year: yup.string().required("year is required").nullable(),
	});

	const { handleSubmit, register, watch, control, errors } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});

	// console.log(Val);

	// useEffect(() => {
	// 	if (!_.isEmpty(DummySub) && DummySub) {
	// 		setVal(true);
	// 	}
	// 	else {
	// 		setVal(false);
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [year]);

	const onSubmit = (data) => {
		console.log(data);
		stepFn(6, data, 7);
	};

	return (
		<Row className="mx-auto d-flex no-wrap mt-4 w-100">
			<Form onSubmit={handleSubmit(onSubmit)} className="w-100">
				<Col xs="12" sm="12" md="12" lg="12" xl="12" className="w-100">
					<div className="py-2 dateTimeThree">
						<Controller
							control={control}
							name="year"
							defaultValue={""}
							render={({ onChange, onBlur, value, name }) => (
								<DateInput
									minDate={false}
									value={value}
									name={name}
									onChange={onChange}
									ref={register}
									error={errors && errors?.year}
								/>
							)}
						/>
						{!!errors?.year && (
							<Error className="mt-1">{errors?.year?.message}</Error>
						)}
					</div>
				</Col>
				<Col
					sm="12"
					md="12"
					lg="12"
					xl="12"
					className="d-flex justify-content-center mt-5"
				>
					<Btn
						buttonStyle="outline-solid"
						hex1="#006400"
						hex2="#228B22"
						borderRadius="5px"
						type="submit"
					>
						Proceed
					</Btn>
				</Col>
			</Form>
		</Row>
	);
};
