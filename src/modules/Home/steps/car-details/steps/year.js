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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSubmit = (data) => {
		console.log(data);
		dispatch(set_temp_data({ regDate: data?.year }));
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
									maxDate={CarCheck}
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
