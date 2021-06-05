import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import tooltip from "../../../../assets/img/tooltip.svg";
import CustomTooltip from "../../../../components/tooltip/CustomTooltip";
import Popup from "../../../../components/Popup/Popup";
import "../../quotesPopup/idvPopup/idvPopup.css";
import { setTempData } from "../../filterConatiner/quoteFilter.slice";
import _ from "lodash";
const NCBPopup = ({ show, onClose, ncb, setNcb }) => {
	const dispatch = useDispatch();
	const { handleSubmit, register, watch, control, errors, setValue } = useForm({
		// resolver: yupResolver(),
		// mode: "all",
		// reValidateMode: "onBlur",
	});
	const { ncbList, tempData } = useSelector((state) => state.quoteFilter);
	const [noClaim, setNoClaim] = useState(false);
	const expPolicy = watch("claimMade");
	const ncbValue = watch("existinNcb");

	const myOrderedNcbList = _.sortBy(ncbList, (o) => o.discountRate);

	const onSubmit = (data) => {
		dispatch(
			setTempData({
				expPolicy: expPolicy,
				ncbValue: expPolicy === "yes" ? "0%" : ncbValue,
			})
		);
		if (expPolicy === "yes") {
			setNcb("0%");
		} else {
			if (ncbValue) {
				setNcb(ncbValue);
			}
		}
		onClose(false);
	};

	useEffect(() => {
		if (expPolicy === "no" || tempData?.expPolicy === "no") {
			setNoClaim(true);
		} else {
			setNoClaim(false);
		}
		if (expPolicy === "yes") {
			setNoClaim(false);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [expPolicy, tempData?.expPolicy]);
	const content = (
		<>
			<Conatiner>
				<Row>
					<PaymentTermTitle>
						No Claim Bonus (NCB) Value
						<span
							class="cardTooltipSvg"
							data-toggle="popover"
							title=""
							data-content="Insured Value (IDV) Text"
							data-original-title="Insured Value (IDV)"
						>
							<CustomTooltip
								rider="true"
								id="RiderInbuilt__Tooltip"
								place={"bottom"}
								customClassName="mt-3 riderPageTooltip "
							>
								<img
									data-tip="<h3 >No claim Bonus</h3> <div>No claim Bonus Text</div>"
									data-html={true}
									data-for="RiderInbuilt__Tooltip"
									src={tooltip}
									alt="tooltip"
									className="toolTipRiderChild"
								/>
							</CustomTooltip>
						</span>
					</PaymentTermTitle>
					<PopupSubTitle>
						No Claim Bonus or NCB is a reward given by an insurance company to
						an insured for not raising any claim requests during a policy year.
						The NCB discount is applicable on the premium amount.
					</PopupSubTitle>
					<PopupSubHead>Any claims made in your existing policy?</PopupSubHead>
					<div class="vehRadioWrap">
						<input
							type="radio"
							id="claimMadeYes"
							name="claimMade"
							value="yes"
							ref={register}
							defaultChecked={tempData?.expPolicy === "yes"}
						/>
						<label for="claimMadeYes">Yes</label>
						<input
							type="radio"
							id="ownerNo"
							name="claimMade"
							value="no"
							ref={register}
							defaultChecked={tempData?.expPolicy === "no"}
						/>
						<label for="ownerNo">No</label>
					</div>

					{noClaim ? (
						<>
							<div
								class="popupSubHead ncsSubHeadNo"
								style={{ display: "block" }}
							>
								Please select your existing NCB
							</div>
							<div
								class="vehRadioWrap ncsPercentCheck"
								style={{ display: "block" }}
							>
								{myOrderedNcbList.map((item, index) => (
									<>
										<input
											type="radio"
											id={item?.ncbId}
											name="existinNcb"
											value={`${item?.discountRate}%`}
											ref={register}
											defaultChecked={
												tempData?.ncbValue === `${item?.discountRate}%`
											}
										/>
										<label for={item?.ncbId}>{item?.discountRate}%</label>
									</>
								))}
							</div>

							<EligText>
								You are eligible for {ncbValue} NCB in your new policy
								<div>Your new NCB is set to {ncbValue}</div>
							</EligText>
						</>
					) : (
						<EligText>
							Since you have made claim in your existing policy, your NCB will
							be reset to 0%
						</EligText>
					)}
					<PaymentTermRadioWrap>
						<ApplyButton onClick={() => onSubmit()}>APPLY</ApplyButton>
					</PaymentTermRadioWrap>
				</Row>
			</Conatiner>
		</>
	);
	return (
		<Popup
			height={"auto"}
			width="400px"
			show={show}
			onClose={onClose}
			content={content}
			position="center"
			top="top"
			left="80%"
		/>
	);
};

// PropTypes
NCBPopup.propTypes = {
	show: PropTypes.bool,
	onClose: PropTypes.func,
};

// DefaultTypes
NCBPopup.defaultProps = {
	show: false,
	onClose: () => {},
};

const Conatiner = styled.div`
	padding: 30px;
`;

const PaymentTermTitle = styled.div`
	float: left;
	width: 100%;
	font-family: "Inter-SemiBold";
	font-size: 16px;
	line-height: 20px;
	color: #333;
	padding-bottom: 10px;
	border-bottom: solid 1px #e3e4e8;
`;

const PopupSubTitle = styled.div`
	float: left;
	width: 100%;
	font-family: "Inter-Regular";
	font-size: 14px;
	line-height: 20px;
	color: #333;
	margin-top: 16px;
	margin-bottom: 16px;
`;

const PopupSubHead = styled.div`
	float: left;
	width: 100%;
	font-family: "Inter-SemiBold";
	font-size: 14px;
	line-height: 17px;
	color: #333;
	margin-bottom: 12px;
`;

const ApplyButton = styled.button`
	width: 117px;
	height: 32px;
	border-radius: 4px;
	background-color: #bdd400;
	border: solid 1px #bdd400;
	font-family: "Inter-SemiBold";
	font-size: 15px;
	line-height: 20px;
	color: #000;
	/* text-transform: uppercase; */
	margin: 0;
	float: right;
	border-radius: 50px;
`;

const EligText = styled.div`
	float: left;
	width: 100%;
	border: dashed 1px #000;
	padding: 11px 13px;
	font-size: 14px;
	line-height: 20px;
	color: #000;
	margin-bottom: 24px;
`;

const PaymentTermRadioWrap = styled.div`
	float: left;
	width: 100%;
	margin-bottom: 18px;
`;

export default NCBPopup;
