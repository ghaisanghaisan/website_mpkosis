import React, { useState } from "react";
import Image from "next/image";
import styles from "@styles/Navbar.module.css";
import argalogo from "../public/Argasatya_Transparent.png";
import { MdMenu } from "react-icons/md";
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
						<Image src={argalogo} className={styles.logo} />
					</Link>
					<div className={styles.togglemenu}>
						{open ? <ul className={styles.navlinks}>{children}</ul> : ""}
						<MdMenu className={styles.menuicon} onClick={handleClick} />
					</div>
				</div>
			</div>
		</nav>
	);
}
