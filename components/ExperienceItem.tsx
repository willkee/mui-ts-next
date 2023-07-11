import { Box, Typography, Grid, Paper } from "@mui/material";
import CompanyLogo from "./CompanyLogo";
import { styled } from "@mui/material/styles";

export default function ExperienceItem({ props }: any) {
	const { company, title, dates, city, shortDesc, longDesc } = props;

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
						>
							<CompanyLogo name={company} />
						</Box>
					</Grid>
					<Grid item xs={9}>
						<Box sx={{ ml: 2 }}>
							<Typography sx={{ fontSize: "16px" }}>
								{title}
							</Typography>
							<Typography
								sx={{ fontSize: "14px", fontWeight: "bold" }}
							>
								{company}
							</Typography>
							<Typography
								sx={{ fontSize: "14px", fontWeight: "bold" }}
							>
								{city}
							</Typography>
							{shortDesc.map((desc: string, i: number) => (
								<Typography key={i} sx={{ fontSize: "14px" }}>
									{desc}
								</Typography>
							))}
							<ul
								style={{
									marginTop: "5px",
									marginLeft: "-15px",
								}}
							>
								{longDesc.map((desc: string, i: number) => (
									<li key={i} style={{ fontSize: "14px" }}>
										{desc}
									</li>
								))}
							</ul>
						</Box>
					</Grid>
					<Grid
						item
						xs={2}
						sx={{
							textAlign: "center",
							fontSize: "14px",
						}}
					>
						{dates}
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
