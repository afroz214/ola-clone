import styled from "styled-components";

export const TileWrap = styled.div`
	width: 165px;
	/* height: 54px; */
	font-family: "Inter-Medium";
	border-radius: 2px;
	margin-bottom: 8px;
`;

export const Label = styled.div`
	width: ${(props) => (props.width ? props.width : "148px")};
	height: ${(props) => (props.height ? props.height : "78px")};
	display: table-cell !important;
	vertical-align: middle;
	background-color: #fff;
	color: #333;
	font-size: 14px;
	font-weight: ;
	letter-spacing: 0.5px;
	line-height: 17px;
	text-align: center;
	padding: 0 2px;
	margin-bottom: 2px;
	box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.64);
	-webkit-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.64);
	-moz-box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.64);
	/* border: 1px solid #e3e4e8; */
	border-radius: 0 15px 0px 15px;
	transition: all 0.1s ease-in-out;
	&:hover,
	&:focus {
		box-shadow: 0px 0px 7px 0px #33cc33;
		-webkit-box-shadow: 0px 0px 7px 0px #33cc33;
		-moz-box-shadow: 0px 0px 7px 0px #33cc33;
	}
	cursor: pointer;
`;

export const Img = styled.img`
	width: 54%;
	margin: 0 33px;
	display: block;
	vertical-align: middle;
	height: 45px;
`;
