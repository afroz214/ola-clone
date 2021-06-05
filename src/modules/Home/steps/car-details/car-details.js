import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./style.css";
import { Brand, Model, FuelType, Variant, City, YearCM } from "./steps";
import { scrollToTargetAdjusted } from "utils";
import { useHistory } from "react-router";
import { BackButton } from "components";

export const CarDetails = () => {
	/*---------------- back button---------------------*/
	const back = () => {
		history.push("/vehicle-type");
	};
	/*----------x----- back button-------x-------------*/
	const [Step, setStep] = useState(1);
	const history = useHistory();

	//center auto scroll
	useEffect(() => {
		scrollToTargetAdjusted("stepper", 45);
	}, []);

	//formData's
	const [brandData, setBrandData] = useState({});
	const [ModelData, setModelData] = useState({});
	const [FuelData, setFuelData] = useState({});
	const [VariantData, setVariantData] = useState({});
	const [CitytData, setCityData] = useState({});
	const [YearData, setYearData] = useState({});

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
			case 6:
				setYearData(data);
				break;
			default:
				break;
		}
	};
	const TitleFn = (Step) => {
		switch (Step) {
			case 1:
				return "Select the Brand of your Vehicle";
			case 2:
				return "Select the Model of your Vehicle";
			case 3:
				return "Select Fuel type of your Vehicle";
			case 4:
				return "Select the Variant of your Vehicle";
			case 5:
				return "Enter City Details";
			case 6:
				return "Enter the Vehicle registration Date";
			default:
				break;
		}
	};

	//After Completion
	useEffect(() => {
		if (Step > 6) {
			history.push("/quotes");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [Step]);

	return (
		<>
			<div className="backBtn" style={{ paddingBottom: "30px" }}>
				<BackButton type="button" onClick={back} style={{ marginTop: "-20px" }}>
					<svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 24 24">
						<path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
					<text style={{ color: "black" }}>Back</text>
				</BackButton>
			</div>
			<Row className="w-100 mx-auto my-4" style={{ zIndex: "999" }} id="stepper">
				<Col sm="12" md="12" lg="12" xl="12" className="p-0 my-0 m-0 w-100" >
					<div className="wrapper-progressBar" >
						<ul className="progressBar">
							<li className={Step > 0 ? "active" : ""}>Brand</li>
							<li className={Step > 1 ? "active" : ""}>Model</li>
							<li className={Step > 2 ? "active" : ""}>Fuel Type</li>
							<li className={Step > 3 ? "active" : ""}>Variant</li>
							<li className={Step > 4 ? "active" : ""}>RTO</li>
							<li className={Step > 5 ? "active" : ""}>Reg. Date</li>
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
					<h3 className="text-center w-100 mb-4">{TitleFn(Step)}</h3>
				</Row>
				{Step === 1 && <Brand stepFn={stepFn} />}
				{Step === 2 && <Model stepFn={stepFn} />}
				{Step === 3 && <FuelType stepFn={stepFn} />}
				{Step === 4 && <Variant stepFn={stepFn} />}
				{Step === 5 && <City stepFn={stepFn} />}
				{Step === 6 && <YearCM stepFn={stepFn} />}
			</Row>
		</>
	);
};
