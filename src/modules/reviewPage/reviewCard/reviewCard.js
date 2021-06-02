import React from "react";
import {
	FormRightMainCont,
	FormRightCont,
	ReviewTabHead,
	ReviewAnyClaimWrap,
	ReviewAnyClaimLeft,
	OwnerText,
	ReviewIconfirmWrap,
	ReviewLabel,
	ReviewButtonTab,
	ReviewIconfirmWrap1,
} from "./reviewCard.style";
import "./reviewCard.css";
import { useForm, Controller } from "react-hook-form";
import { Row, Col } from "react-bootstrap";
import Switch from "../../../components/switch/switch";
import DateInput from "../../proposal/DateInput";
import { Textbox, ErrorMsg } from "components";
const ReviewCard = () => {
	const { handleSubmit, register, watch, control, errors, setValue } = useForm({
		// resolver: yupResolver(yupValidate),
		// mode: "all",
		// reValidateMode: "onBlur",
	});
	return (
		<>
			<FormRightMainCont>
				<FormRightCont>
					<Row>
						<Col md={4}>
							<ReviewTabHead>Car Is Owned By</ReviewTabHead>
						</Col>
						<Col md={8}>
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
						<Col md={4}>
							<ReviewTabHead>Existing Policy Type</ReviewTabHead>
						</Col>
						<Col md={8}>
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
						<Col md={4}>
							<ReviewTabHead>
								Registration and Manufacturing month
							</ReviewTabHead>
						</Col>
						<Col md={8}>
							<Row>
								<Col xs={12} sm={12} md={12} lg={6} xl={6} className="">
									<div
										className="py-2 dateTimeOne"
										style={{ marginRight: "21px" }}
									>
										<Controller
											control={control}
											name="date1"
											render={({ onChange, onBlur, value, name }) => (
												<DateInput
													minDate={false}
													value={value}
													name={name}
													onChange={onChange}
													ref={register}
												/>
											)}
										/>
										{!!errors.date1 && (
											<ErrorMsg fontSize={"12px"}>
												{errors.date1.message}
											</ErrorMsg>
										)}
									</div>
								</Col>
								<Col xs={12} sm={12} md={12} lg={6} xl={6} className="">
									<div
										className="py-2 dateTimeOne"
										style={{ marginRight: "21px" }}
									>
										<Controller
											control={control}
											name="date2"
											render={({ onChange, onBlur, value, name }) => (
												<DateInput
													minDate={false}
													value={value}
													name={name}
													onChange={onChange}
													ref={register}
												/>
											)}
										/>
										{!!errors.date2 && (
											<ErrorMsg fontSize={"12px"}>
												{errors.date2.message}
											</ErrorMsg>
										)}
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
					<ReviewAnyClaimWrap>
						<ReviewAnyClaimLeft>
							<Row>
								<Col lg={5}>
									<ReviewTabHead>
										<div
											style={{
												position: "relative",
											}}
										>
											Did car's ownership change in the last 12 months?
										</div>
									</ReviewTabHead>
								</Col>
								<Col lg={7}>
									<Switch toggle />
								</Col>
							</Row>
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
