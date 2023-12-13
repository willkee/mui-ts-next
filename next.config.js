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
		];
	},
};
