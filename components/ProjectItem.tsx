import { Box, Typography, Grid, Link, Button, CardMedia } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { projects } from "../styles/muiStyles";

export default function ProjectItem({ props }: any) {
	const { name, logo, live, repo, data } = props;
	const { carousel, container } = projects;

	return (
		<Box sx={container}>
			<Carousel>
				{data.map(({ Caption, Image }: any, i: number) => (
					<Grid
						container
						key={i}
						columns={{ xs: 4, sm: 8, md: 12 }}
						sx={carousel.container}
					>
						<Grid
							item
							xs={4}
							sm={4}
							md={4}
							sx={{
								...carousel.item,
								backgroundImage: {
									xs: `url(${Image})`,
									sm: `url(${logo})`,
								},
								objectFit: "cover",
							}}
						>
							<Box sx={carousel.overlay}>
								<Typography variant="h3">{name}</Typography>
								<Typography className="Caption">
									{Caption}
								</Typography>
								<Box sx={carousel.buttons}>
									<Button
										target="_blank"
										href={live}
										variant="outlined"
									>
										Live Site
									</Button>
									<Button
										target="_blank"
										href={repo}
										variant="outlined"
									>
										GitHub Repository
									</Button>
								</Box>
							</Box>
						</Grid>
						<Grid item sm={4} md={8} sx={carousel.imgContainer}>
							<CardMedia
								component="img"
								image={Image}
								alt={Caption}
								sx={carousel.image}
							/>
						</Grid>
					</Grid>
				))}
			</Carousel>
		</Box>
	);
}
