import { Stack, Paper, Typography, Box } from "@mui/material";
import Layout from "../components/layout";
import { styled } from "@mui/material/styles";

import TechTile from "../components/techTile";

export default function Skills() {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		textAlign: "center",
		color: theme.palette.text.secondary,
		display: "flex",
		height: "100px",
		width: "100px",
		position: "relative",
		overflow: "hidden",
		justifyContent: "space-between",
		margin: 0,
		padding: 0,
	}));

	return (
		<Layout>
			<Typography variant="h2">Skills / Experience</Typography>

			<Box sx={{ m: 2 }}></Box>
			<TechTile />
		</Layout>
	);
}
