import React, { useState } from "react";
import Image from "next/image";
import styles from "@styles/Navbar.module.css";
import argalogo from "../public/Argasatya_Transparent.png";
import { MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";

export default function Navbar({ children }) {
	const [open, setOpen] = useState(false);

	function handleClick() {
		setOpen(!open);
	}

	return (
		<nav className={styles.navbar}>
			<div className="container">
				<div className={styles.nav}>
					<Link href="/">
						<Image
							src={argalogo}
							className={styles.logo}
							alt="Logo Argasatya Narutala"
						/>
					</Link>
					<div className={styles.togglemenu}>
						<ul
							className={` ${styles.navlinks}`}
							style={{
								transform: open ? "translate(-100%)" : "translate(0)",
							}}>
							<MdClose className={styles.closebtn} onClick={handleClick} />
							<h1>MPK OSIS 55</h1>

							<Link href="/" onClick={handleClick}>
								<li>Home</li>
							</Link>
							{/* <li>
					<Link href="/articles/">Artikel</Link>
				</li> */}
							<Link href="/gallery/" onClick={handleClick}>
								<li>Galeri</li>
							</Link>
							<Link href="/structure/" onClick={handleClick}>
								<li>Struktur</li>
							</Link>
						</ul>
						<MdMenu className={styles.menuicon} onClick={handleClick} />
					</div>
				</div>
			</div>
		</nav>
	);
}
