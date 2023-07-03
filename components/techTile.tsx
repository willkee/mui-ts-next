import { Box, Typography } from "@mui/material";
export default function TechTile(name: string) {
	return (
		<Box
			sx={{
				p: 2,
				width: "100px",
				height: "100px",
			}}
		>
			<i
				className="devicon-javascript-plain"
				style={{ fontSize: "28px" }}
			/>

			<Typography variant="body1">{name}</Typography>
		</Box>
	);
}
