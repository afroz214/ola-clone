import React, { useState, useEffect } from "react";
import { Tile, MultiSelect } from "components";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";

const DummyData = {
	name: "Variants",
	id: "1",
};

const DummyOthers = [
	{
		name: "Variant 1",
		label: "Variant 1",
		value: "2",
		id: "2",
	},
	{
		name: "Variant 2",
		label: "Variant 2",
		value: "3",
		id: "3",
	},
	{
		name: "Variant 3",
		label: "Variant 3",
		value: "4",
		id: "4",
	},
];

// validation schema
const yupValidate = yup.object({
	variant: yup.array().required("Variant is required").nullable(),
});

export const Variant = ({ stepFn }) => {
	const { handleSubmit, register, watch, control, errors } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});
	const [show, setShow] = useState(false);

	const other = watch("variant_other");
	const variant = watch("variant");

	useEffect(() => {
		if (!_.isEmpty(other)) {
			stepFn(4, other?.value, 5);
		}
		if (variant) {
			stepFn(4, variant, 5);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [other, variant]);

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
									name={"variant"}
									value={index}
									height={"50px"}
								/>
							</Col>
						))}
					</Row>
					<Row className="mx-auto d-flex no-wrap mt-4">
						<Col xs="12" sm="12" md="12" lg="12" xl="12" className="linkLine">
							<Button variant="link" className="" onClick={() => setShow(true)}>
								Don't See your Car's variant? Click Here
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
								name="variant_other"
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
										placeholder={"Select Variant"}
										errors={errors.variant}
										Styled
										closeOnSelect
									/>
								)}
							/>
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
