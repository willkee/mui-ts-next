import { Container, Typography } from "@mui/material";
import Layout from "../components/layout";

import ExperienceItem from "../components/ExperienceItem";

import { companies } from "../data/companies";

export default function Experience() {
	return (
		<Layout>
			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Typography variant="h2" sx={{ mt: 2, ml: 2 }}>
					Experience
				</Typography>
				<ExperienceItem props={companies.etana} />
				<ExperienceItem props={companies.best_buy} />
				<ExperienceItem props={companies.uber} />
			</Container>
		</Layout>
	);
}
