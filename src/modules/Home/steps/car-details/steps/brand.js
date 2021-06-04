import React, { useState, useEffect } from "react";
import { Tile, MultiSelect, Error, Button as Btn } from "components";
import { Row, Col, Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { BrandType, set_temp_data } from "modules/Home/home.slice";

// validation schema
const yupValidate = yup.object({
	brand_other: yup.string().required("Brand is required"),
});

export const Brand = ({ stepFn }) => {
	const dispatch = useDispatch();
	const { brandType, temp_data } = useSelector((state) => state.home);

	const length = !_.isEmpty(brandType) ? brandType?.length : 0;
	const TileBrands = !_.isEmpty(brandType)
		? length > 12
			? brandType.slice(0, 12)
			: brandType
		: [];
	const OtherBrands = length > 12 ? brandType.slice(12) : [];
	const Options = !_.isEmpty(OtherBrands)
		? OtherBrands?.map(({ manfName, manfId }) => ({
				label: manfName,
				name: manfName,
				id: manfId,
				value: manfId,
		  }))
		: [];

	const { handleSubmit, register, watch, control, errors, setValue, reset } = useForm({
		resolver: yupResolver(yupValidate),
		mode: "all",
		reValidateMode: "onBlur",
	});
	const [show, setShow] = useState(false);
	
	//load Brand Data
	useEffect(() => {
		if (temp_data?.productSubTypeId) {
			dispatch(BrandType({ productSubTypeId: temp_data?.productSubTypeId }));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [temp_data.productSubTypeId]);

	//switch screens
	// useEffect(() => {
	// 	if (!_.isEmpty(TileBrands) && temp_data?.manfId) {
	// 		let check = TileBrands?.filter(
	// 			({ manfId }) => Number(manfId) === Number(temp_data?.manfId)
	// 		);
	// 		if (check?.length) {
	// 			setShow(false);
	// 		}
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [TileBrands]);

	// useEffect(() => {
	// 	if (!_.isEmpty(OtherBrands) && temp_data?.manfId) {
	// 		let check = OtherBrands?.filter(
	// 			({ manfId }) => Number(manfId) === Number(temp_data?.manfId)
	// 		);
	// 		if (check?.length) {
	// 			setShow(true);
	// 		}
	// 	}
	// 	else {
	// 		setShow(false)
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [OtherBrands]);

	useEffect(() => {
		if (show && temp_data?.manfId && !_.isEmpty(OtherBrands)) {
			let check = OtherBrands?.filter(
				({ manfId }) => Number(manfId) === Number(temp_data?.manfId)
			);
			let selected_option = check?.map(({ manfId, manfName }) => {
				return { id: manfId, value: manfId, label: manfName, name: manfName };
			});
			!_.isEmpty(selected_option) && setValue('brand_other', selected_option);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [show]);

	const brand = watch("brand");
	const other = watch("brand_other");

	useEffect(() => {
		if (brand && !_.isEmpty(TileBrands)) {
			let BrandData = TileBrands?.filter(
				({ manfId }) => Number(manfId) === Number(brand)
			);
			dispatch(
				set_temp_data({
					manfId: BrandData[0]?.manfId,
					manfName: BrandData[0]?.manfName,
					modelId: null
				})
			);
			(stepFn(1, brand, 2))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [brand]);

	const onSubmit = (data) => {
		if (!_.isEmpty(other) && !_.isEmpty(OtherBrands)) {
			let BrandData = OtherBrands?.filter(
				({ manfId }) => Number(manfId) === Number(other?.value)
			);
			dispatch(
				set_temp_data({
					manfId: BrandData[0]?.manfId,
					manfName: BrandData[0]?.manfName,
					modelId: null
				})
			);
			stepFn(1, other?.value, 2);
		}
	};

	return (
		<>
			{!show ? (
				<>
					<Row className="mx-auto">
						{TileBrands?.map(({ img, manfId, manfName }, index) => (
							<Col
								xs="6"
								sm="6"
								md="4"
								lg="3"
								xl="3"
								className="d-flex justify-content-center"
							>
								<Tile
									logo={img}
									text={manfName || "N/A"}
									id={manfId}
									register={register}
									name={"brand"}
									value={manfId}
									setValue={setValue}
									Selected={brand || temp_data?.manfId}
								/>
							</Col>
						))}
					</Row>
					{!_.isEmpty(OtherBrands) && (
						<Row className="mx-auto d-flex no-wrap mt-4">
							<Col xs="12" sm="12" md="12" lg="12" xl="12" className="linkLine">
								<Button variant="link" className="" onClick={() => setShow(true)}>
									Don't See your Vehicle's Brand? Click Here
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
								name="brand_other"
								render={({ onChange, onBlur, value, name }) => (
									<MultiSelect
										name={name}
										value={value}
										onChange={onChange}
										ref={register}
										onBlur={onBlur}
										isMulti={false}
										options={Options}
										placeholder={"Select Brand"}
										errors={errors.brand_other}
										Styled
										closeOnSelect
									/>
								)}
							/>
							{!!errors?.brand_other && (
								<Error className="mt-1">{errors?.brand_other?.message}</Error>
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
