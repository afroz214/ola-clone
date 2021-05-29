import React from "react";
import { Accordion, Card } from "react-bootstrap";
import styled from "styled-components";
import ContextAwareToggle from "./toggle";
import AccordionHeader from "./accordion-header";
import AccordionContent from "./accordion-content";

const StyledAccordion = styled(Accordion)`
	margin: 10px 0;
`;

const StyledCard = styled(Card)`
	border: 1px solid #cae9ff;
`;

const Header = styled(Card.Header)`
	border: none;
	background-color: #f7f7f9 !important;
`;

const HeaderWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const CustomAccordion = (props) => {
	const { id, children, defaultOpen } = props;

	const _render = () => {
		const headerChild = React.Children.map(children, (child) => {
			if (child.type === AccordionHeader) {
				return child;
			}
		});

		const contentChild = React.Children.map(children, (child) => {
			if (child.type === AccordionContent) {
				return child;
			}
		});

		const _renderCard = () => {
			return (
				<StyledCard>
					<Header>
						<HeaderWrapper>
							{headerChild || ""}
							<ContextAwareToggle eventKey={id} />
						</HeaderWrapper>
					</Header>
					<Accordion.Collapse eventKey={id}>
						<Card.Body style={{ padding: "0" }}>{contentChild || ""}</Card.Body>
					</Accordion.Collapse>
				</StyledCard>
			);
		};

		return defaultOpen ? (
			<StyledAccordion defaultActiveKey={id}>{_renderCard()}</StyledAccordion>
		) : (
			<StyledAccordion>{_renderCard()}</StyledAccordion>
		);
	};

	return _render();
};

export default CustomAccordion;
