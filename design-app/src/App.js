import React from "react";
import { Route, Switch } from "react-router-dom";
// Custom styling imports
import styled from "styled-components";

// Pages import
import Home from "./pages/Home";
import Project1 from "./pages/Project1";

// Component import
import Drawer from "./components/Drawer";

const PageContainer = styled.div`
	display: flex;
`;
const App = () => {
	return (
		<PageContainer>
			<Drawer />
			<Switch>
				<Route exact from="/" render={(props) => <Home {...props} />} />
				<Route
					exact
					from="/project1"
					render={(props) => <Project1 {...props} />}
				/>
			</Switch>
		</PageContainer>
	);
};

export default App;
