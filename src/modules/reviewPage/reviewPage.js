import React from "react";
import { useHistory } from "react-router-dom";
import {
	BackBtn,
	FormHeader,
	ReviewPageWrap,
	ReviewCardHeader,
	FormFooter,
	SubmitBtn,
} from "./reviewPage.style";
import backButton from "../../assets/img/back-button.png";

import ReviewCard from "./reviewCard/reviewCard";
import InfoCard from "./reviewSideCard/info-card";
import { Row, Col } from "react-bootstrap";
export const ReviewPage = () => {
	document.body.style.backgroundColor = "#ebecf3";
	const history = useHistory();
	return (
		<>
			<BackBtn
				onClick={() => {
					history.push(`/quotes`);
				}}
			>
				<img src={backButton} />
			</BackBtn>
			<FormHeader />
			<ReviewPageWrap>
				<InfoCard />
				<ReviewCardHeader>Review Your Details</ReviewCardHeader>
				<ReviewCard />
				<FormFooter>
					<a>
						<SubmitBtn>PROCEED TO PROPOSAL</SubmitBtn>
					</a>
				</FormFooter>
			</ReviewPageWrap>
		</>
	);
};
