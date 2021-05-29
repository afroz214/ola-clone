import React, { useEffect } from "react";
import swal from "sweetalert";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, FormContainer } from "./style";
import { Registration, CarDetails, LeadPage, VehicleType } from "./steps";
export const Home = () => {
	const location = useLocation();

	const backgroundSplash = (url) => {
		switch (url) {
			case "/lead-page":
				return "/assets/images/landing-page/bg-2.png";
			case "/registration":
				return "/assets/images/landing-page/bg-2.png";
			case "/car-details":
				return "/assets/images/splashFT.png";
			default:
				return "";
		}
	};

	const SplashPos = (url) => {
		switch (url) {
			case "/lead-page":
				return "top right";
			case "/registration":
				return "top right";
			case "/car-details":
				return "center bottom";
			default:
				return "";
		}
	};

	return (
		<>
			<Container
				url={backgroundSplash(location.pathname)}
				pos={SplashPos(location.pathname)}
			>
				<FormContainer>
					{location.pathname === "/lead-page" && <LeadPage />}
					{location.pathname === "/registration" && <Registration />}
					{location.pathname === "/vehicle-type" && <VehicleType />}
					{location.pathname === "/car-details" && <CarDetails />}
				</FormContainer>
			</Container>
		</>
	);
};
