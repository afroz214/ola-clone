import React from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "components";
import { useHistory } from "react-router";

const JourneySuccess = () => {
	const history = useHistory();
	return (
		<Row className="text-center w-100 mx-auto">
			<div className="mx-auto" style={{ width: "50%" }}>
				<div className="mt-4 d-flex justify-content-center w-100">
					<img
						src="/assets/images/success.png"
						alt="errImg"
						height="70"
						width="70"
						className=""
					/>
				</div>
				<div className="mt-4 d-flex flex-column justify-content-center w-100">
					<h4 className="text-center w-100 text-success font-weight-bold">
						Congratulations!
					</h4>
				</div>
				<div className="mt-4 d-flex flex-column justify-content-center w-100">
					<p className="text-center w-100">
						Your policy will be sent to your registered email address within 3 working
						days.
					</p>
					<p className="text-center w-100 mt-2">
						In case of any further requirements , please contact us at
						driver_insurance@olamoney.com or call us at our tollfree number
						7829-41-1222
					</p>
					<p className="text-center w-100 mt-2">Thank you for contacting us.</p>
					<p> Your genrated policy number is PCVA00000003147/00</p>
				</div>
				<div className="mt-2 d-flex justify-content-center w-100">
					<Button
						buttonStyle="outline-solid"
						hex1="#006400"
						hex2="#228B22"
						borderRadius="25px"
						type="submit"
						shadow={"none"}
						onClick={() => history.replace("/")}
					>
						Go To Homepage
					</Button>
				</div>
			</div>
		</Row>
	);
};

export default JourneySuccess;
