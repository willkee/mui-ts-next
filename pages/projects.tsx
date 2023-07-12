import { Container, Typography } from "@mui/material";
import Layout from "../components/layout";

import ProjectItem from "../components/ProjectItem";
import { projects } from "./data/projects";

export default function Projects() {
	return (
		<Layout>
			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Typography variant="h2" sx={{ mt: 2, ml: 2 }}>
					Projects
				</Typography>
				<ProjectItem props={projects.campBnb} />
			</Container>
		</Layout>
	);
}
