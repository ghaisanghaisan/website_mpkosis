import { useEffect } from "react";

import "../styles/globals.css";
import AOS from "aos";

import Navbar from "@components/Navbar";
import Link from "next/link";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			easing: "ease-out-cubic",
			once: true,
			offset: 200,
		});
	}, []);

	return (
		<>
			<Navbar />

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
