import { Box, Typography, Grid, Link } from "@mui/material";

export default function ProjectItem({ props }: any) {
	const { name, description, live, repo } = props;

	return (
		<Box sx={{ m: 2, mt: 5 }}>
			<Box
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
				</Grid>
			</Box>
		</Box>
	);
}
