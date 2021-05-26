import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./style.css";
import { Brand, Model, FuelType, Variant, City } from "./steps";

export const CarDetails = () => {
	const [Step, setStep] = useState(4);

	//formData's
	const [brandData, setBrandData] = useState({});
	const [ModelData, setModelData] = useState({});
	const [FuelData, setFuelData] = useState({});
	const [VariantData, setVariantData] = useState({});
	const [CitytData, setCityData] = useState({});

	const stepFn = (stepNo, data, newStep) => {
		setStep(Number(newStep));
		switch (Number(stepNo)) {
			case 1:
				setBrandData(data);
				break;
			case 2:
				setModelData(data);
				break;
			case 3:
				setFuelData(data);
				break;
			case 4:
				setVariantData(data);
				break;
			case 5:
				setCityData(data);
				break;
			default:
				break;
		}
	};
	const TitleFn = (Step) => {
		switch (Step) {
			case 1:
				return "Select the Brand of your Car";
			case 2:
				return "Select the Model of your Car";
			case 3:
				return "Select Fuel type of your Car";
			case 4:
				return "Select the Variant of your Car";
			case 5:
				return "Enter City Details";
			default:
				break;
		}
	};
	return (
		<>
			<Row className="w-100 mx-auto my-4" style={{ zIndex: "999" }}>
				<Col sm="12" md="12" lg="12" xl="12" className="p-0 my-0 m-0 w-100">
					<div className="wrapper-progressBar">
						<ul className="progressBar">
							<li className={Step > 0 ? "active" : ""}>Brand</li>
							<li className={Step > 1 ? "active" : ""}>Model</li>
							<li className={Step > 2 ? "active" : ""}>Fuel Type</li>
							<li className={Step > 3 ? "active" : ""}>Variant</li>
							<li className={Step > 4 ? "active" : ""}>City</li>
							<li className={Step > 5 ? "active" : ""}>Reg. Year</li>
						</ul>
					</div>
				</Col>
			</Row>
			<Row className="w-100 mt-4 mx-auto">
				<Row className="mx-auto d-flex w-100">
					<Button
						className="my-2"
						size="sm"
						variant="light"
						onClick={() => setStep((prev) => prev - 1)}
						disabled={Step > 1 ? false : true}
						style={Step > 1 ? {} : { visibility: "hidden" }}
					>
						<img src={"/assets/images/back-button.png"} alt="bck" />
					</Button>
					<h3 className="text-center w-100">{TitleFn(Step)}</h3>
				</Row>
				{Step === 1 && <Brand stepFn={stepFn} />}
				{Step === 2 && <Model stepFn={stepFn} />}
				{Step === 3 && <FuelType stepFn={stepFn} />}
				{Step === 4 && <Variant stepFn={stepFn} />}
				{Step === 5 && <City stepFn={stepFn} />}
			</Row>
		</>
	);
};
