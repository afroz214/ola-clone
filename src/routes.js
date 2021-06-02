import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Error404 from "components/ErrorPages/404";
import PaymentFail from "components/ErrorPages/payment-failure";
import JournerSuccess from "components/ErrorPages/journey-success";
import PaymentSuccess from "components/ErrorPages/payment-success";
import { Loader, Header, Layout, Footer } from "components";
import { Home, ReviewPage, QuotesPage, Proposal, Login } from "modules";

const Router = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Redirect to="/login" />
				</Route>
				<Route exact path="/login" component={Login} />
				<Layout>
					<Header />
					<Switch>
						<Route exact path="/lead-page" component={Home} />
						<Route exact path="/registration" component={Home} />
						<Route exact path="/vehicle-type" component={Home} />
						<Route exact path="/vehicle-details" component={Home} />
						<Route exact path="/quotes" component={QuotesPage} />
						<Route exact path="/review" component={ReviewPage} />
						<Route exact path="/proposal-page" component={Proposal} />
						<Route exact path="/payment-success" component={PaymentSuccess} />
						<Route exact path="/payment-failure" component={PaymentFail} />
						<Route exact path="/successful" component={JournerSuccess} />
						<Route
							exact
							path="/loader"
							component={(props) => <Loader {...props} />}
						/>
						<Route exact path="/404" component={Error404} />
						<Redirect to="/404" />
					</Switch>
					<Footer />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
