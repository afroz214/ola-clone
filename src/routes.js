import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Error404 from "components/ErrorPages/404";
import { Loader, Header, Layout, Footer } from "components";
import { Dummy } from "modules";

const Router = (props) => {
	return (
		<BrowserRouter>
			<Header />
			<Layout>
				<Switch>
					{/*replace dummy with landing/home page*/}
					<Route exact path="/" component={Dummy} />
					<Route exact path="/loader" component={(props) => <Loader {...props} />} />
					<Route exact path="/404" component={Error404} />
					<Redirect to="/404" />
				</Switch>
			</Layout>
			<Footer />
		</BrowserRouter>
	);
};

export default Router;
