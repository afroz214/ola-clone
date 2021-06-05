import React from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "components";
import { useHistory } from "react-router";

const JourneyFailure = () => {
	const history = useHistory();
	return (
		<Row className="text-center w-100 mx-auto">
			<div className="mx-auto" style={{ width: "50%" }}>
				<div className="mt-4 d-flex justify-content-center w-100">
					<img
						src="/assets/images/remove.png"
						alt="errImg"
						height="100"
						width="100"
						className=""
					/>
				</div>
				<div className="mt-4 d-flex flex-column justify-content-center w-100">
					<h4 className="text-center w-100 text-danger font-weight-bold">Oops!</h4>
					<h4 className="text-center w-100 text-danger font-weight-bold">
						Your transacation was unsuccessful!
					</h4>
				</div>
				<div className="mt-4 d-flex flex-column justify-content-center w-100">
					<p className="text-center w-100">
						Something went wrong. Process could not be completed, please ensure the
						information you provided is Correct.
					</p>
					<p className="text-center w-100">
						In case of any Clarification or challenges, please contact us at
						driver_insurance@olamoney.com or call us at our tollfree number
						7829-41-1222
					</p>
				</div>
				<div className="mt-2 d-flex justify-content-center w-100">
					<Button
						buttonStyle="outline-solid"
						hex1="#006400"
						hex2="#228B22"
						borderRadius="25px"
						type="submit"
						shadow={"none"}
						onClick={() => history.replace("/lead-page")}
					>
						Go To Homepage
					</Button>
				</div>
			</div>
		</Row>
	);
};

export default JourneyFailure;
