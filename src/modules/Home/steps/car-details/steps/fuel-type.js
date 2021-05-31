import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { Tile, Button as Btn, TextInput, Label, Error } from "components";
import swal from 'sweetalert';

const Fuel = [
	{
		name: "Petrol",
		label: "Petrol",
		value: "1",
		id: "1",
		logo: "/assets/images/fuel/fuel-station.png",
	},
	{
		name: "Diesel",
		label: "Diesel",
		value: "2",
		id: "2",
		logo: "/assets/images/fuel/diesel.png",
	},
	{
		name: "CNG",
		label: "CNG",
		value: "3",
		id: "3",
		logo: "/assets/images/fuel/gas-bottle.png",
	},
];

// validation schema
const yupValidate = yup.object({
	fuel: yup.string().required("Fuel type is required").nullable(),
	kit_val: yup.string().required("Kit value is required"),
});

export const FuelType = ({ stepFn }) => {
	const { handleSubmit, register, watch, control, errors, setValue } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});

	const kit_val = watch("kit_val");
	const fuel = watch("fuel");

	const onSubmit = (data) => {
		console.log(data);
		stepFn(3, data, 4);
	};

	useEffect(() => {
		if (errors?.fuel?.message) {
			swal(errors?.fuel?.message, "", 'error');
		}
	}, [errors]);

	const handleChange = () => {};

	return (
		<>
			{
				<>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Row className="mx-auto d-flex justify-content-center">
							{Fuel.map((item, index) => (
								<Col
									xs="6"
									sm="6"
									md="4"
									lg="3"
									xl="3"
									className="d-flex justify-content-center"
								>
									<Tile
										// logo={item?.logo}
										text={item?.name}
										id={item?.id}
										register={register}
										name={"fuel"}
										value={item?.value}
										height="100px"
										width="150px"
										imgMargin={"10px"}
										setValue={setValue}
										Selected={fuel}
									/>
								</Col>
							))}
							<Col sm="12" md="12" lg="12" xl="12" className="mt-4">
								<TextInput
									lg
									type="text"
									id="kit_val"
									name="kit_val"
									placeholder=" "
									ref={register}
									onChange={handleChange}
									error={errors?.kit_val}
								/>
								<Label lg htmlFor="kit_val">
									Enter kit value
								</Label>
								{!!errors?.kit_val && (
									<Error className="mt-1">{errors?.kit_val?.message}</Error>
								)}
							</Col>
						</Row>
						<Row>
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
						</Row>
					</Form>
				</>
			}
		</>
	);
};
