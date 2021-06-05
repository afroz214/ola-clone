import React, { useState, useEffect } from "react";
import { Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { TextInput, ErrorMsg, Label, BackButton } from "components";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { VehicleType as Type, set_temp_data } from "modules/Home/home.slice";

export const VehicleType = () => {
	const dispatch = useDispatch();
	const { vehicleType, temp_data } = useSelector((state) => state.home);
	console.log(vehicleType);
	const history = useHistory();
	/*---------------- back button---------------------*/
	const back = () => {
		history.push("/registration");
	};
	/*----------x----- back button-------x-------------*/

	//load vehicle data
	useEffect(() => {
		dispatch(Type());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [selected, setSelected] = useState(false);
	const [carrierType, setCarrierType] = useState(false);

	// prefill data
	useEffect(() => {
		if (temp_data?.productCategoryId) {
			setSelected(temp_data?.productCategoryId);
		}
		if (temp_data?.carrierType) {
			setCarrierType(temp_data?.carrierType);
		}
	}, [temp_data]);

	const { handleSubmit, register, errors } = useForm({
		// resolver: yupResolver(yupValidate),
		// mode: "all",
		// reValidateMode: "onBlur",
	});

	const onSubmit = (VehicalType, cType) => {
		let productSubTypeId = vehicleType?.filter(
			({ productCategoryId }) => Number(productCategoryId) === Number(VehicalType)
		);
		dispatch(
			set_temp_data({
				productSubTypeId: Number(productSubTypeId[0]?.productSubTypeId),
				productCategoryId: Number(VehicalType),
				productSubTypeCode: productSubTypeId[0]?.productSubTypeCode,
				productCategoryName: productSubTypeId[0]?.productCategoryName,
				carrierType: Number(cType),
			})
		);
		history.push("/vehicle-details");
	};

	return (
		<>
			<div className="backBtn" style={{ paddingBottom: "30px" }}>
				<BackButton type="button" onClick={back} style={{ marginTop: "-20px" }}>
					<svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 24 24">
						<path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
					<text style={{ color: "black" }}>Back</text>
				</BackButton>
			</div>
			<div className="ml-4 my-4">
				<Row className="text-center w-100">
					<div className="mt-4 d-flex flex-column justify-content-center w-100">
						<h3 className="text-center w-100">Choose the type of your vehicle</h3>
					</div>
				</Row>
				<Row className="d-flex justify-content-center w-100 mt-4">
					{vehicleType?.map(
						(
							{ productCategoryId, productSubTypeCode, productSubTypeId, img },
							index
						) => (
							<Col
								xs="6"
								sm="6"
								md="4"
								lg="3"
								xl="3"
								className="d-flex justify-content-center my-2"
							>
								<div className="m-1 d-flex justify-content-center h-100 w-100">
									<Button
										variant={
											selected === Number(productCategoryId) ? "success" : "outline-success"
										}
										className="btn-filter text-center h-100 w-100 d-flex flex-column align-content-between"
										type="button"
										onClick={() =>
											Number(productCategoryId) === 2
												? setSelected(Number(productCategoryId))
												: onSubmit(productCategoryId)
										}
									>
										<div
											className="w-100 h-100 d-flex flex-column justify-content-center align-content-center mx-auto p-0"
											// style={{ minWidth: "100px", maxWidth: "100px" }}
										>
											<div
												style={{ maxHeight: "40px", minHeight: "40px" }}
												className="text-center w-100"
											>
												<img
													src={img}
													alt="img"
													className={
														selected === Number(productCategoryId)
															? "filter-white"
															: "filter-green"
													}
													height="65"
													width="65"
												/>
											</div>
											<div
												style={{ maxHeight: "40px", minHeight: "40px" }}
												className="text-center w-100 h-100 mt-4"
											>
												<label
													style={{ fontSize: "14px", fontWeight: "800" }}
													className="text-center h-100 w-100 overflow-auto label-text"
												>
													{productSubTypeCode || "N/A"}
												</label>
											</div>
										</div>
									</Button>
								</div>
							</Col>
						)
					)}
				</Row>
				{selected === 2 && (
					<Row className="d-flex justify-content-center w-100 mt-5">
						<h4 className="w-100 text-center mb-4">
							Choose your vehicle carrier type
						</h4>
						<Col
							sm="6"
							md="6"
							lg="6"
							xl="6"
							className="d-flex justify-content-center my-1"
						>
							<OverlayTrigger
								key={"placement"}
								placement={"top"}
								style={{ zIndex: "999" }}
								overlay={
									<Tooltip id={`tooltip-1`}>
										If the vehicle is used to transport your own goods only.
									</Tooltip>
								}
							>
								<Button
									onClick={() => {
										setCarrierType(1);
										onSubmit(selected, 1);
									}}
									variant={carrierType === 1 ? "success" : "outline-success"}
								>
									Private Carrier
								</Button>
							</OverlayTrigger>
						</Col>
						<Col
							sm="6"
							md="6"
							lg="6"
							xl="6"
							className="d-flex justify-content-center my-1"
						>
							<OverlayTrigger
								key={"placement"}
								placement={"top"}
								style={{ zIndex: "999" }}
								overlay={
									<Tooltip id={`tooltip-2`}>
										If the vehicle is used to transport goods for other people
									</Tooltip>
								}
							>
								<Button
									onClick={() => {
										setCarrierType(2);
										onSubmit(2);
									}}
									variant={carrierType === 2 ? "success" : "outline-success"}
								>
									Public Carrier
								</Button>
							</OverlayTrigger>
						</Col>
					</Row>
				)}
			</div>
		</>
	);
};
