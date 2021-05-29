import React from "react";
import {
	FormRightMainCont,
	FormRightCont,
	ReviewTabHead,
	ReviewAnyClaimWrap,
	ReviewAnyClaimLeft,
	ReviewIconfirmWrap,
	ReviewLabel,
	ReviewButtonTab,
	ReviewIconfirmWrap1,
} from "./reviewCard.style";
import "./reviewCard.css";
import { Row, Col } from "react-bootstrap";
import Switch from "../../../components/switch/switch";
import { Textbox } from "components";
const ReviewCard = () => {
	return (
		<>
			<FormRightMainCont>
				<FormRightCont>
					<Row>
						<Col md={5}>
							<ReviewTabHead>Car Is Owned By</ReviewTabHead>
						</Col>
						<Col md={7}>
							<ReviewButtonTab>
								<input
									type="radio"
									id="regiIsIndi"
									name="regiIs"
									value="Individual"
								/>
								<label for="regiIsIndi">Individual</label>
								<input
									type="radio"
									id="regiIsComp"
									name="regiIs"
									value="Company"
								/>
								<label for="regiIsComp">Company</label>
							</ReviewButtonTab>
						</Col>
					</Row>
					<Row>
						<Col md={5}>
							<ReviewTabHead>Existing Policy Type</ReviewTabHead>
						</Col>
						<Col md={7}>
							<ReviewButtonTab>
								<input
									type="radio"
									id="policyCompre"
									name="policyType"
									value="Comprehensive"
								/>
								<label for="policyCompre">Comprehensive</label>
								<input
									type="radio"
									id="policyThird"
									name="policyType"
									value="Third party"
								/>
								<label for="policyThird">Third party</label>
							</ReviewButtonTab>
						</Col>
					</Row>
					<Row>
						<Col md={5}>
							<ReviewTabHead>
								Registration and Manufacturing month
							</ReviewTabHead>
						</Col>
						<Col md={7}>
							<Row>
								<Col md={6}>
									<Textbox fieldName="" />
								</Col>
								<Col md={6}>
									<Textbox fieldName="" />
								</Col>
							</Row>
						</Col>
					</Row>
					<ReviewAnyClaimWrap>
						<ReviewAnyClaimLeft>
							<ReviewTabHead>
								Did car's ownership change in the last 12 months?
							</ReviewTabHead>
							<Switch toggle />
						</ReviewAnyClaimLeft>
					</ReviewAnyClaimWrap>
					<Row>
						<Col md={5}>
							<ReviewTabHead>Additional Covers</ReviewTabHead>
						</Col>
						<Col md={3}>
							<div class="reviewIconfirmWrap1">
								<input
									type="checkbox"
									class="form-group form-check-input"
									id="reviewAgree1"
								/>
								<label class="form-check-label" for="reviewAgree1">
									Zero Dep Rs. 1500
								</label>
								<span class="fieldError"></span>
							</div>
						</Col>
						<Col md={3}>
							<div class="reviewIconfirmWrap1">
								<input
									type="checkbox"
									class="form-group form-check-input"
									id="reviewAgree2"
								/>
								<label class="form-check-label" for="reviewAgree2">
									PA Cover Rs. 300
								</label>
								<span class="fieldError"></span>
							</div>
						</Col>
					</Row>
					<div className="reviewIconfirmWrap">
						<input
							type="checkbox"
							className="form-group form-check-input"
							id="reviewAgree"
						/>
						<label className="form-check-label" htmlFor="reviewAgree">
							I confirm all the details are correct and accurate. I also confirm
							that my Previous NCB is as mentioned above with no claims and that
							my car has a valid PUC certificate. The insurer reserves its right
							to repudiate a claim if the declaration made by you is found to be
							incorrect.
						</label>
						<span class="fieldError"></span>
					</div>
				</FormRightCont>
			</FormRightMainCont>
		</>
	);
};

export default ReviewCard;
