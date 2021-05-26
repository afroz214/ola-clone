import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Error404 from "components/ErrorPages/404";
import { Loader, Header, Layout, Footer } from "components";
import { Home, ReviewPage } from "modules";

const Router = (props) => {
	return (
		<BrowserRouter>
			<Header />
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/car-details" component={Home} />
					<Route exact path="/review" component={ReviewPage} />
					<Route
						exact
						path="/loader"
						component={(props) => <Loader {...props} />}
					/>
					<Route exact path="/404" component={Error404} />
					<Redirect to="/404" />
				</Switch>
			</Layout>
			<Footer />
		</BrowserRouter>
	);
};

export default Router;
