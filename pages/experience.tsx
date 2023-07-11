import { Container, Typography } from "@mui/material";
import Layout from "../components/layout";

import ExperienceItem from "../components/ExperienceItem";

export default function Experience() {
	const etana = {
		company: "Etana Custody",
		title: "Software Developer (Frontend)",
		dates: "12/2022 - 05/2023",
		city: "Denver, CO",
		shortDesc: [
			"Etana Custody specializes in the safekeeping of fiat or digital (crypto) assets on behalf of an individual or institution.",
		],
		longDesc: [
			"Developed the frontend Etana Digital service as an internal tool for managing wallets and transactions requested by the client.",
			"Developed a frontend internal service from the ground up using React.js, Redux, JavaScript, CSS, and Material UI with little assistance as part of the Digital team.",
			"Resolved bugs and taught myself new skills primarily with the use of official documentation and StackOverflow articles.",
		],
	};
	const best_buy = {
		company: "Best Buy Geek Squad",
		title: "Home Theater Agent",
		dates: "11/2020 - 11/2021",
		city: "Denver, CO",
		shortDesc: [],
		longDesc: [
			"Communicated with fellow agents through Teams to assist in the safe movement of heavy electronic equipment within customers homes for a 50% more efficient workflow and to reduce overall customer wait times.",
			"Collaborated with a large team of agents to coordinate logistical issues and safely transport sensitive electronic equipment.",
			"Communicated effectively with customers to provide positive service experience while navigating to ambiguous locations with no map data.",
		],
	};
	const uber = {
		company: "Uber",
		title: "Driver",
		dates: "11/2018 - 01/2020",
		city: "Denver, CO",
		shortDesc: [],
		longDesc: [
			"Stayed calm and professional under pressure with aggressive or inebriated passengers, bad traffic, or in emergency situations",
			"Multi-tasked in a high pressure environment, with navigating in heavy traffic while ensuring customer satisfaction",
		],
	};
	return (
		<Layout>
			<Container maxWidth="xl" sx={{ mt: 4 }}>
				<Typography variant="h2" sx={{ mt: 2, ml: 2 }}>
					Experience
				</Typography>
				<ExperienceItem props={etana} />
				<ExperienceItem props={best_buy} />
				<ExperienceItem props={uber} />
			</Container>
		</Layout>
	);
}
