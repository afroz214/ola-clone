import React from "react";
import _ from "lodash";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const SummaryVehicle = ({ summary }) => {
	const InfoFn = (header, value) => {
		return (
			<Col sm={12} xs={12} md={6} lg={4} xl={4} className="py-2 px-2 text-nowrap">
				<DivHeader>{header}</DivHeader>
				<DivValue>
					{(value || Number(value) === 0 ? value : "-").toString()}
				</DivValue>
			</Col>
		);
	};

	const question = (ques, ans) => {
		return (
			<Col sm={12} xs={12} md={12} lg={12} xl={12} className="py-2 px-2 w-100">
				<Col sm={12} xs={12} md={12} lg={12} xl={12} className="py-1 px-0">
					<div style={{ fontSize: "12px", fontWeight: "600" }}>{ques}</div>
				</Col>
				<Col sm={12} xs={12} md={12} lg={12} xl={12} className="py-2 px-0">
					<div style={{ fontSize: "12px", fontWeight: "600" }}>
						{ans ? "Yes" : "No"}
					</div>
				</Col>
			</Col>
		);
	};

	return (
		<div className="d-flex flex-wrap" style={{ marginTop: "-50px" }}>
			<Row
				xs={1}
				sm={1}
				md={2}
				lg={3}
				xl={3}
				style={{ width: "100%" }}
				className="d-flex p-0"
			>
				{!_.isEmpty(summary) ? (
					<>
						{summary?.engine_no && InfoFn("ENGINE NUMBER", summary?.engine_no)}
						{summary?.chasis_no && InfoFn("CHASIS NUMBER", summary?.chasis_no)}
						{summary?.manufacture_date &&
							InfoFn("MANUFACTURE DATE", summary?.manufacture_date)}
						{summary?.vehicle_color &&
							InfoFn("VEHICLE COLOR", summary?.vehicle_color)}
						{question("Do you have a valid PUC Certificate?", summary?.puc)}
						{summary?.financer && (
							<>
								<Col
									xs={12}
									sm={12}
									md={12}
									lg={12}
									xl={12}
									className="mt-1 px-2"
									style={{ marginBottom: "-10px" }}
								>
									<p
										style={{
											color: "#1a5105",
											fontSize: "16px",
											fontWeight: "600",
										}}
									>
										Financer Details
									</p>
								</Col>

								{summary?.financer_name &&
									InfoFn("FINANCER NAME", summary?.financer_name)}
								{summary?.financer_branch &&
									InfoFn("FINANCER (CITY/BRANCH)", summary?.financer_branch)}
							</>
						)}
						{summary?.car_address && (
							<>
								<Col
									xs={12}
									sm={12}
									md={12}
									lg={12}
									xl={12}
									className="mt-1 px-2"
									style={{ marginBottom: "-10px" }}
								>
									<p
										style={{
											color: "#1a5105",
											fontSize: "16px",
											fontWeight: "600",
										}}
									>
										Vehicle Registration Address
									</p>
								</Col>
								{summary?.address_line_1 &&
									InfoFn("ADDRESS LINE 1", summary?.address_line_1)}
								{summary?.address_line_2 &&
									InfoFn("ADDRESS LINE 2", summary?.address_line_2)}
								{summary?.address_line_3 &&
									InfoFn("ADDRESS LINE 3", summary?.address_line_3)}
								{summary?.pincode && InfoFn("PINCODE", summary?.pincode)}
								{summary?.state && InfoFn("STATE", summary?.state)}
								{summary?.city && InfoFn("CITY", summary?.city)}
							</>
						)}
					</>
				) : (
					<p style={{ color: "red" }}>Form data not found</p>
				)}
			</Row>
		</div>
	);
};

// puc: true

const DivHeader = styled.div`
	font-size: 12px;
	font-weight: 600;
`;

const DivValue = styled.div`
	font-size: 12px;
	white-space: pre-wrap;
	word-wrap: break-word;
`;

export default SummaryVehicle;
