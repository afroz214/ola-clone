import React, { useState, useEffect } from "react";
import { Tile, MultiSelect, Error } from "components";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";

const DummyData = {
	name: "Maruti",
	logo: "/assets/images/logo/logo12.png",
	id: "1",
};

const DummyOthers = [
	{
		name: "Audi",
		label: "Audi",
		value: "2",
		id: "2",
	},
	{
		name: "BMW",
		label: "BMW",
		value: "3",
		id: "3",
	},
	{
		name: "Ferrari",
		label: "Ferrari",
		value: "4",
		id: "4",
	},
];

// validation schema
const yupValidate = yup.object({
	brand: yup.string().required("Brand is required"),
});

export const Brand = ({ stepFn }) => {
	const { handleSubmit, register, watch, control, errors, setValue } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});
	const [show, setShow] = useState(false);

	const other = watch("brand_other");
	const brand = watch("brand");
	console.log(brand)

	useEffect(() => {
		if (!_.isEmpty(other)) {
			stepFn(1, other?.value, 2);
		}
		if (brand) {
			stepFn(1, brand, 2);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [other, brand]);

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
									logo={DummyData?.logo}
									text={DummyData?.name}
									id={index}
									register={register}
									name={"brand"}
									value={index}
									setValue={setValue}
									Selected={brand}
								/>
							</Col>
						))}
					</Row>
					<Row className="mx-auto d-flex no-wrap mt-4">
						<Col xs="12" sm="12" md="12" lg="12" xl="12" className="linkLine">
							<Button variant="link" className="" onClick={() => setShow(true)}>
								Don't See your Car's Brand? Click Here
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
								name="brand_other"
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
										placeholder={"Select Brand"}
										errors={errors.brand}
										Styled
										closeOnSelect
									/>
								)}
							/>
							{!!errors?.brand && <Error className='mt-1'>{errors?.brand?.message}</Error>}
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
