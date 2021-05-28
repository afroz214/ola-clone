import React from "react";
import { Row, Col } from "react-bootstrap";
import _ from "lodash";
import styled from "styled-components";

const excludes = ["nominee_relation_id"];

const SummaryProposal = ({ data, type }) => {
	let keys = !_.isEmpty(data) ? Object.keys(data) : [];
	let values = !_.isEmpty(data) ? Object.values(data) : [];

	return (
		<div className="d-flex flex-wrap">
			<Row
				xs={1}
				sm={1}
				md={2}
				lg={3}
				xl={3}
				style={
					type === "header"
						? { width: "100%" }
						: { width: "100%", marginTop: "-60px" }
				}
				className="d-flex p-2"
			>
				{!_.isEmpty(keys) ? (
					keys.map((item, index) => (
						<>
							{!excludes.includes(item) ? (
								<Col
									sm={12}
									xs={12}
									md={6}
									lg={4}
									xl={4}
									className="py-2 px-0 text-nowrap"
								>
									<DivHeader>{keys[index].replace(/_/g, " ").toUpperCase()}</DivHeader>
									<DivValue>{!!values[index] && values[index].toString()}</DivValue>
								</Col>
							) : (
								<noscript />
							)}
						</>
					))
				) : (
					<p style={{ color: "red" }}>Form data not found</p>
				)}
			</Row>
		</div>
	);
};

const DivHeader = styled.div`
	font-size: 12px;
	font-weight: 600;
`;

const DivValue = styled.div`
	font-size: 12px;
	white-space: pre-wrap;
	word-wrap: break-word;
`;

export default SummaryProposal;
