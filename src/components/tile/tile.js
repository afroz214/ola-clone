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
	imgMargin
}) => {
	// on change method
	const [ val, setVal ] = useState(null);

	const _renderInput = () => (
		<>
			<TileWrap>
				<>
					<input
						type="radio"
						name={name}
						id={id}
						ref={register}
						class="keyRadio"
						value={val}
						onClick={() => setVal(value)}
					/>
					<Label width={width} height={height}>
						{logo && <Img src={logo} style={imgMargin && {marginBottom: imgMargin}}/>}
						{text}
					</Label>
				</>
			</TileWrap>
		</>
	);

	return <div className="form-group-input">{_renderInput()}</div>;
};

export default Tile;
