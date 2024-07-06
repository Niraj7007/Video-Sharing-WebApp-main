import React from "react";
import styled from "styled-components";
import { styled as st } from "@mui/system";
import LamaTube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { Link } from "react-router-dom";
// const MyComponent = styled('div')({
//   color: 'darkslategray',
//   backgroundColor: 'aliceblue',
//   padding: 8,
//   borderRadius: 4,
// });
const Container = st("div")({
	flex: "1",
	backgroundColor: "#181818",
	height: "100vh",
	color: "white",
	fontSize: "14px",
	position: "sticky",
	top: "0",
});
// const Container = styled.div`
// 	flex: 1;
// 	background-color: ${({ theme }) => theme.bgLighter};
// 	height: 100vh;
// 	color: ${({ theme }) => theme.text};
// 	font-size: 14px;
// 	position: sticky;
// 	top: 0;
// `;
const Wrapper = styled.div`
	padding: 18px 26px;
`;
const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	font-weight: bold;
	margin-bottom: 25px;
`;

const Img = styled.img`
	height: 25px;
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	cursor: pointer;
	padding: 7.5px 0px;

	&:hover {
		background-color: ${({ theme }) => theme.soft};
	}
`;

const Hr = styled.hr`
	margin: 15px 0px;
	border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
	padding: 5px 15px;
	background-color: transparent;
	border: 1px solid #3ea6ff;
	color: #3ea6ff;
	border-radius: 3px;
	font-weight: 500;
	margin-top: 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 5px;
`;

const Menu = () => {
	return (
		<Container>
			<Wrapper>
				<Link
					to='/'
					style={{ textDecoration: "none", color: "inherit" }}>
					<Logo>
						<Img src={LamaTube} />
						Video Sharing
					</Logo>
				</Link>
				<Item>
					<HomeIcon />
					Home
				</Item>
				<Item>
					<ExploreOutlinedIcon />
					Explore
				</Item>
				<Item>
					<SubscriptionsOutlinedIcon />
					Subscriptions
				</Item>
				<Hr />
				<Item>
					<VideoLibraryOutlinedIcon />
					Library
				</Item>
				<Item>
					<HistoryOutlinedIcon />
					History
				</Item>
				<Hr />
				<Login>
					Sign in to like videos, comment, and subscribe.
					<Link
						to='signin'
						style={{ textDecoration: "none" }}>
						<Button>
							<AccountCircleOutlinedIcon />
							SIGN IN
						</Button>
					</Link>
				</Login>
			</Wrapper>
		</Container>
	);
};

export default Menu;
