import styled from "styled-components";

export const TileWrap = styled.div`
	float: left;
	width: 165px;
	/* height: 54px; */
	font-family: "Inter-Medium";
	border-radius: 2px;
	margin-bottom: 8px;
	margin-right: 6px;
	margin-left: 30px;
	input {
		clip: rect(0, 0, 0, 0);
		height: 1px;
		width: 1px;
		border: 1px;
		overflow: hidden;
		left: 119px;
		position: relative;
		top: 17px;
	}
`;

export const Label = styled.div`
	width: ${(props) => (props.width ? props.width : "148px")};
	height: ${(props) => (props.height ? props.height : "78px")};
	display: table-cell !important;
	vertical-align: middle;
	background-color: #fff;
	color: #333;
	font-size: 14px;
	font-weight: normal;
	line-height: 17px;
	text-align: center;
	padding: 0 2px;
	margin-right: -1px;
	margin-bottom: 2px;
	/* border: 1px solid #e3e4e8; */
	border-radius: 0 15px 0px 15px;
	box-shadow: none;
	transition: all 0.1s ease-in-out;
	input:checked + label {
		font-family: "Inter-SemiBold";
		background-color: #fff;
		color: #000;
		box-shadow: none;
		border: 1px solid #bdd400 !important;
	}
`;

export const Img = styled.img`
	width: 54%;
	margin: 0 33px;
	display: block;
	vertical-align: middle;
`;
