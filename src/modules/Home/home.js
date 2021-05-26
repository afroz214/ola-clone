import React, { useEffect } from "react";
import swal from "sweetalert";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, FormContainer } from "./style";
import { Registration, CarDetails } from "./steps";
export const Home = () => {
	const location = useLocation();

	const backgroundSplash = (url) => {
		switch(url) {
			case "/" : 
			return '/assets/images/landing-page/bg-2.png'
			default: 
			return ''
		}
	}

	return (
		<>
			<Container url={backgroundSplash(location.pathname)}>
				<FormContainer>
					{location.pathname === "/" && <Registration />}
                    {location.pathname === "/car-details" && <CarDetails />}
				</FormContainer>
			</Container>
		</>
	);
};
