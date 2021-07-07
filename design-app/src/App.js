import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
// Custom styling imports
import styled from "styled-components";

// MUI imports
import { createMuiTheme, ThemeProvider, Paper } from "@material-ui/core";

// Pages import
import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";

// Component import
import Drawer from "./components/Drawer";

const PageContainer = styled(Paper)`
	display: flex;
	height: 100vh;
`;

const App = () => {
	const [darkMode, setDarkMode] = useState(true);
	const lightTheme = createMuiTheme({
		palette: {
			primary: {
				main: "#6C4193",
				background: "#FFFFFF",
				content: "#222222"
			}
		}
	});
	const darkTheme = createMuiTheme({
		palette: {
			type: "dark"
		}
	});
	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<PageContainer>
				<Drawer
					darkMode={darkMode}
					darkModeToggle={() => setDarkMode(!darkMode)}
				/>
				<Switch>
					<Route exact from="/" render={(props) => <Home {...props} />} />
					<Route
						exact
						from="/project1"
						render={(props) => <Project1 {...props} />}
					/>
					<Route
						exact
						from="/project2"
						render={(props) => <Project2 {...props} />}
					/>
				</Switch>
			</PageContainer>
		</ThemeProvider>
	);
};

export default App;
