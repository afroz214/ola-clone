import React, { useState } from "react";
import { Tile, MultiSelect } from "components";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
	brand: yup.array().required("Brand is required").nullable(),
});

export const Brand = () => {
	const { handleSubmit, register, watch, control, errors } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});
	const [show, setShow] = useState(false);

	const other = watch("brand_other");
	const brand = watch("brand");
	console.log(brand);
	return (
		<>
			<Row className="w-100 mx-auto">
				<h3 className="text-center w-100">Select the Brand of your Car</h3>
			</Row>
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
									value={index}
									handleChange={() => console.log(index)}
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
										closeMenuOnSelect
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
