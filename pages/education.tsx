import { Container, Typography } from "@mui/material";
import Layout from "../components/layout";
import EducationItem from "../components/EducationItem";
import { schools } from "../data/schools";

export default function Education() {
	return (
		<Layout>
			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Typography variant="h2" sx={{ mt: 2, ml: 2 }}>
					Education
				</Typography>
				<EducationItem props={schools.app_academy} />
				<EducationItem props={schools.western_michigan} />
			</Container>
		</Layout>
	);
}
