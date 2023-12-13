/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/",
				destination: "https://www.willkee.com",
				permanent: true,
			},
			{
				source: "/about",
				destination: "https://www.willkee.com",
				permanent: true,
			},
			{
				source: "/experience",
				destination: "https://www.willkee.com",
				permanent: true,
			},
			{
				source: "/skills",
				destination: "https://www.willkee.com",
				permanent: true,
			},
			{
				source: "/projects",
				destination: "https://www.willkee.com",
				permanent: true,
			},
			{
				source: "/contact",
				destination: "https://www.willkee.com",
				permanent: true,
			},
		];
	},
};
