import React, { useState } from "react";
import { Tile, MultiSelect } from "components";
import { Row, Col } from "react-bootstrap";

export const Brand = () => {
	const DummyData = {
		name: "maruti",
		logo: "/assets/images/logo/logo12.png",
	};

	const [show, setShow] = useState(false);
	return (
		<>
			<Row className="w-100 mx-auto">
				<h3 className="text-center w-100">Select the Brand of your Car</h3>
			</Row>
			<Row className="mx-auto">
				{[...Array(12)].map((item) => (
					<Col
						xs="6"
						sm="6"
						md="4"
						lg="3"
						xl="2"
						className="d-flex justify-content-center"
					>
						<Tile logo={DummyData?.logo} text={DummyData?.name} />
					</Col>
				))}
			</Row>
		</>
	);
};
