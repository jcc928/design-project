import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

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

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
