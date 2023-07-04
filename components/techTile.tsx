import { Box, Typography } from "@mui/material";
type Props = { name: string; icon: string; skill?: string };
export default function TechTile({ icon, name, skill }: Props) {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				m: 0,
				borderRadius: "5px",
				display: "flex",
				alignItems: "center",
				position: "relative",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					width: `${skill}`,
					height: 1,
					background:
						"linear-gradient(to right, #ff6600 0%, #66ff66 100%)",
					opacity: 0.25,
					borderRadius: "5px",
				}}
			></Box>
			<Box
				sx={{
					position: "absolute",
					width: 1,
					height: 1,
					opacity: 0.5,
					borderRadius: "5px",
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
					pr: 1,
				}}
			>
				{skill}
			</Box>
			<i
				className={icon}
				style={{ fontSize: "22px", marginLeft: "10px" }}
			/>

			<Typography variant="body1" sx={{ m: 1 }}>
				{name}
			</Typography>
		</Box>
	);
}
