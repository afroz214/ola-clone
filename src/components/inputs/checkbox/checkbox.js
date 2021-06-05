import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css";
import CustomTooltip from "../../tooltip/CustomTooltip";
import tooltip from "../../../assets/img/tooltip.svg";
const Checkbox = ({
	required,
	onChange,
	noWrapper,
	placeholder,
	placeholderSize,
	register,
	name,
	id,
	fieldName,
	index,
	tooltipData,
	...otherProps
}) => {
	//add on change
	const onChangeHandler = (ev) => {
		if (onChange) onChange(ev);
	};
	return (
		<>
			<div className="filterMenuBoxCheck">
				<input
					type="checkbox"
					className="form-check-input"
					id={id}
					value={id}
					ref={register}
					name={`${name}[${index}]`}
				/>
				<label className="form-check-label" htmlFor={id}>
					{fieldName}{" "}
					<span style={{ marginLeft: "3px" }}>
						<CustomTooltip
							rider="true"
							id={`${name}[${index}]tooltip`}
							place={"bottom"}
							customClassName="mt-3 riderPageTooltip "
						>
							<img
								data-tip={`<h3 >${fieldName}</h3> <div>${tooltipData}</div>`}
								data-html={true}
								data-for={`${name}[${index}]tooltip`}
								src={tooltip}
								alt="tooltip"
								className="toolTipRiderChild"
							/>
						</CustomTooltip>
					</span>
				</label>
			</div>
		</>
	);
};

Checkbox.defaultProps = {
	label: "",
	required: false,
	name: "",
	checked: false,
};

Checkbox.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	name: PropTypes.string,
	type: PropTypes.string,
	onChange: PropTypes.func,
};

export default Checkbox;
