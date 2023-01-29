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
				<Link href="/">
					<li>Home</li>
				</Link>
				{/* <li>
					<Link href="/articles/">Artikel</Link>
				</li> */}
				<Link href="/gallery/">
					<li>Galeri</li>
				</Link>
				<Link href="/structure/">
					<li>Struktur</li>
				</Link>
				{/* <li>
					<Link href="/calender/">Kalender</Link>
				</li> */}
			</Navbar>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
