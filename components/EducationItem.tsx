import { Box, Typography, Grid, Paper } from "@mui/material";
import CompanyLogo from "./CompanyLogo";

export default function EducationItem({ props }: any) {
	const { school, level, minor, major, awards, city, dates } = props;

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
								height: "100%",
							}}
						>
							<CompanyLogo name={school} />
						</Box>
					</Grid>
					<Grid item xs={9}>
						<Box sx={{ ml: 2 }}>
							<Typography sx={{ fontSize: "16px" }}>
								{major}
								{awards && (
									<>
										,
										<Box
											component="span"
											sx={{
												fontSize: "14px",
												fontStyle: "italic",
												color: "#eee8ac",
												ml: 0.5,
											}}
										>
											{awards}
										</Box>
									</>
								)}
							</Typography>

							<Typography
								sx={{ fontSize: "14px", fontWeight: "bold" }}
							>
								{school}
							</Typography>
							<Typography sx={{ fontSize: "14px" }}>
								{city}
							</Typography>
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
