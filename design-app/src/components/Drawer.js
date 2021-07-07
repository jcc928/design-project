import React from "react";
import { withRouter } from "react-router-dom";

// MUI imports
import {
	Drawer as MUIDrawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from "@material-ui/core";

// Material UI Icon imports
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import FavoriteIcon from "@material-ui/icons/Favorite";

// Custom styling imports
import styled from "styled-components";

const StyledDrawer = styled(MUIDrawer)`
	width: 200px;
`;
const Drawer = (props) => {
	const { history } = props;
	const itemsList = [
		{
			text: "Home",
			icon: <InboxIcon />,
			onClick: () => history.push("/")
		},
		{
			text: "Project 1",
			icon: <FavoriteIcon />,
			onClick: () => history.push("/project1")
		},
		{
			text: "Project 2",
			icon: <MailIcon />,
			onClick: () => history.push("/project2")
		}
	];
	return (
		<StyledDrawer variant="permanent">
			<List>
				{itemsList.map((item, index) => {
					const { text, icon, onClick } = item;
					return (
						<ListItem button key={text} onClick={onClick}>
							{/* Only display if icon is not undefined */}
							{icon && <ListItemIcon>{icon}</ListItemIcon>}

							<ListItemText primary={text} />
						</ListItem>
					);
				})}
			</List>
		</StyledDrawer>
	);
};

export default withRouter(Drawer);
