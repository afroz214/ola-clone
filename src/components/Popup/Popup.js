import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { useOutsideClick } from "../../hoc";

const Popup = ({
	show,
	onClose,
	content,
	height,
	width,
	position,
	top,
	left,
	backGround,
}) => {
	const dropDownRef = useRef(null);
	useOutsideClick(dropDownRef, () => onClose(false));
	console.log(backGround);
	return (
		show && (
			<PopupC visible={show}>
				<Content
					ref={dropDownRef}
					height={height}
					width={width}
					position={position}
					maxwidth={width}
					left={left}
					backGround={backGround}
				>
					<CloseButton
						onClick={() => {
							onClose(false);
						}}
					>
						&times;
					</CloseButton>
					{content}
				</Content>
			</PopupC>
		)
	);
};

// PropTypes
Popup.propTypes = {
	show: PropTypes.bool,
	onClose: PropTypes.func,
	content: PropTypes.element,
	height: PropTypes.string,
	width: PropTypes.string,
	position: PropTypes.string,
	left: PropTypes.string,
	backGround: PropTypes.string,
};

// DefaultTypes
Popup.defaultProps = {
	show: false,
	onClose: () => {},
	content: null,
	height: "200px",
	width: "640px",
	position: "top",
};

const moveDown = keyframes`
from{
  top:0;
  opacity:0;
}
to {
  top:${(props) => (props.position === "top" ? "20%" : "35%")};
  opacity:1;
}
`;

const PopupC = styled.div`
	min-height: 100vh;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	overflow-y: auto;
	background-color: ${({ backGround }) =>
		backGround === "grey" ? "rgb(235, 236, 243)" : "rgba(1, 1, 1, 0.6)"};
	z-index: 9999;
	opacity: ${({ visible }) => (visible === true ? "1" : "0")};
	visibility: ${({ visible }) => (visible === true ? "visible" : "hidden")};
	transition: all 0.3s;
`;

const Content = styled.div`
	position: absolute;
	overflow: auto;
	animation: ${moveDown} 0.5s;
	top: ${({ position }) =>
		position === "top" ? "20%" : position === "bottom" ? "45%" : "35%"};
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	left: ${({ left }) => (left ? left : "50%")};
	transform: translate(-50%, -40%);
	background-color: #fff;
	background-color: ${({ backGround }) =>
		backGround === "grey" ? "rgb(235, 236, 243)" : "#fff"};
	transition: all 0.5s;
	border-radius: 4px;

	@media (max-width: ${({ maxwidth }) => maxwidth}) {
		width: 96% !important;
		height: auto !important;
	}
`;

const CloseButton = styled.a`
	float: right;
	font-size: 26px;
	margin-right: 10px;
	cursor: pointer;
	font-family: "sans-serif";
	color: #363636;
	text-decoration: none;
	position: relative;
	z-index: 1000;
	&:link,
	&:visited,
	&:hover {
		text-decoration: none;
		color: #363636;
	}
`;

export default Popup;
