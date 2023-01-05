/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				port: " ",
				pathname: "/",
			},
		],
	},
};

module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				pathname: "/**",
			},

			{
				protocol: "https",
				hostname: "lh[1-6].googleusercontent.com",
				pathname: "/**",
			},
		],
	},
};
