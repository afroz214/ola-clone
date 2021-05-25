import React, { useEffect } from "react";
import swal from "sweetalert";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, FormContainer } from "./style";
import { Registration } from "./steps";
export const Home = () => {
	const location = useLocation();

	return (
		<>
			<Container>
				<FormContainer>
					{location.pathname === "/" && <Registration />}
				</FormContainer>
			</Container>
		</>
	);
};
