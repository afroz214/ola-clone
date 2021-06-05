import React, { useState, useEffect } from "react";
import { Tile, MultiSelect, Error, Button as Btn } from "components";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { set_temp_data, Variant as VariantType } from "modules/Home/home.slice";
import { useSelector, useDispatch } from "react-redux";


// validation schema
const yupValidate = yup.object({
	variant: yup.string().required("Variant is required"),
});

export const Variant = ({ stepFn, enquiry_id }) => {
	const dispatch = useDispatch();
	const { temp_data, variant: varnt } = useSelector((state) => state.home);

	const length = !_.isEmpty(varnt) ? varnt?.length : 0;
	const TileVariants = !_.isEmpty(varnt)
		? length > 12
			? varnt.slice(0, 12)
			: varnt
		: [];
	const OtherVariants = length > 12 ? varnt.slice(12) : [];
	const Options = !_.isEmpty(OtherVariants)
		? OtherVariants?.map(({ versionId, versionName }) => ({
				label: versionName,
				name: versionName,
				id: versionId,
				value: versionId,
		  }))
		: [];

	const { handleSubmit, register, watch, control, errors, setValue } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});
	const [show, setShow] = useState(false);

	//load Variant Data
	useEffect(() => {
		if (temp_data?.modelId) {
			dispatch(VariantType({ modelId: temp_data?.modelId }));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [temp_data.modelId]);

	//prefill
	useEffect(() => {
		if (show && temp_data?.versionId && !_.isEmpty(OtherVariants)) {
			let check = OtherVariants?.filter(
				({ versionId }) => Number(versionId) === Number(temp_data?.versionId)
			);
			let selected_option = check?.map(({ versionId, versionName }) => {
				return {
					id: versionId,
					value: versionId,
					label: versionName,
					name: versionName,
				};
			});
			!_.isEmpty(selected_option) && setValue("variant_other", selected_option);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [show]);

	console.log(varnt);
	const other = watch("variant_other");
	const variant = watch("variant");

	useEffect(() => {
		if (variant && !_.isEmpty(TileVariants)) {
			let VariantData = TileVariants?.filter(
				({ versionId }) => Number(versionId) === Number(variant)
			);
			dispatch(
				set_temp_data({
					versionId: VariantData[0]?.versionId,
					versionName: VariantData[0]?.versionName,
				})
			);
			stepFn(4, variant, 5);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [variant]);

	const onSubmit = (data) => {
		if (!_.isEmpty(other) && !_.isEmpty(OtherVariants)) {
			let VariantData = OtherVariants?.filter(
				({ versionId }) => Number(versionId) === Number(other?.value)
			);
			dispatch(
				set_temp_data({
					versionId: VariantData[0]?.versionId,
					versionName: VariantData[0]?.versionName,
				})
			);
			stepFn(4, other?.value, 5);
		}
	};

	return (
		<>
			{!show ? (
				<>
					<Row className="d-flex justify-content-center mx-auto">
						{TileVariants?.map(({versionId, versionName}, index) => (
							<Col
								xs="6"
								sm="6"
								md="4"
								lg="3"
								xl="3"
								className="d-flex justify-content-center mx-auto"
							>
								<Tile
									text={versionName}
									id={versionId}
									register={register}
									name={"variant"}
									value={versionId}
									height={"80px"}
									setValue={setValue}
									Selected={variant}
								/>
							</Col>
						))}
					</Row>
					{!_.isEmpty(OtherVariants) && (
						<Row className="mx-auto d-flex no-wrap mt-4">
							<Col xs="12" sm="12" md="12" lg="12" xl="12" className="linkLine">
								<Button variant="link" className="" onClick={() => setShow(true)}>
									Don't See your Car's variant? Click Here
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
								name="variant_other"
								render={({ onChange, onBlur, value, name }) => (
									<MultiSelect
										name={name}
										onChange={onChange}
										ref={register}
										value={value}
										onBlur={onBlur}
										isMulti={false}
										options={Options}
										placeholder={"Select Variant"}
										errors={errors.variant}
										Styled
										closeOnSelect
									/>
								)}
							/>
							{!!errors?.variant && (
								<Error className="mt-1">{errors?.variant?.message}</Error>
							)}
						</Col>
					</Row>
					<Row className="mx-auto d-flex no-wrap mt-4">
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
