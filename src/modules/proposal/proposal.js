import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useLocation, useHistory } from "react-router";
import swal from "sweetalert";
import { Loader, BackButton } from "components";
import _ from "lodash";
import styled,{ createGlobalStyle } from "styled-components";
import InfoCard from './info-card';
import FormSection from './form-section';

export const Proposal = () => {
	const history = useHistory();

	/*---------------- back button---------------------*/
	const back = () => {
		history.push("/review");
	};
	/*----------x----- back button-------x-------------*/
	return (
		<>
			<div className="backBtn" style={{ paddingBottom: "30px" }}>
				<BackButton type="button" onClick={back} style={{ marginTop: "-20px" }}>
					<svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 24 24">
						<path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
						<path d="M0 0h24v24H0z" fill="none" />
					</svg>
					<text style={{ color: "black" }}>Back</text>
				</BackButton>
			</div>
			<RowTag className="row-dimension-design">
				<DivTag1 className="col-12 col-lg-3 col-xs-12 col-sm-12 col-md-4">
					<InfoCard  />
				</DivTag1>
				<DivTag2 className="col-12 col-lg-9 col-sm-12 col-xs-12 col-md-8">
					<H4Tag>Almost Done! Just a few more details.</H4Tag>
					<FormSection
						// submitStatus={submitStatus}
						// getPolicyData={policy}
						// enquiry_id={id}
						// medical_questions={medical_questions}
						// dropout={dropoutStatus}
						// searchQuery={searchQuery}
					/>
				</DivTag2>
				<GlobalStyle />
			</RowTag>
		</>
	);
};

const H4Tag = styled.h4`
  margin-bottom: -20px;
  margin-top: -8px;
  text-align: center;
  @media (max-width: 992px) {
    display: none;
  }
`;

const DivTag1 = styled.div`
  @media (min-width: 890px) {
    width: 28.5%;
    max-width: 28.5%;
    flex: 0 0 28.5%;
  }
  @media screen (min-width: 300px) {
    padding: 0;
  }
`;

const DivTag2 = styled.div`
  @media (min-width: 890px) {
    width: 71.5%;
    max-width: 71.5%;
    flex: 0 0 71.5%;
  }
  @media screen (min-width: 300px) {
    padding: 0;
  }
`;

const RowTag = styled(Row)`
  margin: 15px 60px 20px 30px !important;
  @media (max-width: 600px) {
    margin: 15px 0 20px 0 !important;
    width: 100%;
  }
`;

//proposal-page-font
export const GlobalStyle = createGlobalStyle`
body {
    font-family:basier_squaremedium;
  }
`;
