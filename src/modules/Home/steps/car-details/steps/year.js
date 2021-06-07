import React, { useEffect } from "react";
import { Button as Btn, Error } from "components";
import { Row, Col, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import DateInput from "../DateInput";
import { subYears } from "date-fns";
import { set_temp_data } from "modules/Home/home.slice";
import { useDispatch, useSelector } from "react-redux";

/*---------------date config----------------*/
const CarCheck = subYears(new Date(Date.now() - 86400000), 15);
/*-----x---------date config-----x----------*/

// validation schema
const yupValidate = yup.object({
	year: yup.string().required("year is required").nullable(),
	manfDate: yup.string().required("manufacture date is required").nullable(),
});

export const YearCM = ({ stepFn }) => {
	const dispatch = useDispatch();
	const { temp_data } = useSelector((state) => state.home);
	const { handleSubmit, register, control, errors, setValue } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});

	//prefill
	useEffect(() => {
		if (temp_data?.regDate) setValue("year", temp_data?.regDate);
		if (temp_data?.manfDate) setValue("manfDate", temp_data?.manfDate);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [temp_data]);

	const onSubmit = (data) => {
		console.log(data);
		dispatch(set_temp_data({ regDate: data?.year, manfDate: data?.manfDate }));
		stepFn(6, data, 7);
	};

	return (
		<Row className="mx-auto d-flex no-wrap mt-2 w-100">
			<Form onSubmit={handleSubmit(onSubmit)} className="w-100">
				<Col xs="12" sm="12" md="12" lg="12" xl="12" className="w-100">
					<div className="py-2 dateTimeThree">
						<Controller
							control={control}
							name="year"
							defaultValue={""}
							render={({ onChange, onBlur, value, name }) => (
								<DateInput
									minDate={CarCheck}
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
				<h3 className='text-center w-100 mx-auto mt-3'>{'Enter Manufacture Date'}</h3>
				<Col xs="12" sm="12" md="12" lg="12" xl="12" className="w-100 mt-4">
					<div className="py-2 dateTimeThree">
						<Controller
							control={control}
							name="manfDate"
							defaultValue={""}
							render={({ onChange, onBlur, value, name }) => (
								<DateInput
									// minDate={CarCheck}
									value={value}
									name={name}
									onChange={onChange}
									ref={register}
									error={errors && errors?.manfDate}
								/>
							)}
						/>
						{!!errors?.manfDate && (
							<Error className="mt-1">{errors?.manfDate?.message}</Error>
						)}
					</div>
				</Col>
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
