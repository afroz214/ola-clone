import React from "react";
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
}) => {
	// on change method

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
						value={value}
						onClick={handleChange ? handleChange : ""}
					/>
					<Label width={width} height={width}>
						{logo && <Img src={logo} />}
						{text}
					</Label>
				</>
			</TileWrap>
		</>
	);

	return <div className="form-group-input">{_renderInput()}</div>;
};

export default Tile;
