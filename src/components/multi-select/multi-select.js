import React, { useMemo } from "react";
import Select from "react-select";
import { useMediaPredicate } from "react-media-hook";

export default function AnimatedMulti({
	options,
	value,
	onChange,
	name,
	onBlur,
	ref,
	placeholder,
	closeOnSelect,
	isClearable,
	isMulti,
	errors,
	Styled,
	required,
	knowMore,
	quotes,
}) {
	const lessthan480 = useMediaPredicate("(max-width: 480px)");

	// styling
	const MemoizedStyle = useMemo(
		() => ({
			control: (styles, { isFocused, isSelected }) => ({
				...styles,
				backgroundColor: "white",
				borderColor: !(
					(!Array.isArray(value) || value?.length) &&
					(!errors || value?.length)
				)
					? "#d43d3d"
					: isFocused || isSelected
					? knowMore
						? "#000"
						: "#006600"
					: "hsl(0,0%,80%)",
				borderWidth:
					isFocused || isSelected
						? "2px"
						: !(
								(!Array.isArray(value) || value?.length) &&
								(!errors || value?.length)
						  )
						? "2px"
						: "1px",
				minHeight: knowMore ? (quotes ? "45px !important" : "48px") : "60px",
				maxHeight: knowMore ? (quotes ? "45px !important" : "48px") : "",
				boxShadow: "0",
				borderRadius: knowMore ? (quotes ? "8px" : "50px") : "2.5px",
				fontSize: knowMore ? "14px" : "18px",
				cursor: "text",
				"&:hover": {
					border: `2px solid  ${knowMore ? "#000" : "#006600"}`,
				},
			}),
			menu: (provided) => ({
				...provided,
				zIndex: 9999,
				border: `2px solid  ${knowMore ? "#000" : "#006600"}`,
				boxShadow: "0",
				marginTop: "-1px",
				borderRadius: "0",
			}),
			multiValue: (styles) => ({
				...styles,
				padding: "5px",
				fontSize: lessthan480 ? "19px" : knowMore ? "14px" : "21px",
				lineHeight: "25px",
				fontWeight: "500",
				color: "#666666",
				backgroundColor: "#ebeced",
			}),
			multiValueLabel: (styles) => ({
				...styles,
				color: "#666666",
				cursor: "pointer",
			}),
			multiValueRemove: (style) => ({
				...style,
				svg: {
					zoom: "1.7",
					"-moz-transform": "scale(1.7)",
					color: "#a5a5a5",
				},
				"&:hover": {
					backgroundColor: "transparent",
					cursor: "pointer",
					color: "#3c3f3f",
				},
			}),
			option: (provided, state) => ({
				...provided,
				// borderBottom: '1px dotted pink',
				backgroundColor: state.isFocused ? "rgba(0,0,0,.05)" : "#FFFFFF",
				padding: "10px 20px",
				fontSize: lessthan480 ? "18px" : knowMore ? "14px" : "20px",
				lineHeight: "25px",
				cursor: "pointer",
				color: "#666666",
				paddingLeft: "22px",
				marginTop: "-4px",
			}),
			placeholder: (provided, { isSelected, isFocused }) => ({
				...provided,
				color: isSelected || isFocused ? "#dbdbdb" : "#666666",
				...(lessthan480 && { fontSize: "16px" }),
			}),
			indicatorsContainer: (provided, state) => ({
				...provided,
				display: state.selectProps?.menuIsOpen ? "none" : "flex",
				svg: {
					zoom: "1.5",
					"-moz-transform": "scale(1.5)",
					color: "#a5a5a5",
				},
			}),
			valueContainer: (provided) => ({
				...provided,
				padding: "2px 10px 2px 17px",
				position: quotes ? "relative" : "",
				left: quotes ? "90px" : "",
				fontfamily: quotes ? "Inter-SemiBold" : "",
				fontsize: quotes ? "14px" : "",
			}),
		}),
		[value, errors, lessthan480]
	);

	return (
		<Select
			required={required}
			closeMenuOnSelect={closeOnSelect ? true : false}
			isMulti={isMulti}
			options={options || []}
			value={value}
			onChange={(e) => onChange(e)}
			name={name}
			onBlur={onBlur}
			avoidHighlightFirstOption
			onSelect={onChange}
			ref={ref}
			defaultValue={value}
			hideSelectedOptions={false}
			placeholder={placeholder || "Select..."}
			isClearable={isClearable}
			styles={Styled && MemoizedStyle}
		/>
	);
}
