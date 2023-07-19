import Image from "next/image";
import { Box } from "@mui/material";
export default function CompanyLogo({ name }: { name: string }) {
	switch (name) {
		case "Etana Custody": {
			return (
				<Image
					src={"/experience/etana.png"}
					layout="fill"
					alt="Etana Custody Logo"
					objectFit={"contain"}
				/>
			);
		}
		case "Best Buy Geek Squad": {
			return (
				<Image
					src={"/experience/geeksquad.svg"}
					layout="fill"
					alt="Geek Squad Logo"
				/>
			);
		}
		case "App Academy": {
			return (
				<Image
					src={"/education/app_academy.svg"}
					layout="fill"
					alt="App Academy Logo"
				/>
			);
		}
		case "Western Michigan University": {
			return (
				<Box
					sx={{
						height: "70px",
						position: "relative",
						width: 1,
					}}
				>
					<Image
						src={"/education/western_michigan.svg"}
						layout="fill"
						alt="Western Michigan University Logo"
					/>
				</Box>
			);
		}
		case "Uber": {
			return (
				<Box
					sx={{
						height: "70px",
						position: "relative",
						width: 1,
					}}
				>
					<Image
						src={"/experience/uber.svg"}
						layout="fill"
						alt="Uber Logo"
					/>
				</Box>
			);
		}
		default:
			return null;
	}
}
