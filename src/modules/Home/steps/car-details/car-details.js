import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./style.css";
import { Brand } from "./steps";

export const CarDetails = () => {
	const [Step, setStep] = useState(1);
	const [brandData, setBrandData] = useState({});

	const stepFn = (stepNo, data) => {
		setStep(Number(stepNo));
		switch (Number(stepNo)) {
			case 1:
				setBrandData(data);
				break;
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
			<Row className="w-100 mt-5 mx-auto ">
				{Step > 1 && (
					<Button
						size="sm"
						variant="dark"
						onClick={() => setStep((prev) => prev - 1)}
					>
						Back
					</Button>
				)}
				{Step === 1 && <Brand stepFn={stepFn} />}
			</Row>
		</>
	);
};
