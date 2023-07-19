import { Button, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Layout from "../components/layout";
import { about } from "../styles/muiStyles";
import { desc } from "../data/about";
import { onDownload } from "../components/ResumeDownload";

export default function About() {
	return (
		<Layout>
			<Grid container sx={about.container}>
				<Grid item xs={12} sm={12} md={6} sx={{ position: "relative" }}>
					<Image
						src="/self/ai_image.jpg"
						layout="fill"
						alt="Will Kee AI Image"
						objectFit="cover"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} sx={about.right}>
					<Typography variant="h3" sx={about.name}>
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
