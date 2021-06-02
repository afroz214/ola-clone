import styled from "styled-components";
import { Row } from "react-bootstrap";

export const ReviewCardHeader = styled.div`
	font-family: "Inter-SemiBold";
	font-size: 15px;
	margin-top: -2px;
	position: relative;
	right: 58px;
	margin: 0 0 10px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const FormFooter = styled.div`
	/*	width: 765px;*/
	padding: 0 24px;
`;

export const SubmitBtn = styled.button`
	cursor: pointer;
	float: right;
	width: 312px;
	margin-top: -5px;
	background-color: #dcdde0;
	cursor: auto;
	margin-bottom: 60px;
	position: relative;
	width: 274px;
	height: 54px;
	border-radius: 50px;
	background-color: #bdd400;
	color: #ffffff;
	font-family: "Inter-SemiBold";
	font-size: 14px;
	line-height: 28px;
	font-weight: 500;
	outline: none;
	border: none;
	text-transform: uppercase;
	background-color: #bdd400 !important;
	color: #000 !important;
	border: none !important;
`;
export const DivTag1 = styled.div`
	@media (min-width: 890px) {
		width: 28.5%;
		max-width: 28.5%;
		flex: 0 0 28.5%;
	}
	@media screen (min-width: 300px) {
		padding: 0;
	}
`;

export const DivTag2 = styled.div`
	@media (min-width: 890px) {
		width: 71.5%;
		max-width: 71.5%;
		flex: 0 0 71.5%;
	}
	@media screen (min-width: 300px) {
		padding: 0;
	}

	@media (max-width: 960px) {
		position: "relative";
		top: 60px !important;
	}
`;

export const RowTag = styled(Row)`
	margin: 15px 60px 20px 30px !important;
	@media (max-width: 600px) {
		margin: 15px 0 20px 0 !important;
		width: 100%;
	}
`;
