import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
	InputBorder,
	CustomControl,
	SwitchContainer,
	SwitchInput,
	FormLabel,
	SpanLabel,
	Img,
	ToggleValues,
} from "./style";

const Switch = ({ onChange, value, label, dark }) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = (e) => {
		if (onChange) onChange(Number(e.target.checked));
		setIsChecked(!isChecked);
	};
	useEffect(() => {
		if (value) {
			setIsChecked(true);
		} else {
			setIsChecked(false);
		}
	}, [value]);

	return (
		<InputBorder>
			<CustomControl>
				<SwitchContainer>
					<ToggleValues>Yes</ToggleValues>
					<label>
						<SwitchInput
							dark={dark}
							checked={isChecked}
							onChange={handleChange}
							type="checkbox"
						/>
						<div>
							<div></div>
						</div>
					</label>
					<ToggleValues>No</ToggleValues>
				</SwitchContainer>
			</CustomControl>

			{/* top label */}
		</InputBorder>
	);
};

// default props
Switch.defaultProps = {
	value: 0,
	label: "",
};

// props types
Switch.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.number,
};

export default Switch;
