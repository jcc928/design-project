// React import
import React, { useState } from "react";
//Custom components
import CustomButton from "../commons/CustomButton";
import { Button, Grid, Paper, Typography } from "@material-ui/core";

// Icon imports
//Custom styling import
import styled from "styled-components";

const HomeContainer = styled(Paper)`
	height: 100vh;
	width: 100%;
`;

const Home = () => {
	return (
		<>
			<HomeContainer>
				<Grid container direction="column">
					<Typography variant="h1">Home</Typography>
					<Button variant="contained" color="primary">
						This is a button
					</Button>
					<Button variant="contained" color="secondary">
						This is another button
					</Button>
				</Grid>
			</HomeContainer>
		</>
	);
};
export default Home;
