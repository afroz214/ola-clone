import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, TextInput } from "./style";

const Textbox = ({
	fieldName,
	id,
	required,
	onChange,
	name,
	defaultValue,
	value,
	type,
	error,
	placeholder,
	inputRef,
	onBlur,
	isRequired,
	onKeyDown,
	register,
	...otherProps
}) => {
	const _renderInput = () => (
		<>
			<FormGroup>
				<TextInput
					defaultValue={defaultValue}
					type="text"
					id={id}
					name={name}
					dobSpace
					placeholder=" "
					onKeyDown={onKeyDown}
					onChange={onChange}
					error={error}
					ref={register}
				/>
				<Label md htmlFor={id}>
					{fieldName}
				</Label>
			</FormGroup>
		</>
	);

	return <div className="form-group-input">{_renderInput()}</div>;
};

// ask for onChange default function !!
Textbox.defaultProps = {
	label: "label",
	value: "",
	placeholder: "placeholder",
	required: false,
	name: "",
	type: "text",
	// onChange: () => { },
};

Textbox.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	name: PropTypes.string,
	onChange: PropTypes.func,
};

export default Textbox;
