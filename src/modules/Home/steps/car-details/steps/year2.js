import React, { useEffect, useState } from "react";
import { Button as Btn, Error } from "components";
import {
	Row,
	Col,
	Form,
	Button,
	ToggleButtonGroup,
	ToggleButton,
} from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import DateInput from "../DateInput";
import { subYears, addDays, differenceInDays } from "date-fns";
import { set_temp_data } from "modules/Home/home.slice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { toDate } from "utils";

/*---------------date config----------------*/
const CarCheck = subYears(new Date(Date.now() - 86400000), 15);
const policyMin = subYears(new Date(Date.now() - 86400000), 1);
const policyMax = addDays(new Date(Date.now() - 86400000), 45);
/*-----x---------date config-----x----------*/

// validation schema
const yupValidate = yup.object({
	year: yup.string().required("year is required").nullable(),
});

export const YearCM = ({ stepFn }) => {
	const dispatch = useDispatch();
	const { temp_data } = useSelector((state) => state.home);
	const [policy, setPolicy] = useState(false);

	const { handleSubmit, register, control, errors, setValue, watch } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});

	//prefill
	useEffect(() => {
		if (temp_data?.regDate) setValue("year", temp_data?.regDate);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//NCB logic
	const ncb = watch("ncb");
	console.log(ncb);
	const expiry = watch("expiry");

	let a = expiry;
	let b = moment().format("DD-MM-YYYY");

	let diffDays = a && b && differenceInDays(toDate(b), toDate(a));

	useEffect(() => {
		if (diffDays > 90) {
			setValue("ncb", 0);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSubmit = (data) => {
		console.log(data);
		dispatch(set_temp_data({ regDate: data?.year }));
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
				<h3 className="text-center w-100 mt-4">Enter Policy Expiration Date</h3>
				<Col xs="12" sm="12" md="12" lg="12" xl="12" className="w-100 mt-4">
					<div className="py-2 dateTimeThree">
						<Controller
							control={control}
							name="expiry"
							defaultValue={""}
							render={({ onChange, onBlur, value, name }) => (
								<DateInput
									maxDate={policyMax}
									minDate={policyMin}
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
					<input ref={register} name="ncb" type="hidden" />
				</Col>
				{watch("expiry") && diffDays < 91 && (
					<>
						<Row className="w-100 d-flex justify-content-center mt-4 mx-auto">
							<h3 className="text-center w-100">
								Did you make a claim in your existing policy?
							</h3>
							<div
								className="px-5 d-flex justify-content-center mx-auto mt-4"
								style={{ width: "70%" }}
							>
								<Col
									sm="6"
									md="6"
									lg="6"
									xl="6"
									className="d-flex justify-content-center px-5 mt-2"
								>
									<Button
										onClick={() => setPolicy(true)}
										variant={policy ? "success" : "outline-success"}
									>
										Yes
									</Button>
								</Col>
								<Col
									sm="6"
									md="6"
									lg="6"
									xl="6"
									className="d-flex justify-content-center px-5 mt-2"
								>
									<Button
										onClick={() => setPolicy(false)}
										variant={!policy ? "success" : "outline-success"}
									>
										No
									</Button>
								</Col>
							</div>
						</Row>
						{policy && (
							<Row className="w-100 d-flex justify-content-center mt-4 mx-auto">
								<div
									className="px-5 d-flex flex-column align-content-center mx-auto mt-4"
									
								>
									<h3 className="text-center w-100">
										{'Enter your NCB (No Claim Bonus)'}
									</h3>
									<ToggleButtonGroup type="radio" name="options" defaultValue={ncb || 0}>
										<ToggleButton onClick={() => setValue("ncb", 0)} value={0}>
											0%
										</ToggleButton>
										<ToggleButton onClick={() => setValue("ncb", 20)} value={20}>
											20%
										</ToggleButton>
										<ToggleButton onClick={() => setValue("ncb", 25)} value={25}>
											25%
										</ToggleButton>
										<ToggleButton onClick={() => setValue("ncb", 35)} value={35}>
											35%
										</ToggleButton>
										<ToggleButton onClick={() => setValue("ncb", 45)} value={45}>
											45%
										</ToggleButton>
										<ToggleButton onClick={() => setValue("ncb", 50)} value={50}>
											50%
										</ToggleButton>
									</ToggleButtonGroup>
								</div>
							</Row>
						)}
					</>
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
