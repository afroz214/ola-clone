import React, { useState, useEffect } from "react";
import { Tile, MultiSelect, Button as Btn, Error } from "components";
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

export const City = ({ stepFn }) => {
	const [Val, setVal] = useState(false);
	// validation schema
	const yupValidate = yup.object({
		city: yup.string().required("City is required").nullable(),
		...(Val && { sub_no: yup.string().required("Sub No. is required") }),
	});

	const { handleSubmit, register, watch, control, errors } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});

	const sub_no = watch("sub_no");
	console.log(sub_no);
	const city = watch("city");
	// console.log(Val);

	useEffect(() => {
		if (!_.isEmpty(DummySub) && DummySub) {
			setVal(true);
		}
		else {
			setVal(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [city]);

	const onSubmit = (data) => {
		console.log(data);
		stepFn(5, data, 6);
	};

	return (
		<Row className="mx-auto d-flex no-wrap mt-4 w-100">
			<Form onSubmit={handleSubmit(onSubmit)} className="w-100">
				<Col xs="12" sm="12" md="12" lg="12" xl="12" className="w-100">
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
								closeOnSelect={true}
							/>
						)}
					/>
					{!!errors?.city && <Error className='mt-1'>{errors?.city?.message}</Error>}
				</Col>
				{city && (
					<Col xs="12" sm="12" md="12" lg="12" xl="12" className="mt-4 w-100">
						<h2 className="w-100 text-center mb-4">RTO</h2>
						<Controller
							control={control}
							name="sub_no"
							render={({ onChange, onBlur, value, name }) => (
								<MultiSelect
									name={name}
									onChange={onChange}
									ref={register}
									value={value}
									onBlur={onBlur}
									isMulti={false}
									options={DummySub}
									errors={errors.sub_no}
									placeholder={"Select"}
									Styled
									closeOnSelect={true}
								/>
							)}
						/>
						{!!errors?.sub_no && <Error className='mt-1'>{errors?.sub_no?.message}</Error>}
					</Col>
				)}
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
