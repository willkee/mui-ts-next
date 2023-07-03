import { Button, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { about } from "../styles/muiStyles";

import Layout from "../components/layout";
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
						src="/ai_image.jpg"
						layout="fill"
						alt="Will Kee AI Image"
						objectFit="cover"
					/>
				</Grid>
				<Grid item xs={6} sx={about.right}>
					<Typography variant="h2" sx={about.name}>
						Hi, I&apos;m Will.
					</Typography>
					<Typography variant="h5" sx={about.title}>
						I am a graduate of a software engineering bootcamp from
						App Academy. This has been an incredible journey in
						which I have been inspired and challenged like never
						before, in a 1000+ hour curriculum over 24 weeks and
						with an acceptance rate of less than 5%. The 6 months in
						this program have only made me more passionate about
						building applications out of code or solving problems
						using technologies such as JavaScript, ReactJS/Redux,
						Express.js, and Python to name a few. <br />
						<br />
						I have built four full-stack applications, both
						independently and with a team of three other software
						engineers which have challenged me to use best Git
						workflow practices and utilizing separate branches and
						pull requests through GitHub. My last solo capstone
						project was a camping-themed lightweight clone of
						Airbnb. This project consisted of two full CRUD
						features, an embedded map through Google Maps API (Hi
						Google!), a file upload system leveraging use of Amazon
						Web Services (AWS), and a wealth of error validations
						through Express Validators all to make for a better user
						experience, completed independently within the span of
						two weeks. <br />
						<br />
						Since then, I&apos;ve worked at Etana Custody as a
						Frontend Developer where I had an amazing opportunity to
						learn and grow through a good amount of design and
						development freedom. I designed an internal service
						using technologies such as React.js, Redux, JavaScript,
						Material UI, AWS Cognito and AWS Amplify. <br />I hope
						to bring my passion of coding and learning into my next
						journey after Etana Custody to work with a
						forward-thinking and innovative company in an
						ever-growing industry.
					</Typography>
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
