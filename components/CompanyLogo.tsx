import Image from "next/image";
export default function CompanyLogo({ name }: { name: string }) {
	switch (name) {
		case "Etana Custody": {
			return (
				<Image
					src={"/etana.png"}
					layout="fill"
					alt="Etana Custody Logo"
					objectFit={"contain"}
				/>
			);
		}
		case "Best Buy Geek Squad": {
			return (
				<Image
					src={"/geeksquad.svg"}
					layout="fill"
					alt="Geek Squad Logo"
				/>
			);
		}
		case "App Academy": {
			return (
				<Image
					src={"/app_academy.svg"}
					layout="fill"
					alt="App Academy Logo"
				/>
			);
		}
		case "Western Michigan University": {
			return (
				<Image
					src={"/western_michigan.svg"}
					layout="fill"
					alt="Western Michigan University Logo"
				/>
			);
		}
		case "Uber": {
			return <Image src={"/uber.svg"} layout="fill" alt="Uber Logo" />;
		}
		default:
			return null;
	}
}
