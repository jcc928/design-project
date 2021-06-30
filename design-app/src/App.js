import React from "react";
import Home from "./pages/Home.js";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#6C4193",
			background: "#FFFFFF",
			content: "#222222"
		},
		secondary: {
			main: "#000",
			content: "#5C5C5C",
			disabled_fields: "#ABABAB",
			background: "#FAFAFA"
		},
		others: {
			error: "#FB4E4E",
			pending: "#FDBC3F",
			success: "#2AC769",
			hover: "#58327A",
			focused: "#4F0C8C",
			disabled: "#E0E0E0"
		}
	}
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Home />
			</div>
		</ThemeProvider>
	);
};
export default App;
