import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
	InputBorder,
	CustomControl,
	SwitchContainer,
	SwitchInput,
	FormLabel,
	SpanLabel,
	Img
} from "./style";

export const Switch = ({ onChange, value, label, dark }) => {
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
				</SwitchContainer>
			</CustomControl>

			{/* top label */}
			<FormLabel htmlFor="name">
				<SpanLabel>{label}
					<sup> <Img alt="important" src='/assets/images/inputs/important.png' /> </sup>
				</SpanLabel>
			</FormLabel>
		</InputBorder>
	);
};

// default props
Switch.defaultProps = {
	value: 0,
	label: "Status",
};

// props types
Switch.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.number,
};
