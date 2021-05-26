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
}) => {
	// on change method
	const [selected, setSelected] = useState(false);
	const _renderInput = () => (
		<>
			<TileWrap>
				<>
					<input
						type="button"
						name={name}
						id={id}
						ref={register}
						value={value}
						onClick={() => setSelected(id)}
					/>
					{selected && (
						<input
							type="hidden"
							name={"brand"}
							id={selected}
							ref={register}
							value={selected}
						/>
					)}
					<Label
						width={width}
						height={height}
						htmlFor={id}
						onClick={() => handleChange(selected)}
					>
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
