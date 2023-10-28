import { Typography, Box, Grid, Container } from "@mui/material";
import Layout from "../components/layout";
import { Item } from "../components/Item";
import SkillItem from "../components/SkillItem";

import { frontend, backend, other } from "../data/skills";

export default function Skills() {
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
						spacing={{ xs: 1, md: 3 }}
						columns={{ xs: 1, sm: 8, md: 12 }}
					>
						{frontend.map((t: any) => (
							<Grid item xs={2} sm={4} md={4} key={t.name}>
								<Item>
									<SkillItem
										key={t.name}
										name={t.name}
										icon={t.icon}
										// skill={t.skill}
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
						spacing={{ xs: 1, md: 3 }}
						columns={{ xs: 1, sm: 8, md: 12 }}
					>
						{backend.map((t: any) => (
							<Grid item xs={2} sm={4} md={4} key={t.name}>
								<Item>
									<SkillItem
										key={t.name}
										name={t.name}
										icon={t.icon}
										// skill={t.skill}
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
						spacing={{ xs: 1, md: 3 }}
						columns={{ xs: 1, sm: 8, md: 12 }}
						sx={{ mb: 2 }}
					>
						{other.map((t: any) => (
							<Grid item xs={2} sm={4} md={4} key={t.name}>
								<Item>
									<SkillItem
										key={t.name}
										name={t.name}
										// skill={t.skill}
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
