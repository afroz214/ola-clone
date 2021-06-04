import React, { useState, useEffect } from "react";
import { Tile, MultiSelect, Error, Button as Btn } from "components";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { ModelType, set_temp_data } from "modules/Home/home.slice";
import { useSelector, useDispatch } from "react-redux";

// validation schema
const yupValidate = yup.object({
	model_other: yup.string().required("Model is required"),
});

export const Model = ({ stepFn }) => {
	const dispatch = useDispatch();
	const { modelType, temp_data } = useSelector((state) => state.home);

	const length = !_.isEmpty(modelType) ? modelType?.length : 0;
	const TileModels = !_.isEmpty(modelType)
		? length > 12
			? modelType.slice(0, 12)
			: modelType
		: [];
	const OtherModels = length > 12 ? modelType.slice(12) : [];
	const Options = !_.isEmpty(OtherModels)
		? OtherModels?.map(({ modelName, modelId }) => ({
				label: modelName,
				name: modelName,
				id: modelId,
				value: modelId,
		  }))
		: [];

	const { handleSubmit, register, watch, control, errors, setValue } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});
	const [show, setShow] = useState(false);

	//load Model Data
	useEffect(() => {
		if (temp_data?.productSubTypeId && temp_data?.manfId) {
			dispatch(
				ModelType({
					productSubTypeId: temp_data?.productSubTypeId,
					manfId: temp_data?.manfId,
				})
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [temp_data]);

	//switch screens
	useEffect(() => {
		if (!_.isEmpty(TileModels) && temp_data?.modelId) {
			let check = TileModels?.filter(
				({ modelId }) => Number(modelId) === Number(temp_data?.modelId)
			);
			if (check?.length) {
				setShow(false);
			}
			else {
				setShow(true)
			}
		} 
		else if (!_.isEmpty(OtherModels) && temp_data?.modelId) {
			let check = OtherModels?.filter(
				({ modelId }) => Number(modelId) === Number(temp_data?.modelId)
			);
			if (check?.length) {
				setValue("model_other", {
					id: check[0]?.modelId,
					name: check[0]?.modelName,
					value: check[0]?.modelId,
					label: check[0]?.modelName,
				});
				setShow(true);
			}
			else {
				setShow(false);
			}
		}
		else {
			setShow(false);
		} 
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [temp_data.modelId]);

	const other = watch("model_other");
	const model = watch("model");

	useEffect(() => {
		if (model) {
			let ModelData = modelType?.filter(
				({ modelId }) => Number(modelId) === Number(model)
			);
			dispatch(
				set_temp_data({
					modelId: ModelData[0]?.modelId,
					modelName: ModelData[0]?.modelName,
				})
			);
			stepFn(2, model, 3);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [model]);

	const onSubmit = (data) => {
		console.log(other);
		if (!_.isEmpty(other)) {
			let ModelData = modelType?.filter(
				({ modelId }) => Number(modelId) === Number(other?.value)
			);
			dispatch(
				set_temp_data({
					modelId: ModelData[0]?.modelId,
					modelName: ModelData[0]?.modelName,
				})
			);
			stepFn(2, other?.value, 3);
		}
	};

	return (
		<>
			{!show ? (
				<>
					<Row className="d-flex justify-content-center mx-auto">
						{TileModels?.map(({ modelId, modelName }, index) => (
							<Col
								xs="6"
								sm="6"
								md="4"
								lg="3"
								xl="3"
								className="d-flex justify-content-center mx-auto"
							>
								<Tile
									text={modelName || "N/A"}
									id={modelId}
									register={register}
									name={"model"}
									value={modelId}
									height={"50px"}
									setValue={setValue}
									Selected={model || temp_data?.modelId}
								/>
							</Col>
						))}
					</Row>
					{!_.isEmpty(OtherModels) && (
						<Row className="mx-auto d-flex no-wrap mt-4">
							<Col xs="12" sm="12" md="12" lg="12" xl="12" className="linkLine">
								<Button variant="link" className="" onClick={() => setShow(true)}>
									Don't See your Vehicle's Model? Click Here
								</Button>
							</Col>
						</Row>
					)}
				</>
			) : (
				<Form onSubmit={handleSubmit(onSubmit)} className="w-100 mx-auto">
					<Row className="mx-auto d-flex no-wrap mt-4 w-100">
						<Col xs="12" sm="12" md="12" lg="12" xl="12">
							<Controller
								control={control}
								name="model_other"
								defaultValue={""}
								render={({ onChange, onBlur, value, name }) => (
									<MultiSelect
										name={name}
										onChange={onChange}
										ref={register}
										value={value}
										onBlur={onBlur}
										isMulti={false}
										options={Options}
										placeholder={"Select Model"}
										errors={errors.model}
										Styled
										closeOnSelect
									/>
								)}
							/>
							{!!errors?.model && (
								<Error className="mt-1">{errors?.model?.message}</Error>
							)}
						</Col>
					</Row>
					<Row className="mx-auto d-flex no-wrap mt-4 text-center">
						<Col xs="12" sm="12" md="12" lg="12" xl="12" className="linkLine">
							<Button
								variant="link"
								className="outline-none"
								onClick={() => setShow(false)}
							>
								{"Go back to the Quick Picker"}
							</Button>
						</Col>
					</Row>
					<Row>
						<Col
							sm="12"
							md="12"
							lg="12"
							xl="12"
							className="d-flex justify-content-center mt-5"
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
					</Row>
				</Form>
			)}
		</>
	);
};
