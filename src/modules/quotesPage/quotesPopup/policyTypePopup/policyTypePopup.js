import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Popup from "../../../../components/Popup/Popup";
import { Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { set_temp_data } from "modules/Home/home.slice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { setTempData } from "../../filterConatiner/quoteFilter.slice";
import "./policyTypePopup.css";
const PolicyTypePopup = ({
	show,
	onClose,
	setPolicy,
	policyType,
	setPreviousPopup,
}) => {
	const { register, handleSubmit, errors, setValue, watch } = useForm({
		// resolver: yupResolver(mobileValidation),
		// mode: "onBlur",
		// reValidateMode: "onBlur",
	});

	const dispatch = useDispatch();
	const location = useLocation();

	const handleChange = () => {};
	const [selected, setSelected] = useState("Comprehensive");

	const onSubmit = (data) => {
		setPolicy(data);
		dispatch(
			setTempData({
				policyType: data,
			})
		);

		onClose(false);
		if (data === "Bundled" || data === "Comprehensive") {
			setPreviousPopup(true);
		} else if (data === "Not sure") {
			dispatch(
				set_temp_data({
					ncb: "0%",
					expiry: "Not Sure",
					noClaimMade: false,
					policyExpired: true,
				})
			);
		}
	};

	const content = (
		<>
			<ContentWrap>
				<ContentTitle>What type of policy did you buy last year?</ContentTitle>
				<ContentSubTitle>
					It will help us to provide accurate quotes for you
				</ContentSubTitle>
				<ExpertForm>
					<form id="confirmPolicyForm" action="">
						<div className="homeInsuInput">
							<div className="homeInsuInputWrap">
								<Row>
									<Col lg={4}>
										<label className="panel-heading ratioButton policyTypeRadio">
											<input
												type="radio"
												name="confirmPolicy"
												value="Bundled Policy"
												checked={policyType === "Bundled"}
												onClick={() => onSubmit("Bundled")}
											/>
											<span className="checkmark"></span>
											<span className="smokingTxt">Bundled Policy</span>
											<div className="valuntaryDisTxt">
												Policy with 1 year Own Damage and 3 year Third Party
											</div>
										</label>
									</Col>
									<Col lg={4}>
										<label className="panel-heading ratioButton policyTypeRadio ">
											<input
												type="radio"
												name="confirmPolicy"
												value="Comprehensive Policy"
												checked={policyType === "Comprehensive"}
												onClick={() => onSubmit("Comprehensive")}
											/>
											<span className="checkmark"></span>
											<span className="smokingTxt">Comprehensive Policy</span>
											<div className="valuntaryDisTxt">
												Policy with 1 year Own Damage and 1 year Third Party
											</div>
										</label>
									</Col>
									<Col lg={4}>
										<label className="panel-heading ratioButton policyTypeRadio">
											<input
												type="radio"
												name="confirmPolicy"
												value="Not sure"
												checked={policyType === "Not sure"}
												onClick={() => onSubmit("Not sure")}
											/>
											<span className="checkmark"></span>
											<span className="smokingTxt">
												Not sure about type of policy
											</span>
										</label>
									</Col>
								</Row>
							</div>
						</div>
					</form>
				</ExpertForm>
			</ContentWrap>
		</>
	);
	return (
		<Popup
			height={"auto"}
			width="700px"
			show={show}
			onClose={onClose}
			content={content}
			position="center"
			outside={true}
		/>
	);
};

// PropTypes
PolicyTypePopup.propTypes = {
	show: PropTypes.bool,
	onClose: PropTypes.func,
};

// DefaultTypes
PolicyTypePopup.defaultProps = {
	show: false,
	onClose: () => {},
};

const ContentWrap = styled.div`
	padding: 0px 32px 40px 32px;
	font-family: "Inter-Regular";
	font-size: 14px;
	line-height: 22px;
	color: #333;
	position: relative;
	margin-top: 30px;
`;
const ContentTitle = styled.div`
	font-family: "Inter-SemiBold";
	font-size: 20px;
	line-height: 20px;
	margin-bottom: 8px;
`;
const ContentSubTitle = styled.div`
	font-family: "Inter-Regular";
	font-size: 14px;
	line-height: 22px;
	color: #808080;
	margin-bottom: 24px;
`;
const ExpertForm = styled.div`
	margin: 0 0 48px 0;
	form {
		display: flex;
		font-family: "Inter-Medium";
		font-size: 16px;
		line-height: 24px;
	}
`;

export default PolicyTypePopup;
