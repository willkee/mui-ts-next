import { Button, Typography, Grid, Box, CardMedia } from "@mui/material";
import Image from "next/image";
import Layout from "../components/layout";

import { contact } from "../data/contact";
import { ct } from "../styles/muiStyles";

export default function Contact() {
	return (
		<Layout>
			<Grid container sx={ct.container}>
				<Grid
					item
					xs={12}
					sm={12}
					md={6}
					sx={{
						position: "relative",
						height: 1,
					}}
				>
					<Image
						src="/self/actual_selfie.png"
						layout="fill"
						alt="Will Kee Image"
						objectFit="cover"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} sx={ct.right}>
					<Typography variant="h2" sx={ct.name}>
						Contact Me
					</Typography>
					<Box sx={ct.btnContainer}>
						{contact.map(({ name, href, icon }: any) => (
							<Button
								href={href}
								key={name}
								target="_blank"
								sx={ct.links}
							>
								{icon}
								<Box sx={ct.text}>{name}</Box>
							</Button>
						))}
					</Box>
				</Grid>
			</Grid>
		</Layout>
	);
}
