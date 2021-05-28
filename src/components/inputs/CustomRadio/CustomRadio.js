import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CustomRadio.css";

const CustomRadio = ({
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
	items,
	...otherProps
}) => {
	//add on change
	const onChangeHandler = () => {
		console.log(fieldName);
	};
	const [checked, setChecked] = useState(false);
	return (
		<>
			<input
				className="checkbox-tools"
				type="radio"
				value={id}
				ref={register}
				checked={checked}
				name={`${name}[${index}]`}
				onClick={() => setChecked(!checked)}
			/>
			<label
				className="for-checkbox-tools"
				htmlFor={id}
				onClick={() => setChecked(!checked)}
			>
				{fieldName}
			</label>
		</>
	);
};

CustomRadio.defaultProps = {
	label: "",
	required: false,
	name: "",
	checked: false,
};

CustomRadio.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	name: PropTypes.string,
	type: PropTypes.string,
	onChange: PropTypes.func,
};

export default CustomRadio;
