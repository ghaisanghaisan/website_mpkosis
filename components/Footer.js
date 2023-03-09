import React from "react";
import Image from "next/image";
import styles from "@styles/components/Footer.module.css";
import linelogo from "@public/linelogo.png";
import whatsapplogo from "@public/whatsapplogo.png";

function Contacts() {
	return (
		<div className={styles.contactscontainer}>
			<div className={styles.pageTransition}>
				<svg
					className="wave"
					id="visual"
					viewBox="0 0 900 600"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1">
					<path
						d="M0 486L21.5 484.2C43 482.3 86 478.7 128.8 484.3C171.7 490 214.3 505 257.2 520.3C300 535.7 343 551.3 385.8 551.7C428.7 552 471.3 537 514.2 536.3C557 535.7 600 549.3 642.8 549C685.7 548.7 728.3 534.3 771.2 527C814 519.7 857 519.3 878.5 519.2L900 519L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
						strokeLinecap="round"
						strokeLinejoin="miter"></path>
				</svg>
			</div>
			<h2>Email: mpkosis.sman55@gmail.com</h2>
			<div className={styles.contactcard}>
				<Image
					src={linelogo}
					className={styles.logo}
					alt="logo of the app line"
				/>
				<div className={styles.contactinfo}>
					<div>CP: Ra&apos;fi Za&apos;dan </div>
					<div>ID: iniartzywoi</div>
				</div>
			</div>
			<div className={styles.contactcard}>
				<Image
					src={linelogo}
					className={styles.logo}
					alt="logo of the app line"
				/>
				<div className={styles.contactinfo}>
					<div>CP: Ramelya Ramdany </div>
					<div>ID: ramelyes</div>
				</div>
			</div>
		</div>
	);
}

export default function Footer() {
	return (
		<div className="page-slides">
			<div className={styles.Collaborate}>
				<div className="container">
					<h1 className="title">Kontak Kami!</h1>
					<div className={styles.flexWrapper}>
						<Contacts />
						<div className={styles.locationContainer}>
							<h2>Lokasi</h2>
							<iframe
								className={styles.locationMap}
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0632453586513!2d106.83696531454642!3d-6.25539859547215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3caf8f1ad59%3A0x5f38465f6461df9d!2sSenior%20High%20School%20State%2055%20of%20Jakarta!5e0!3m2!1sen!2sid!4v1672329033218!5m2!1sen!2sid"
								width="600"
								height="450"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
