import { useState, useEffect } from "react";
import { Stack, Paper, Typography, Box, Grid } from "@mui/material";
import Layout from "../components/layout";
import { styled } from "@mui/material/styles";
import { frontend, backend, other } from "../components/technologies";
import TechTile from "../components/techTile";

export default function Skills() {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		// padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));

	return (
		<Layout>
			<Box sx={{ m: 2 }}>
				<Typography variant="h2">Skills / Experience</Typography>

				<Box sx={{ mt: 2, flexGrow: 1 }}>
					<Typography sx={{ mt: 3, mb: 2 }} variant="h6">
						Frontend
					</Typography>
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						columns={{ xs: 4, sm: 8, md: 12 }}
					>
						{frontend.map((t: any) => (
							<Grid item xs={2} sm={4} md={4} key={t.name}>
								<Item>
									<TechTile
										key={t.name}
										name={t.name}
										icon={t.icon}
										skill={t.skill}
									/>
								</Item>
							</Grid>
						))}
					</Grid>
					<Typography sx={{ mt: 3, mb: 2 }} variant="h6">
						Backend
					</Typography>
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						columns={{ xs: 4, sm: 8, md: 12 }}
					>
						{backend.map((t: any) => (
							<Grid item xs={2} sm={4} md={4} key={t.name}>
								<Item>
									<TechTile
										key={t.name}
										name={t.name}
										icon={t.icon}
										skill={t.skill}
									/>
								</Item>
							</Grid>
						))}
					</Grid>
					<Typography sx={{ mt: 3, mb: 2 }} variant="h6">
						Other
					</Typography>
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						columns={{ xs: 4, sm: 8, md: 12 }}
						sx={{ mb: 2 }}
					>
						{other.map((t: any) => (
							<Grid item xs={2} sm={4} md={4} key={t.name}>
								<Item>
									<TechTile
										key={t.name}
										name={t.name}
										skill={t.skill}
										icon={t.icon}
									/>
								</Item>
							</Grid>
						))}
					</Grid>
				</Box>
			</Box>
		</Layout>
	);
}
