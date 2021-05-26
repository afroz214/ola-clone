import React from "react";
import {
	FormRightMainCont,
	FormRightCont,
	ReviewTabHead,
	ReviewAnyClaimWrap,
	ReviewAnyClaimLeft,
	ReviewIconfirmWrap,
	ReviewLabel,
} from "./reviewCard.style";
import { Row, Col } from "react-bootstrap";
const ReviewCard = () => {
	return (
		<>
			<FormRightMainCont>
				<FormRightCont>
					<Row>
						<Col md={5}>
							<ReviewTabHead>Car Is Owned By</ReviewTabHead>
						</Col>
						<Col md={7}></Col>
					</Row>
					<Row>
						<Col md={5}>
							<ReviewTabHead>Existing Policy Type</ReviewTabHead>
						</Col>
						<Col md={7}></Col>
					</Row>
					<Row>
						<Col md={5}>
							<ReviewTabHead>
								Registration and Manufacturing month
							</ReviewTabHead>
						</Col>
						<Col md={7}></Col>
					</Row>
					<ReviewAnyClaimWrap>
						<ReviewAnyClaimLeft>
							<ReviewTabHead>
								Did car's ownership change in the last 12 months?
							</ReviewTabHead>
						</ReviewAnyClaimLeft>
					</ReviewAnyClaimWrap>
					<Row>
						<Col md={5}>
							<ReviewTabHead>Additional Covers</ReviewTabHead>
						</Col>
						<Col md={7}></Col>
					</Row>
					<ReviewIconfirmWrap>
						<ReviewLabel></ReviewLabel>
					</ReviewIconfirmWrap>
				</FormRightCont>
			</FormRightMainCont>
		</>
	);
};

export default ReviewCard;
