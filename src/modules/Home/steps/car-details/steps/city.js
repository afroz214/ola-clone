import React, { useState, useEffect } from "react";
import { Tile, MultiSelect, Button as Btn, Error } from "components";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { Rto, set_temp_data } from "modules/Home/home.slice";

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
	sub_no: yup.string().required("RTO is required"),
});

export const City = ({ stepFn }) => {
	const dispatch = useDispatch();
	const { rto, temp_data } = useSelector((state) => state.home);
	console.log(rto)
	const { handleSubmit, register, watch, control, errors } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});

	//get rto
	useEffect(() => {
		dispatch(Rto());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSubmit = (data) => {
		console.log(data);
		stepFn(5, data, 6);
	};

	return (
		<Row className="mx-auto d-flex no-wrap mt-4 w-100">
			<Form onSubmit={handleSubmit(onSubmit)} className="w-100">
				<Col xs="12" sm="12" md="12" lg="12" xl="12" className="w-100">
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
					{!!errors?.sub_no && (
						<Error className="mt-1">{errors?.sub_no?.message}</Error>
					)}
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
