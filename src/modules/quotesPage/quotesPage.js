import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FilterContainer } from "./filterConatiner/filterConatiner";
import { QuoteCard } from "./quoteCard/quoteCard";
import { AddOnsCard } from "./addOnCard/addOnCard";
import { Filters } from "./filterConatiner/filterConatiner";
import { BackButton } from "components";

import "./quotePage.css";
export const QuotesPage = () => {
	const [tab, setTab] = useState("tab1");
	const history = useHistory();

	const back = () => {
		history.push(`/journey-type`);
	};
	return (
		<>
			<MainContainer>
				<Row>
					<FilterContainer />
				</Row>
				<Row>
					<Col lg={3}>
						<div className="backBtn">
							<BackButton
								type="button"
								onClick={back}
								style={{ position: "inherit" }}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className=""
									viewBox="0 0 24 24"
								>
									<path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
									<path d="M0 0h24v24H0z" fill="none" />
								</svg>
								<text style={{ color: "black" }}>Back</text>
							</BackButton>
						</div>
					</Col>
					<Col lg={3}>
						<div className="tabs">
							<input type="radio" id="tab1" name="tab-control" />
							<input type="radio" id="tab2" name="tab-control" />
							<input type="radio" id="tab3" name="tab-control" />
							<input type="radio" id="tab4" name="tab-control" />
							<ul>
								<li title="Features">
									<label
										htmlFor="tab1"
										role="button"
										onClick={() => setTab("tab1")}
									>
										<span>Comprehensive</span>
									</label>
								</li>
								<li title="Delivery Contents">
									<label
										htmlFor="tab2"
										role="button"
										onClick={() => setTab("tab2")}
									>
										<span>Third Party</span>
									</label>
								</li>
							</ul>
							<div className="slider">
								<div className="indicator"></div>
							</div>
						</div>
					</Col>
					<Col lg={6}>
						<Filters />
					</Col>
				</Row>

				<Row style={{ padding: "10px 30px" }}>
					<Col lg={3} md={12}>
						<AddOnsCard />
					</Col>
					<Col lg={9} md={12}>
						<Row>
							{tab === "tab1" && (
								<>
									<QuoteCard />
									<QuoteCard />
									<QuoteCard />
								</>
							)}
						</Row>
					</Col>
				</Row>
			</MainContainer>
		</>
	);
};

const MainContainer = styled.div`
	width: 100%;
	background: #fff;
	overflow: hidden;
`;
