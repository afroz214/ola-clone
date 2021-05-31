import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css";

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
					{fieldName}
				</label>
				<span
					class="cardTooltipSvg"
					data-toggle="popover"
					title=""
					data-content="In a Zero Depreciation or Nil Depreciation or Bumper to Bumper​ addon, the entire claim amount is paid by the Car Insurance Company without considering the depreciation on the value of the car. You will receive the entire cost of the car parts from the insurer excluding consumables such as Lubricants, Retainers, Brackets, Gaskets, Accessories and Wear &amp; Tear parts"
					data-original-title="Zero Depreciation"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="13"
						height="13"
						viewBox="0 0 13 13"
					>
						<g transform="translate(-.5 -.5)">
							<g transform="translate(1 1)">
								<circle cx="6" cy="6" r="6" fill="none" stroke="#333"></circle>
								<path
									fill="#333"
									d="M7.359 8.409h1.025v-.06c0-1.359 1.615-.983 1.615-2.6A1.79 1.79 0 0 0 8.025 4 2 2 0 0 0 6 5.265l1.06.453a.951.951 0 0 1 .914-.684.749.749 0 0 1 .826.726c0 .966-1.444.649-1.444 2.589zm.513 2.354a.752.752 0 1 0-.752-.752.72.72 0 0 0 .751.752z"
									data-name="?-copy"
									transform="translate(-2.056 -1.37)"
								></path>
							</g>
						</g>
					</svg>
				</span>
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
