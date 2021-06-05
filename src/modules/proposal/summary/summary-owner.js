import React from "react";
import _ from "lodash";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const SummaryOwner = ({ summary }) => {
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

	return (
		<div className="d-flex flex-wrap" style={{ marginTop: "-50px" }}>
			<Row
				xs={1}
				sm={1}
				md={2}
				lg={3}
				xl={3}
				style={{ width: "100%" }}
				className="d-flex p-1"
			>
				{!_.isEmpty(summary) ? (
					<>
                        {summary?.first_name && InfoFn("FIRST NAME", summary?.first_name)}
				        {summary?.last_name && InfoFn("LAST NAME", summary?.last_name)}
				        {summary?.gender && InfoFn("GENDER", summary?.gender)}
				        {summary?.dob && InfoFn("DATE OF BIRTH", summary?.dob)}
				        {summary?.mobile_no && InfoFn("MOBILE NUMBER", summary?.mobile_no)}
				        {summary?.email && InfoFn("OFFICIAL EMAIL ID", summary?.email)}
				        {summary?.pan_no && InfoFn("PAN NO.", summary?.pan_no)}
				        {summary?.gstin && InfoFn("GSTIN", summary?.gstin)}
				        {summary?.occupation_type && InfoFn("OCCUPATION TYPE", summary?.occupation_name)}
				        {summary?.marital_status && InfoFn("MARITAL STATUS", summary?.marital_status)}
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
						        Communication Address
					        </p>
				        </Col>
				        {summary?.address_line_1 && InfoFn("ADDRESS LINE 1", summary?.address_line_1)}
				        {summary?.address_line_2 && InfoFn("ADDRESS LINE 2", summary?.address_line_2)}
				        {summary?.address_line_3 && InfoFn("ADDRESS LINE 3", summary?.address_line_3)}
				        {summary?.pincode && InfoFn("PINCODE", summary?.pincode)}
				        {summary?.state && InfoFn("STATE", summary?.state)}
				        {summary?.city && InfoFn("CITY", summary?.city)}
                    </>
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

export default SummaryOwner;
