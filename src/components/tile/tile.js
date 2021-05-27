import React, { useState } from "react";
import PropTypes from "prop-types";
import { Label, TileWrap, Img } from "./style";
import './input.css'

const Tile = ({
	text,
	logo,
	handleChange,
	id,
	value,
	width,
	height,
	name,
	register,
	imgMargin,
	setValue,
	Selected
}) => {
	// on change method
	console.log(Selected, value)
	const _renderInput = () => (
		<>
			<TileWrap className='m-2'>
				<>
					<input type="hidden" name={name} ref={register} />
					<Label
						width={width}
						height={height}
						onClick={() => setValue ? setValue(name, value) : {}}
						className={Selected && (Number(value) === Number(Selected)) ? "Selected" : ""}
					>
						{logo && (
							<Img src={logo} style={imgMargin && { marginBottom: imgMargin }} />
						)}
						{text}
					</Label>
				</>
			</TileWrap>
		</>
	);

	return <div className="form-group-input">{_renderInput()}</div>;
};

export default Tile;
