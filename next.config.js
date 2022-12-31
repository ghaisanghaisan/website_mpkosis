/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				port: "",
				pathname: "/",
			},
		],
	},
};

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				port: "",
				pathname: "/**",
			},

			{
				protocol: "https",
				hostname: "lh[1-6].googleusercontent.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};
