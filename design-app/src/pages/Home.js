// React import
import React, { useState } from "react";
//Custom components
import CustomButton from "../commons/CustomButton";
import { Button } from "@material-ui/core";

// Icon imports
import MailIcon from "@material-ui/icons/Mail";
//Custom styling import
import styled from "styled-components";

const CustomDiv = styled.div`
	margin: 100px;
`;

const Home = () => {
	const [background, setBackground] = useState("white");
	const buttonClicked = (e) => {
		setBackground("secondary");
		console.log(background);
	};
	return (
		<div>
			<h1>Home</h1>
			<Button
				variant="contained"
				color="primary"
				onClick={(e) => buttonClicked(e)}
			>
				<MailIcon />
			</Button>
			<CustomDiv>
				<CustomButton
					color={background}
					buttonClicked={(e) => buttonClicked(e)}
					variant="contained"
					text="Default"
				/>
			</CustomDiv>
		</div>
	);
};
export default Home;
