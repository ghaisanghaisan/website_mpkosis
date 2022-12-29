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
			<Navbar>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/articles/">Artikel</Link>
				</li>
				<li>
					<Link href="/gallery/">Galeri</Link>
				</li>
				<li>
					<Link href="/structure/">Struktur</Link>
				</li>
				<li>
					<Link href="/calender/">Kalender</Link>
				</li>
			</Navbar>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
