import React, { useState, useEffect } from "react";
import { Tile, MultiSelect, Error } from "components";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";

const DummyData = {
	name: "Maruti Swift Dzire",
	id: "1",
};

const DummyOthers = [
	{
		name: "X3",
		label: "X3",
		value: "2",
		id: "2",
	},
	{
		name: "Y3",
		label: "Y3",
		value: "3",
		id: "3",
	},
	{
		name: "Z3",
		label: "Z3",
		value: "4",
		id: "4",
	},
];

// validation schema
const yupValidate = yup.object({
	model: yup.array().required("Model is required").nullable(),
});

export const Model = ({ stepFn }) => {
	const { handleSubmit, register, watch, control, errors } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});
	const [show, setShow] = useState(false);

	const other = watch("model_other");
	const model = watch("model");

	useEffect(() => {
		if (!_.isEmpty(other)) {
			stepFn(2, other?.value, 3);
		}
		if (model) {
			stepFn(2, model, 3);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [other, model]);

	return (
		<>
			{!show ? (
				<>
					<Row className="mx-auto">
						{[...Array(12)].map((item, index) => (
							<Col
								xs="6"
								sm="6"
								md="4"
								lg="3"
								xl="3"
								className="d-flex justify-content-center"
							>
								<Tile
									text={DummyData?.name}
									id={index}
									register={register}
									name={"model"}
									value={index}
                                    height={'50px'}
								/>
							</Col>
						))}
					</Row>
					<Row className="mx-auto d-flex no-wrap mt-4">
						<Col xs="12" sm="12" md="12" lg="12" xl="12" className="linkLine">
							<Button variant="link" className="" onClick={() => setShow(true)}>
								Don't See your Car's Model? Click Here
							</Button>
						</Col>
					</Row>
				</>
			) : (
				<>
					<Row className="mx-auto d-flex no-wrap mt-4 w-100">
						<Col xs="12" sm="12" md="12" lg="12" xl="12">
							<Controller
								control={control}
								name="model_other"
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
										placeholder={"Select Model"}
										errors={errors.model}
										Styled
										closeOnSelect
									/>
								)}
							/>
							{!!errors?.model && <Error className='mt-1'>{errors?.model?.message}</Error>}
						</Col>
					</Row>
					<Row className="mx-auto d-flex no-wrap mt-4">
						<Col xs="12" sm="12" md="12" lg="12" xl="12" className="linkLine">
							<Button
								variant="link"
								className="outline-none"
								onClick={() => setShow(false)}
							>
								{"Go back to the Quick Picker"}
							</Button>
						</Col>
					</Row>
				</>
			)}
		</>
	);
};
