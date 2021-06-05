import React from "react";
import ReactTooltip from "react-tooltip";
import "./CustomTooltip.scss";

function CustomTooltip({ ...props }) {
	const { id, place, arrowPosition, customClassName, Position, rider } = props;
	let offset = undefined;
	let mobilePlace = undefined;
	if (window.matchMedia("(max-width: 767px)").matches) {
		// offset = { top: 90, right: 41 };
		mobilePlace = "top";
	}

	const getPositionClass = () => {
		if (place === "right") {
			return "tooltipRight";
		} else if (place === "left") {
			return "tooltipLeft";
		} else if (place === "top") {
			return "tooltipTop";
		}
	};

	const getArrowClass = () => {
		if (arrowPosition === "bottom") {
			offset = { top: 60, right: 3 };
			return "from1__arrowBottom";
		}
		if (arrowPosition === "top") {
			offset = { top: -60, right: 3 };
			return "from1__arrowTop";
		}
	};

	return (
		<>
			{props.children}

			<ReactTooltip
				id={id ? id : undefined}
				className={`customTooltip ${customClassName} ${getArrowClass()} ${getPositionClass()}`}
				offset={
					mobilePlace === "top" && rider !== "true"
						? undefined
						: Position
						? Position
						: offset
				}
				type="dark"
				effect="solid"
				place={mobilePlace === "top" && rider !== "true" ? undefined : place}
				backgroundColor="#1c1c1c"
			/>
		</>
	);
}

export default CustomTooltip;

// let tooltipOffset;
// let tooltipPlace;
// if (window.matchMedia("(max-width: 767px)").matches) {
//    tooltipOffset = { top: 90,right: 41 };
//    tooltipPlace ="top";
// } else {
//   tooltipPlace ="right";
//   tooltipOffset = { top: 60, right: 3 };
// }
