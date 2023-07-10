import { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import PersonalLogo from "./PersonalLogo";

const pages = [
	"About",
	"Skills",
	"Experience",
	"Education",
	"Projects",
	"Contact",
];

function Navigation() {
	const [anchor, setAnchor] = useState<null | HTMLElement>(null);
	const router = useRouter();

	const openMenu = (e: MouseEvent<HTMLElement>) => setAnchor(e.currentTarget);
	const closeMenu = () => setAnchor(null);
	const navigateTo = (page: string) => {
		router.push(`/${page.toLowerCase()}`);
		closeMenu();
	};

	return (
		<AppBar
			position="static"
			sx={{
				height: "80px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ mr: 2, display: "flex", alignItems: "center" }}>
						<PersonalLogo />
					</Box>

					<Box
						sx={{
							flexGrow: 1,
							display: {
								xs: "flex",
								md: "none",
								justifyContent: "flex-end",
							},
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={openMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchor}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchor)}
							onClose={closeMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={() => navigateTo(page)}
								>
									<Typography textAlign="center">
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Box
						sx={{
							flexGrow: 1,
							display: {
								xs: "none",
								md: "flex",
								alignItems: "center",
								justifyContent: "flex-end",
							},
						}}
					>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={() => navigateTo(page)}
								sx={{
									my: 2,
									mr: 2,
									color: "white",
									display: "block",
								}}
							>
								{page}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navigation;
