import React from "react";
import { useHistory } from "react-router-dom";
import {
	ReviewCardHeader,
	FormFooter,
	SubmitBtn,
	DivTag1,
	DivTag2,
	RowTag,
} from "./reviewPage.style";

import { BackButton } from "components";

import ReviewCard from "./reviewCard/reviewCard";
import InfoCard from "./reviewSideCard/info-card";
import { Row, Col } from "react-bootstrap";
export const ReviewPage = () => {
	//document.body.style.backgroundColor = "#ebecf3";
	const history = useHistory();
	const back = () => {
		history.push("/quotes");
	};
	return (
		<>
			<div className="backBtn" style={{ paddingBottom: "30px" }}>
				<BackButton type="button" onClick={back} style={{ marginTop: "-20px" }}>
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
			<RowTag className="row-dimension-design">
				<DivTag1 className="col-12 col-lg-3 col-xs-12 col-sm-12 col-md-12">
					<InfoCard />
				</DivTag1>
				<DivTag2 className="col-12 col-lg-9 col-sm-12 col-xs-12 col-md-12">
					<ReviewCardHeader>Review Your Details</ReviewCardHeader>

					<ReviewCard />
					<FormFooter>
						<a>
							<SubmitBtn
								onClick={() => {
									history.push(`/proposal-page`);
								}}
							>
								PROCEED TO PROPOSAL
							</SubmitBtn>
						</a>
					</FormFooter>
				</DivTag2>
			</RowTag>
		</>
	);
};
