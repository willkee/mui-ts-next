import { useState, useEffect } from "react";
import { Paper, Typography, Box, Grid, Container } from "@mui/material";
import Layout from "../components/layout";
import { styled } from "@mui/material/styles";
import { frontend, backend, other } from "./data/skills";
import SkillItem from "../components/SkillItem";

export default function Skills() {
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));

	return (
		<Layout>
			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Typography variant="h2">Skills</Typography>

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
									<SkillItem
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
									<SkillItem
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
									<SkillItem
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
			</Container>
		</Layout>
	);
}
