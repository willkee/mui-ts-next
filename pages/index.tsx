import Image from "next/image";
import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";

import { home } from "../styles/muiStyles";

const Home: NextPage = () => {
	return (
		<Layout>
			<Grid container sx={home.container}>
				<Grid item xs={6} sx={{ position: "relative" }}>
					<Image
						src="/ai_image.jpg"
						layout="fill"
						alt="Will Kee AI Image"
						objectFit="cover"
					/>
				</Grid>
				<Grid item xs={6} sx={home.right}>
					<Typography variant="h2" sx={home.name}>
						Hi! I&apos;m Will.
					</Typography>
					<Typography variant="h5" sx={home.title}>
						Software Developer
					</Typography>
					{/* <Typography variant="h5" sx={home.st}>
						JavaScript
					</Typography>
					<Typography variant="h5" sx={home.st}>
						React.js / Redux.js
					</Typography>
					<Typography variant="h5" sx={home.st}>
						Node.js / Express.js
					</Typography>
					<Typography variant="h5" sx={home.st}>
						HTML / CSS
					</Typography> */}
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Home;
