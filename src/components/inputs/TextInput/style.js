import styled from "styled-components";

export const TextInput = styled.input`
	width: 100%;
	border-radius: 50px;
	text-align: inherit;
	color: #333;
	padding: 20px 8px 5px 20px;
	font-weight: 400;
	font-family: "Inter-Light";
	font-size: 14px;
	border: solid 1px #e3e4e8;
	height: 50px;

	& ~ label {
		pointer-events: none;
		top: 12px;
	}
	&:focus {
		outline: none;
		border: ${(props) => {
				if (props.error) return "2px solid";
				else return "2px solid";
			}}
			${(props) => (props.error === "danger" ? "" : "")};
		& ~ label {
			font-size: 12px;
			top: 2px;
			left: 20px;
			font-family: "Inter-Medium";
			color: #000;
		}
	}
	&:not(:placeholder-shown) ~ label {
		font-size: 12px;
		top: 2px;
		left: 20px;
		font-weight: 500;
		font-family: "Inter-Medium";
	}
`;

export const FormGroup = styled.div`
	position: relative;
	text-align: left;
	width: 100%;
	margin-bottom: 24px;
`;

export const Label = styled.label`
	position: absolute;
	font-family: "Inter-Medium";
	color: #333;
	transition: all 0.3s;
	top: 13px;
	left: 20px;
	font-weight: 500px;
	font-size: 16px;
`;
