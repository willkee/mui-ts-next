import { Container, Typography, Paper, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";

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
				<Carousel>
					{/* {projects.map((item, i) => (
						<Paper key={i}>
							<h2>{props.item.name}</h2>
							<p>{props.item.description}</p>

							<Button className="CheckButton">
								Check it out!
							</Button>
						</Paper>
					))} */}
				</Carousel>
			</Container>
		</Layout>
	);
}
