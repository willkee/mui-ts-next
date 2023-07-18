import Image from "next/image";
import type { NextPage } from "next";
import Layout from "../components/layout";
import { Button, Typography, Grid } from "@mui/material";
import { home } from "../styles/muiStyles";
import { onDownload } from "../components/ResumeDownload";

const Home: NextPage = () => {
	return (
		<Layout>
			<Grid container sx={home.container}>
				<Grid item xs={6} sx={{ position: "relative" }}>
					<Image
						src="/self/ai_image.jpg"
						layout="fill"
						alt="Will Kee AI Image"
						objectFit="cover"
					/>
				</Grid>
				<Grid item xs={6} sx={home.right}>
					<Typography variant="h2" sx={home.name}>
						Will Kee
					</Typography>
					<Typography variant="h5" sx={home.title}>
						Software Developer
					</Typography>
					<Button
						onClick={onDownload}
						variant="contained"
						sx={home.button}
					>
						Download Resume
					</Button>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Home;
