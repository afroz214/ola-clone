import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import editImg from "../../../assets/img/edit.png";
import PolicyTypePopup from "../quotesPopup/policyTypePopup/policyTypePopup";
import IDVPopup from "../quotesPopup/idvPopup/IDVPopup";
import NCBPopup from "../quotesPopup/ncbPopup/NCBPopup";
import { useHistory } from "react-router-dom";
import { addDays } from "date-fns";
import { MultiSelect, Error, ErrorMsg } from "components";
import PrevInsurerPopup from "../quotesPopup/prevInsurerPopup/prevInsurerPopup";
import DateInput from "../../proposal/DateInput";
import { Row, Col } from "react-bootstrap";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { clear, NcbList as getNcb, SaveQuoteData } from "./quoteFilter.slice";

/*---------------date config----------------*/
const policyMax = addDays(new Date(Date.now() - 86400000), 45);
/*-----x---------date config-----x----------*/

export const FilterContainer = (quotesPage) => {
	const dispatch = useDispatch();
	const { tempData } = useSelector((state) => state.quoteFilter);
	const loginData = useSelector((state) => state.login);
	const { handleSubmit, register, watch, control, errors, setValue } = useForm(
		{}
	);
	const userData = useSelector((state) => state.home);
	const regDate = watch("regDate");
	const history = useHistory();

	const [prevPopup, setPrevPopup] = useState(false);
	const [ncbPopup, setNcbPopup] = useState(false);
	const [policyType, setPolicyType] = useState(tempData?.policyType || false);
	const [policyPopup, setPolicyPopup] = useState(policyType ? false : true);
	const [dateEditor, setDateEditor] = useState(false);
	const [regisDate, setRegisDate] = useState(
		userData.temp_data?.regDate || "01-Apr-2018"
	);
	const [prevNcb, setPrevNcb] = useState(tempData?.ncbValue || "0%");

	useEffect(() => {
		if (regDate) {
			setRegisDate(regDate);
			setDateEditor(false);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [regDate]);

	useEffect(() => {
		dispatch(getNcb());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tempData?.ncbValue]);

	useEffect(() => {
		if (userData.temp_data && userData.temp_data?.ncb) {
			const quoteData = {
				userId: loginData?.corpId,
				productSubTypeId: userData?.temp_data?.productSubTypeId,
				fullName: userData.temp_data?.firstName + userData.temp_data?.lastName,
				emailId: userData.temp_data?.emailId,
				mobileNo: userData.temp_data?.mobileNo,
				dob: "10/11/1998",
				rto: userData.temp_data?.rtoNumber,
				manfactureId: userData.temp_data?.manfId,
				motorManufactureYear: userData.temp_data?.manufactureYear || 2020,
				model: userData.temp_data?.modelName,
				version: userData.temp_data?.modelId, //have doubt
				vehicleRegisterAt: userData.temp_data?.comVehicleTypeName || "Taxi",
				vehicleRegisterDate: userData.temp_data?.regDate,
				vehicleRegisterType: userData.temp_data?.ownerTypeId,
				policyExpiryDate: userData.temp_data?.expiry,
				hasExpired: userData.temp_data?.policyExpired ? "yes" : "no",
				ncb: userData.temp_data?.ncb,
				fuelType: userData.temp_data?.fuel,
				vehicleUsage: userData.temp_data?.carrierType || 2,
			};
			dispatch(SaveQuoteData(quoteData));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userData.temp_data?.ncb]);

	return (
		<>
			<FilterContainerMain>
				<FilterMenuWrap>
					<FilterMenuRow>
						<Row style={{ margin: "auto" }}>
							<Col lg={3} md={12}>
								<FilterMenuOpenWrap
									onClick={() => {
										swal({
											title: "Do you want to edit details",
											text: "",
											icon: "info",
											buttons: true,
											dangerMode: true,
										}).then((willEdit) => {
											if (willEdit) {
												history.push(`/vehicle-details`);
											} else {
											}
										});
									}}
								>
									<FilterMenuOpenTitle>
										{userData?.temp_data?.manfName ? (
											<>
												{userData?.temp_data?.manfName}-
												{userData?.temp_data?.modelName}
											</>
										) : (
											<>Volkswagen Polo - Dreamline 1197 CC </>
										)}
									</FilterMenuOpenTitle>
									<FilterMenuOpenSub>
										{userData?.temp_data?.manfName ? (
											<>
												{userData?.temp_data?.productSubTypeCode} | Petrol |
												{userData?.temp_data?.rtoNumber} AR 7294
											</>
										) : (
											<> Private Car | Petrol | MH01 AR 7294 </>
										)}

										<img src={editImg} />
									</FilterMenuOpenSub>
								</FilterMenuOpenWrap>
							</Col>

							<Col lg={3} md={12}>
								<FilterMenuOpenWrap>
									<FilterMenuOpenSub onClick={() => setPolicyPopup(true)}>
										Previous policy type:
										<FilterMenuOpenSubBold>
											{policyType} <img src={editImg} />
										</FilterMenuOpenSubBold>
									</FilterMenuOpenSub>
									<FilterMenuOpenEdit>
										<FilterMenuOpenTitle onClick={() => setPrevPopup(true)}>
											Previous Insurer:
											<FilterMenuOpenSubBold>
												<b>Bajaj Allianz</b> <img src={editImg} />
											</FilterMenuOpenSubBold>
										</FilterMenuOpenTitle>
									</FilterMenuOpenEdit>
								</FilterMenuOpenWrap>
							</Col>

							<Col lg={3} md={12}>
								<FilterMenuOpenWrap>
									<FilterMenuOpenSub>
										Policy Expiry:{" "}
										<FilterMenuOpenSubBold>
											{" "}
											{userData.temp_data?.expiry
												? userData?.temp_data?.expiry
												: "30 - Apr - 2021"}
										</FilterMenuOpenSubBold>
									</FilterMenuOpenSub>
									<FilterMenuOpenEdit>
										<FilterMenuOpenTitle>
											Registered on:{" "}
											<FilterMenuOpenSubBold>
												<b>{regisDate}</b>
												<img
													src={editImg}
													onClick={() => setDateEditor(true)}
												/>
												{dateEditor && (
													<div
														className="py-2 dateTimeOne"
														style={{ position: "relative", bottom: "33px" }}
													>
														<Controller
															control={control}
															name="regDate"
															render={({ onChange, onBlur, value, name }) => (
																<DateInput
																	maxDate={policyMax}
																	minDate={false}
																	value={value}
																	name={name}
																	onChange={onChange}
																	ref={register}
																/>
															)}
														/>
														{!!errors.regDate && (
															<ErrorMsg fontSize={"12px"}>
																{errors.regDate.message}
															</ErrorMsg>
														)}
													</div>
												)}
											</FilterMenuOpenSubBold>
										</FilterMenuOpenTitle>
									</FilterMenuOpenEdit>
								</FilterMenuOpenWrap>
							</Col>

							<Col lg={3} md={12}>
								<FilterMenuOpenWrap>
									<FilterMenuOpenSub>
										New NCB:{" "}
										<FilterMenuOpenSubBold>
											{" "}
											{userData.temp_data?.ncb
												? userData?.temp_data?.ncb
												: "10%"}
										</FilterMenuOpenSubBold>
									</FilterMenuOpenSub>
									<FilterMenuOpenEdit>
										<FilterMenuOpenTitle onClick={() => setNcbPopup(true)}>
											Previous NCB:
											<FilterMenuOpenSubBold>
												<b>{prevNcb}</b> <img src={editImg} />
											</FilterMenuOpenSubBold>
										</FilterMenuOpenTitle>
									</FilterMenuOpenEdit>
								</FilterMenuOpenWrap>
							</Col>
						</Row>
					</FilterMenuRow>
				</FilterMenuWrap>
			</FilterContainerMain>
			{policyPopup && (
				<PolicyTypePopup
					setPolicy={setPolicyType}
					policyType={policyType}
					show={policyPopup}
					onClose={setPolicyPopup}
					setPreviousPopup={setPrevPopup}
				/>
			)}

			{prevPopup && (
				<PrevInsurerPopup show={prevPopup} onClose={setPrevPopup} />
			)}
			{ncbPopup && (
				<NCBPopup show={ncbPopup} setNcb={setPrevNcb} onClose={setNcbPopup} />
			)}
		</>
	);
};

export const Filters = ({}) => {
	const [idvPopup, setIdvPopup] = useState(false);
	const { handleSubmit, register, watch, control, errors, setValue } = useForm(
		{}
	);
	const DummyState = [
		{
			name: "Relevance",
			label: "Relevance",
			value: "2",
			id: "2",
		},
		{
			name: "Price (low to high)",
			label: "Price (low to high)",
			value: "3",
			id: "3",
		},
		{
			name: "Price (high to low)",
			label: "Price (high to low)",
			value: "4",
			id: "4",
		},
	];
	const [editSort, setEditSort] = useState(false);
	return (
		<>
			<Row>
				<Col lg={6} md={12}>
					<FilterMenuQuoteBoxWrap onClick={() => setIdvPopup(true)}>
						<FilterTopBoxChange>
							<img src={editImg} />
						</FilterTopBoxChange>
						<FilterTopBoxTitle>
							Vehicle Value (IDV) <span>??? 3,02,575</span>
						</FilterTopBoxTitle>
					</FilterMenuQuoteBoxWrap>
				</Col>
				<Col lg={6} md={12}>
					<SortContainer>
						<Controller
							control={control}
							name="state_other"
							defaultValue={""}
							render={({ onChange, onBlur, value, name }) => (
								<>
									<MultiSelect
										knowMore
										quotes
										name={name}
										onChange={onChange}
										ref={register}
										value={value}
										onBlur={onBlur}
										isMulti={false}
										options={DummyState}
										placeholder={"Relevance"}
										errors={errors.state}
										Styled
										closeOnSelect
									/>
									<SortConatinerText>Sort by:</SortConatinerText>
								</>
							)}
						/>
					</SortContainer>
				</Col>
			</Row>
			{idvPopup && <IDVPopup show={idvPopup} onClose={setIdvPopup} />}
		</>
	);
};

const FilterContainerMain = styled.div`
	width: 100%;
	border-bottom: solid 1px #e3e4e8;
	box-shadow: 0 24px 34px -8px rgb(0 0 0 / 9%);
	margin-bottom: 16px;
	height: auto;
	display: flex;
	align-items: end;
	justify-content: center;
`;
const FilterMenuWrap = styled.div`
	margin: 10px 20px 0px;

	padding: 8px 0;
	font-family: "Inter-Regular";
	color: #333;
	@media (max-width: 996px) {
		margin: 10px 20px 0px 40px;
	}
`;

const FilterMenuRow = styled.div`
	float: left;
	width: 100%;
	margin-bottom: 23px;

	&:last-child {
		margin-bottom: 0;
		margin-top: -10px;
	}
`;

const FilterMenuOpenWrap = styled.div`
	&:nth-child(2) {
		width: 291px;
		padding-left: 26px;
		margin-right: 16px;
	}
	float: left;
	position: relative;
	padding-bottom: 10px;
	margin-top: 8px;
	@media (max-width: 996px) {
		display: flex !important;
		min-height: 50px;
		width: 100%;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap !important;
	}
`;
//

const FilterMenuOpenEdit = styled.div`
	position: absolute;
	top: 25px;

	font-size: 12px;
	line-height: 15px;
	color: #000;
	padding: 2px 0px;
	cursor: pointer;
`;

const FilterMenuOpenTitle = styled.div`
	float: left;
	// width: 100%;
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 8px;
	padding-right: 7px;
	text-overflow: ellipsis;
	white-space: nowrap;
	@media (max-width: 996px) {
		margin-bottom: 15px;
	}
`;

const FilterMenuOpenSub = styled.div`
	color: #000000;
	font-weight: 600;
	float: left;
	// width: 100%;
	font-size: 14px;
	line-height: 17px;
	color: #707070;
	min-width: 250px;
	@media (max-width: 996px) {
		margin-bottom: 15px;
		min-width: auto;
	}
`;

const FilterMenuOpenSubBold = styled.span`
	color: #000000;
	font-weight: 600;
`;

const FilterMenuQuoteBoxWrap = styled.button`
	width: 100%;
	margin-top: 1px;
	margin-left: -75px;
	background: #fff;
	border-radius: 8px;
	padding-top: 10px;
	line-height: 27px;

	border: 1px solid #e0e0e0;
	float: right;
	position: relative;
	padding: 5px 16px 7px;
	z-index: 2;
	@media only screen and (max-width: 992px) {
		width: 50%;
		margin: 10px 30px;
	}
`;

const FilterTopBoxChange = styled.div`
	float: right;
	font-size: 12px;
	line-height: 15px;
	color: #000;
	border-radius: 4px;
	padding: 6px 6px;
	cursor: pointer;
	margin-right: 3px;
`;

const FilterTopBoxTitle = styled.div`
	font-family: "Inter-SemiBold";
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 6px;
	padding-top: 6px;
	float: initial;
`;
const SortConatinerText = styled.div`
	position: relative;
	bottom: 31px;
	left: 52px;
	width: 68px;
	font-family: "Inter-SemiBold";
	font-size: 14px;
	line-height: 20px;
`;
const SortContainer = styled.div`
	width: 100%;
	float: left;
	@media only screen and (max-width: 992px) {
		width: 50%;
		float: right;
		margin: 10px 30px;
	}
`;
