import styled from "styled-components";

export const FormRightMainCont = styled.div`
	/*	width: 765px*/
`;

export const FormRightCont = styled.div`
	float: left;
	position: relative;

	border-radius: 12px;
	box-shadow: 0 8px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%);
	border: solid 1px #e3e4e8;
	background-color: #ffffff;
	padding: 20px 24px 8px 24px;
	margin-bottom: 24px;
`;

export const CustomWrap = styled.div`
	width: 100%;
	margin: 0 auto;
	display: table;
`;

export const ReviewTabHead = styled.div`
	font-family: "Inter-SemiBold";
	font-size: 12px;
	line-height: 20px;
	color: #333;
	margin-bottom: 12px;
	margin-top: 11px;
	margin-right: 18px;
`;

export const ReviewAnyClaimWrap = styled.div`
	float: left;
	width: 100%;
`;
export const ReviewAnyClaimLeft = styled.div`
	float: left;
	width: 100%;
`;

export const ReviewIconfirmWrap = styled.div`
	float: left;
	width: 100%;
	& [type="checkbox"]:checked,
	[type="checkbox"]:not(:checked),
	[type="radio"]:checked,
	[type="radio"]:not(:checked) {
		position: absolute;
		left: -9999px;
		width: 0;
		height: 0;
		visibility: hidden;
	}
	& input {
		display: none;
		float: left;
		width: 18px;
		height: 18px;
		border: solid 1px #e3e4e8;
		margin: 1px 8px 0 0;
		cursor: pointer;
		& [type="checkbox"],
		[type="radio"] {
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
			padding: 0;
		}
	}

	& label {
		padding-left: 26px;
		display: inline-block;
		position: relative;
		font-family: "Inter-Regular";
		font-size: 12px;
		line-height: 24px;
		font-weight: normal;
		color: #000;
		border: none;
		cursor: pointer;
	}

	& fieldError {
		padding-left: 27px;
	}
`;

export const ReviewButtonTab = styled.div`
	float: left;
	width: 100%;
	margin-bottom: 21px;
	display: flex;

	& label {
		height: 42px;
		width: 198px;
		background-color: #fff;
		border: solid 1px #e3e4e8;
		color: #333;
		font-family: "Inter-Regular";
		font-size: 12px;
		font-weight: normal;
		line-height: 20px;
		text-align: center;
		padding: 10px 0;
		margin-right: 21px;
		margin-bottom: 0;
		border-radius: 50px;
		cursor: pointer;
		transition: all 0.1s ease-in-out;
		margin-left: -6px;
	}
	& input:checked + label {
		font-family: "Inter-SemiBold";
		background-color: #fafde3;
		color: #000000;
		box-shadow: none;
		border: 1px dashed #bdd400 !important;
	}
	& [type="checkbox"]:checked,
	[type="checkbox"]:not(:checked),
	[type="radio"]:checked,
	[type="radio"]:not(:checked) {
		position: absolute;
		left: -9999px;
		width: 0;
		height: 0;
		visibility: hidden;
	}
	& input {
		position: absolute !important;
		/* clip: rect(0, 0, 0, 0); */
		height: 17px;
		width: 23px;
		border: 9px;
		overflow: hidden;
		top: 12;
		margin-top: 11px;
		margin-left: 18px;
	}
`;

export const ReviewIconfirmWrap1 = styled.div`
	float: left;
	width: 100%;
	& [type="checkbox"]:checked,
	[type="checkbox"]:not(:checked),
	[type="radio"]:checked,
	[type="radio"]:not(:checked) {
		position: absolute;
		left: -9999px;
		width: 0;
		height: 0;
		visibility: hidden;
	}
	& input {
		display: none;
		float: left;
		width: 18px;
		height: 18px;
		border: solid 1px #e3e4e8;
		margin: 1px 8px 0 0;
		cursor: pointer;
	}
	&:checked + label {
		border: solid 1px red;
	}
	&:checked + label {
		border: solid 1px transparent !important;
	}
`;

export const ReviewLabel = styled.label`
	padding-left: 26px;
	display: inline-block;
	position: relative;
	font-family: "Inter-Regular";
	font-size: 12px;
	line-height: 24px;
	font-weight: normal;
	color: #000;
	border: none;
	cursor: pointer;
	max-width: 100%;
	margin-bottom: 5px;
`;

export const OwnerText = styled.div`
	position: "fixed !important";
`;
