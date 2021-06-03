import React, { useEffect } from "react";
import swal from "sweetalert";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Container, FormContainer, Avatar } from "./style";
import { clear } from "./home.slice";
import {
	Registration,
	CarDetails,
	LeadPage,
	VehicleType,
	JourneyType,
} from "./steps";

export const Home = () => {
	const dispatch = useDispatch();
	const { error } = useSelector((state) => state.home);
	const location = useLocation();
	const backgroundSplash = (url) => {
		switch (url) {
			case "/lead-page":
				return "/assets/images/landing-page/bg-2.png";
			case "/journey-type":
				return "/assets/images/landing-page/bg-2.png";
			case "/vehicle-type":
				return "/assets/images/landing-page/bg-2.png";
			case "/registration":
				return "/assets/images/landing-page/bg-2.png";
			case "/vehicle-details":
				return "/assets/images/splashFT.png";
			default:
				return "";
		}
	};

	const SplashPos = (url) => {
		switch (url) {
			case "/lead-page":
				return "top right";
			case "/journey-type":
				return "top right";
			case "/registration":
				return "top right";
			case "/vehicle-type":
				return "center bottom";
			case "/vehicle-details":
				return "center bottom";
			default:
				return "";
		}
	};

	//onError
	useEffect(() => {
		if (error) {
			swal(error, "", "error");
		}
		return () => {
			dispatch(clear());
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error]);

	return (
		<>
			<Container
				url={backgroundSplash(location.pathname)}
				pos={SplashPos(location.pathname)}
				heightPer={
					["/vehicle-details"].includes(location.pathname) ? "62%" : "100%"
				}
			>
				<FormContainer>
					<Row>
						<Col className="landing-laxmi mx-auto" xl={3} lg={3} md={3}>
							<div className="review-details3 text-center">
								<Avatar src="/assets/images/auto-car.jpg" alt="avatarImage" />
							</div>
						</Col>
					</Row>
					{location.pathname === "/lead-page" && <LeadPage />}
					{location.pathname === "/journey-type" && <JourneyType />}
					{location.pathname === "/registration" && <Registration />}
					{location.pathname === "/vehicle-type" && <VehicleType />}
					{location.pathname === "/vehicle-details" && <CarDetails />}
				</FormContainer>
			</Container>
		</>
	);
};
