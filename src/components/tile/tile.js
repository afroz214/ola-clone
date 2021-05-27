import React, { useState } from "react";
import PropTypes from "prop-types";
import { Label, TileWrap, Img } from "./style";

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
}) => {
	// on change method

	const _renderInput = () => (
		<>
			<TileWrap className='m-2'>
				<>
					<input type="hidden" name={name} ref={register} />
					<Label
						width={width}
						height={height}
						onClick={() => setValue(name, value)}
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
