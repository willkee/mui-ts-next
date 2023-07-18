export const home = {
	container: {
		height: 1,
		width: 1,
		boxSizing: "content-box",
		display: "flex",
	},
	right: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	name: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: 1,
	},
	title: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: 1,
		color: "#777",
		mb: 2,
	},
	st: {
		mt: 2,
		display: "flex",
		fontSize: "1rem",
		justifyContent: "center",
		alignItems: "center",
		width: 1,
		color: "#555",
	},
	button: {
		mt: 2,
	},
};

export const about = {
	container: {
		height: 1,
		width: 1,
		boxSizing: "content-box",
		display: "flex",
	},
	right: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		p: 5,
		height: 1,
		backgroundColor: "rgba(0,0,0,0.85)",
		position: { xs: "absolute", sm: "absolute", md: "relative" },
	},
	name: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: 1,
	},
	title: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: 1,
		color: "#777",
		mb: 2,
		mt: 2,
		fontSize: "14px",
	},
	st: {
		mt: 2,
		display: "flex",
		fontSize: "1rem",
		justifyContent: "center",
		alignItems: "center",
		width: 1,
		color: "#555",
	},
	button: {
		mt: 2,
	},
};

export const projects = {
	container: { m: 2, mt: 5 },
	carousel: {
		container: {
			width: 1,
			display: "flex",
			height: "500px",
			borderImage: "linear-gradient(#c0c0c0, #cfb53b, #555) 30",
			borderWidth: "4px",
			borderStyle: "solid",
		},
		item: {
			height: 1,
			display: "flex",

			backgroundPositionX: "center",
			backgroundPositionY: "center",
		},
		overlay: {
			position: "relative",
			overflow: "hidden",
			backgroundColor: { xs: "rgba(0,0,0, 0.8)", sm: "rgba(0,0,0,0.8)" },
			width: 1,
			height: 1,
			p: 4,
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
		},
		imgContainer: {
			display: "flex",
			height: 1,
			width: 1,
			visibility: {
				xs: "hidden",
				sm: "visible",
				md: "visible",
			},
		},
		image: { objectFit: "cover", height: 1, width: 1 },
		buttons: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			mt: 2,
			height: "85px",
		},
	},
};

export const ct = {
	container: {
		height: 1,
		width: 1,
		boxSizing: "content-box",
		display: "flex",
	},
	right: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
		p: 5,
		height: 1,
		width: 1,
		backgroundColor: "rgba(0,0,0,0.85)",
		position: { xs: "absolute", sm: "absolute", md: "relative" },
	},
	name: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: 1,
	},
	title: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: 1,
		color: "#777",
		mb: 2,
		mt: 2,
		fontSize: "14px",
	},
	st: {
		mt: 2,
		display: "flex",
		fontSize: "1rem",
		justifyContent: "center",
		alignItems: "center",
		width: 1,
		color: "#555",
	},
	btnContainer: {
		display: "flex",
		flexDirection: "column",
	},
	links: {
		mt: 4,
		backgroundColor: "#555",
		color: "#fff",
		width: "200px",
		height: "60px",
		fontSize: "1.1rem",
		position: "relative",
	},
	text: { ml: 2 },
	linkedin: {
		fontSize: "220px",
	},
};
