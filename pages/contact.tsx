import { Button, Typography, Grid, Box, CardMedia } from "@mui/material";
import Image from "next/image";
import Layout from "../components/layout";

import { contact } from "../data/contact";
import { ct } from "../styles/muiStyles";
import EmailIcon from "../components/EmailIcon";
export default function Contact() {
	function WellFoundLogo() {
		return (
			<Image
				src="/wellfound.png"
				layout="fill"
				alt="Wellfound Logo"
				objectFit="cover"
			/>
		);
	}

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
						height: "100%",
						minHeight: "100vh",
					}}
				>
					<Image
						src="/self/ai_image.jpg"
						layout="fill"
						alt="Will Kee AI Image"
						objectFit="cover"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={6} sx={ct.right}>
					<Typography variant="h2" sx={ct.name}>
						Contact Me
					</Typography>
					<Box sx={ct.btnContainer}>
						{contact.map(({ name, href, icon, ref }: any) => (
							<Button
								href={href}
								key={name}
								target="_blank"
								sx={ct.links}
							>
								{icon ? (
									<i className={icon} />
								) : ref === "WF" ? (
									<WellFoundLogo />
								) : (
									<EmailIcon />
								)}
								<Box sx={ct.text}>{name}</Box>
							</Button>
						))}
					</Box>
				</Grid>
			</Grid>
		</Layout>
	);
}
