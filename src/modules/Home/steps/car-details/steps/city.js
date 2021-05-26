import React, { useState, useEffect } from "react";
import { Tile, MultiSelect, Btn } from "components";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";

const DummyOthers = [
	{
		name: "Mumbai",
		label: "Mumbai",
		value: "1",
		id: "1",
	},
	{
		name: "Chennai",
		label: "Chennai",
		value: "2",
		id: "2",
	},
	{
		name: "Kolkata",
		label: "Kolkata",
		value: "3",
		id: "3",
	},
];

const DummySub = [
	{
		name: "MH-27",
		label: "MH-27",
		value: "1",
		id: "1",
	},
	{
		name: "MH-01",
		label: "MH-01",
		value: "2",
		id: "2",
	},
	{
		name: "MH-40",
		label: "MH-40",
		value: "3",
		id: "3",
	},
];

// validation schema
const yupValidate = yup.object({
	city: yup.array().required("City is required").nullable(),
});

export const City = ({ stepFn }) => {
	const { handleSubmit, register, watch, control, errors } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});

	const sub_no = watch("sub_no");
	const city = watch("city");

	// useEffect(() => {
	// 	if (!_.isEmpty(city)) {
	// 		stepFn(5, city?.value, 6);
	// 	}
	// 	if (!_.isEmpty(sub_no)) {
	// 		stepFn(5, sub_no?.value, 6);
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [city, sub_no]);

	const onSubmit = (data) => {
		console.log(data);
		stepFn(5, data, 6);
	};

	return (
		<Row className="mx-auto d-flex no-wrap mt-4 w-100">
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Col xs="12" sm="12" md="12" lg="12" xl="12">
					<Controller
						control={control}
						name="city"
						defaultValue={""}
						render={({ onChange, onBlur, value, name }) => (
							<MultiSelect
								name={name}
								onChange={onChange}
								ref={register}
								value={value}
								onBlur={onBlur}
								isMulti={false}
								options={DummyOthers}
								placeholder={"Select City"}
								errors={errors.city}
								Styled
								closeMenuOnSelect
							/>
						)}
					/>
				</Col>
				{city && (
					<Col xs="12" sm="12" md="12" lg="12" xl="12" className="mt-4">
						<Controller
							control={control}
							name="sub_no"
							defaultValue={""}
							render={({ onChange, onBlur, value, name }) => (
								<MultiSelect
									required
									name={name}
									onChange={onChange}
									ref={register}
									value={value}
									onBlur={onBlur}
									isMulti={false}
									options={DummySub}
									placeholder={"Select"}
									Styled
									closeMenuOnSelect
								/>
							)}
						/>
					</Col>
				)}
				<Col
					sm="12"
					md="12"
					lg="12"
					xl="12"
					className="d-flex justify-content-center mt-4"
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
