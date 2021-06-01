import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import KnowMorePopup from "./quotesPopup/knowMorePopup";
import { FilterContainer } from "./filterConatiner/filterConatiner";
import { QuoteCard } from "./quoteCard/quoteCard";
import { AddOnsCard } from "./addOnCard/addOnCard";

import { BackButton } from "components";

import "./quotePage.css";
export const QuotesPage = () => {
	const [knowMore, setKnowMore] = useState(false);
	const history = useHistory();
	const back = () => {
		history.push("/vehicle-details");
	};
	return (
		<>
			<MainContainer>
				<div className="backBtn" style={{}}>
					<BackButton
						type="button"
						onClick={back}
						style={{ marginTop: "-20px", left: "-20px", top: "200px" }}
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
				<FilterContainer quotesPage={true}></FilterContainer>
				<CardContainer>
					<CardOtherItemWrap>
						<Row style={{ marginLeft: "38px" }} className="rowBefore">
							<Col lg={3} md={12} style={{ marginTop: "-48px" }}>
								<AddOnsCard />
							</Col>
							<Col
								lg={9}
								md={12}
								style={{ position: "relative", top: "-43px" }}
							>
								<div className="tabs">
									<input type="radio" id="tab1" name="tab-control" />
									<input type="radio" id="tab2" name="tab-control" />
									<input type="radio" id="tab3" name="tab-control" />
									<input type="radio" id="tab4" name="tab-control" />
									<ul>
										<li title="Features">
											<label htmlFor="tab1" role="button">
												<span>Comprehensive</span>
											</label>
										</li>
										<li title="Delivery Contents">
											<label htmlFor="tab2" role="button">
												<span>Third Party</span>
											</label>
										</li>
									</ul>
									<div className="slider">
										<div className="indicator"></div>
									</div>
									<Row style={{ marginTop: "10px" }}>
										<QuoteCard setKnow={setKnowMore} />
										<QuoteCard setKnow={setKnowMore} />
										<QuoteCard setKnow={setKnowMore} />
									</Row>
								</div>
							</Col>
						</Row>
					</CardOtherItemWrap>
				</CardContainer>
			</MainContainer>
			{knowMore && <KnowMorePopup show={knowMore} onClose={setKnowMore} />}
		</>
	);
};

const MainContainer = styled.div`
	width: 100%;
	background: #fff;
`;
const CardContainer = styled.div`
	width: 100%;
	display: grid;
`;

const CardOtherItemWrap = styled.div`
	margin-bottom: 32px;
	background: #f7f7f7;
	min-height: 360px;
`;
