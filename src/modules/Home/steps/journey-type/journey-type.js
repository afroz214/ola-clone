import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Button as Btn, BackButton } from "components";
import { useHistory, useLocation } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Type, set_temp_data } from "modules/Home/home.slice";
import _ from "lodash";

// validation schema
const yupValidate = yup.object({
	ownerTypeId: yup.string().required("Type is required"),
});

export const JourneyType = ({ enquiry_id }) => {
	const dispatch = useDispatch();
	const { type, temp_data } = useSelector((state) => state.home);
	const history = useHistory();

	/*---------------- back button---------------------*/
	const back = () => {
		history.push(`/vehicle-details?enquiry_id=${temp_data?.enquiry_id || enquiry_id}`);
	};
	/*----------x----- back button-------x-------------*/

	const { handleSubmit, register, errors, setValue, watch } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});

	let selected = watch("ownerTypeId") || temp_data?.ownerTypeId;

	//type load
	useEffect(() => {
		dispatch(Type());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSubmit = (ownerTypeId) => {
		dispatch(set_temp_data({ ownerTypeId: ownerTypeId }));
		history.push(`/quotes?enquiry_id=${temp_data?.enquiry_id || enquiry_id}`);
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
			<div className="my-4 mx-auto">
				<Row className="text-center w-100 mx-auto">
					<div className="mt-0 d-flex flex-column justify-content-center w-100">
						<h4 className="text-center w-100">Choose the Journey Type</h4>
					</div>
				</Row>
				<Row className="d-flex justify-content-center w-100 mt-5 mx-auto">
					{type?.map(({ ownerType, ownerTypeId }) => (
						<Col
							xs="6"
							sm="6"
							md="6"
							lg="6"
							xl="6"
							className="d-flex justify-content-center my-2 mx-auto"
						>
							<Button
								variant={
									Number(selected) === Number(ownerTypeId)
										? "success"
										: "outline-success"
								}
								onClick={() => {
									setValue("ownerTypeId", ownerTypeId);
									onSubmit(ownerTypeId);
								}}
								className="py-3 px-4"
							>
								<strong style={{ letterSpacing: "1px" }}>{ownerType}</strong>
							</Button>
						</Col>
					))}
					<input ref={register} name="ownerTypeId" type="hidden" />
				</Row>
				{/* <Row>
					<Col
						sm="12"
						md="12"
						lg="12"
						xl="12"
						className="d-flex justify-content-center mt-5 mx-auto w-100"
					>
						
							<Btn
								buttonStyle="outline-solid"
								hex1="#006400"
								hex2="#228B22"
								borderRadius="5px"
								type="submit"
							>
								Proceed
							</Btn>
					</Col>
				</Row> */}
			</div>
		</>
	);
};
