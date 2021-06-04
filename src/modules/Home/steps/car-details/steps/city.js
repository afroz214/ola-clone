import React, { useState, useEffect } from "react";
import { Tile, MultiSelect, Button as Btn, Error } from "components";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { Rto, set_temp_data } from "modules/Home/home.slice";

// validation schema
const yupValidate = yup.object({
	sub_no: yup.string().required("RTO is required"),
});

export const City = ({ stepFn }) => {
	const dispatch = useDispatch();
	const { rto, temp_data } = useSelector((state) => state.home);

	const RtoData = !_.isEmpty(rto)
		? rto?.map(({ rtoNumber, rtoName, rtoId, stateName }) => {
				return {
					rtoNumber,
					rtoId,
					rtoName,
					stateName,
					label: `${rtoNumber} - (${stateName} : ${rtoName})`,
					name: `${rtoNumber} - (${stateName} : ${rtoName})`,
					value: rtoId,
					id: rtoId,
				};
		  })
		: [];
	const { handleSubmit, register, watch, control, errors, setValue } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});

	//get rto
	useEffect(() => {
		dispatch(Rto());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//prefill
	useEffect(() => {
		if (temp_data?.rtoNumber) {
			const { rtoNumber, rtoId, stateName, rtoName } = temp_data;
			let selected_option = [
				{
					rtoNumber,
					rtoId,
					stateName,
					rtoName,
					label: `${rtoNumber} - (${stateName} : ${rtoName})`,
					name: `${rtoNumber} - (${stateName} : ${rtoName})`,
					value: rtoId,
					id: rtoId,
				},
			];
			!_.isEmpty(selected_option) && setValue("sub_no", selected_option);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [temp_data]);

	const sub_no = watch("sub_no");

	const onSubmit = (data) => {
		dispatch(
			set_temp_data({
				rtoNumber: sub_no?.rtoNumber,
				rtoId: sub_no?.rtoId,
				stateName: sub_no?.stateName,
				rtoName: sub_no?.rtoName,
			})
		);
		stepFn(5, data, 6);
	};

	return (
		<Row className="mx-auto d-flex no-wrap mt-4 w-100">
			<Form onSubmit={handleSubmit(onSubmit)} className="w-100 mx-auto">
				<Col xs="12" sm="12" md="12" lg="12" xl="12" className="w-100 mx-auto">
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
								options={RtoData}
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
