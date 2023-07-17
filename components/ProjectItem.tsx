import { Box, Typography, Grid, Link, Button, CardMedia } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

export default function ProjectItem({ props }: any) {
	const { name, description, live, repo } = props;
	const items = [
		{
			Caption:
				"CampBnB is based off of AirBnB for users to list their spots or make bookings at existing spots on the platform.",
			contentPosition: "left",
			Image: "https://source.unsplash.com/featured/?macbook",
			Items: [
				{
					Name: "Macbook Pro",
					Image: "https://source.unsplash.com/featured/?macbook",
				},
				{
					Name: "iPhone",
					Image: "https://source.unsplash.com/featured/?iphone",
				},
			],
		},
		{
			Caption:
				"Spots may be edited or deleted by the owner of the spot as well.",
			contentPosition: "middle",
			Image: "https://source.unsplash.com/featured/?washingmachine",
			Items: [
				{
					Name: "Washing Machine WX9102",
					Image: "https://source.unsplash.com/featured/?washingmachine",
				},
				{
					Name: "Learus Vacuum Cleaner",
					Image: "https://source.unsplash.com/featured/?vacuum,cleaner",
				},
			],
		},
		{
			Caption: "Give style and color to your living room!",
			contentPosition: "right",
			Image: "https://source.unsplash.com/featured/?lamp",
			Items: [
				{
					Name: "Living Room Lamp",
					Image: "https://source.unsplash.com/featured/?lamp",
				},
				{
					Name: "Floral Vase",
					Image: "https://source.unsplash.com/featured/?vase",
				},
			],
		},
	];

	return (
		<Box sx={{ m: 2, mt: 5 }}>
			<Carousel>
				{items.map(({ Caption, Image }, i) => (
					<Grid
						container
						key={i}
						sx={{
							width: 1,
							border: "1px solid red",
							display: "flex",
							height: "500px",
						}}
					>
						<Grid
							item
							xs={8}
							sx={{
								height: 1,
								display: "flex",
								backgroundColor: "rgba(0,0,0,0.8)",
								p: 3,
							}}
						>
							<Box
								sx={{
									position: "relative",
									overflow: "hidden",
								}}
							>
								<Typography variant="h3">{name}</Typography>
								<Typography className="Caption">
									{Caption}
								</Typography>
								<Button
									variant="outlined"
									className="ViewButton"
								>
									Live Site
								</Button>
								<Button
									variant="outlined"
									className="ViewButton"
								>
									GitHub Repository
								</Button>
							</Box>
						</Grid>
						<Grid
							item
							xs={12}
							sx={{
								border: "1px solid yellow",
								display: "flex",
								height: 1,
								width: 1,
								position: "absolute",
								zIndex: -1,
							}}
						>
							<CardMedia
								component="img"
								image={Image}
								alt="Paella dish"
								sx={{ objectFit: "cover", height: "100%" }}
							/>
							<CardMedia
								component="img"
								image={Image}
								alt="Paella dish"
								sx={{ objectFit: "cover", height: "100%" }}
							/>
						</Grid>
					</Grid>
				))}
			</Carousel>
			{/* <Box
				sx={{
					flexGrow: 1,
					display: "flex",
					justifyContent: "space-between",
					p: 1,
				}}
			>
				<Grid container spacing={2}>
					<Grid item xs={1}>
						<Box
							sx={{
								position: "relative",
								width: { xs: "40px", sm: "55px", md: "80px" },
								height: "100px",
							}}
						></Box>
					</Grid>
					<Grid item xs={9}>
						<Box sx={{ ml: 2 }}>
							<Typography sx={{ fontSize: "16px" }}>
								{name}
							</Typography>
							<ul
								style={{
									marginTop: "5px",
									marginLeft: "-15px",
								}}
							>
								{description.map((desc: string, i: number) => (
									<li key={i} style={{ fontSize: "14px" }}>
										{desc}
									</li>
								))}
							</ul>
						</Box>
					</Grid>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "flex-end",
						}}
					>
						<Link href={live} target="_blank" underline="hover">
							Live Site
						</Link>
						<Link href={repo} target="_blank" underline="hover">
							GitHub Repository
						</Link>
					</Box>
				</Grid> */}
		</Box>
	);
}
