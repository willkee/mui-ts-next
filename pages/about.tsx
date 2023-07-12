import { Button, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Layout from "../components/layout";
import { about } from "../styles/muiStyles";
import { desc } from "./data/about";

export default function About() {
	const onDownload = () => {
		const link = document.createElement("a");
		link.download = `will_kee_resume_${new Date().getTime()}.pdf`;
		link.href = "/will_kee_resume.pdf";
		link.click();
	};

	return (
		<Layout>
			<Grid container sx={about.container}>
				<Grid item xs={6} sx={{ position: "relative" }}>
					<Image
						src="/self/ai_image.jpg"
						layout="fill"
						alt="Will Kee AI Image"
						objectFit="cover"
					/>
				</Grid>
				<Grid item xs={6} sx={about.right}>
					<Typography variant="h2" sx={about.name}>
						{desc.name}
					</Typography>
					{desc.text.map((p, i) => (
						<Typography key={i} variant="h5" sx={about.title}>
							{p}
						</Typography>
					))}
					<Button
						onClick={onDownload}
						variant="outlined"
						sx={about.button}
					>
						Download Resume
					</Button>
				</Grid>
			</Grid>
		</Layout>
	);
}
