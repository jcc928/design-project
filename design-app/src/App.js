import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Project1 from "./pages/Project1";
const App = () => {
	return (
		<Switch>
			<Route exact from="/" render={(props) => <Home {...props} />} />
			<Route
				exact
				from="/project1"
				render={(props) => <Project1 {...props} />}
			/>
		</Switch>
	);
};

export default App;
