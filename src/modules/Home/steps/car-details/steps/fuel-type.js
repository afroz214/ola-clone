import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { Tile, Button as Btn, TextInput, Label, Error } from "components";
import swal from "sweetalert";

const Fuel = [
	{
		name: "Petrol",
		label: "Petrol",
		value: "1",
		id: "1",
		logo: "/assets/images/petrol8.png",
	},
	{
		name: "Diesel",
		label: "Diesel",
		value: "2",
		id: "2",
		logo: "/assets/images/oil.png",
	},
	{
		name: "CNG/LPG",
		label: "CNG/LPG",
		value: "3",
		id: "3",
		logo: "/assets/images/cng2.png",
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
			swal(errors?.fuel?.message, "", "error");
		}
	}, [errors]);

	const handleChange = () => {};

	return (
		<>
			{
				<>
					<Form onSubmit={handleSubmit(onSubmit)} className="w-100 mx-auto">
						<Row className="mx-auto d-flex justify-content-center w-100 mx-auto">
							{Fuel.map((item, index) => (
								<Col
									xs="6"
									sm="6"
									md="4"
									lg="3"
									xl="3"
									className="d-flex justify-content-center w-100 mx-auto"
								>
									<Tile
										logo={item?.logo}
										text={item?.name}
										id={item?.id}
										register={register}
										name={"fuel"}
										value={item?.value}
										height="130px"
										width="150px"
										imgMargin={"10px"}
										setValue={setValue}
										Selected={fuel}
										Imgheight={"70px"}
									/>
								</Col>
							))}
							{Number(watch("fuel")) === 3 && (
								<Col
									sm="12"
									md="12"
									lg="12"
									xl="12"
									className="mt-4  d-flex flex-column align-content-center w-100 mx-auto"
								>
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
							)}
						</Row>
						<Row className="d-flex justify-content-center w-100 mx-auto">
							<Col
								sm="12"
								md="12"
								lg="12"
								xl="12"
								className="d-flex justify-content-center mt-5 w-100 mx-auto"
							>
								<Btn
									buttonStyle="outline-solid"
									hex1="#006400"
									hex2="#228B22"
									borderRadius="5px"
									type="submit"
									className='mr-2'
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
