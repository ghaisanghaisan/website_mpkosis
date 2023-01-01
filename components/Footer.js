import React from "react";
import Image from "next/image";
import styles from "@styles/components/Footer.module.css";
import linelogo from "@public/linelogo.png";
import whatsapplogo from "@public/whatsapplogo.png";

function Contacts() {
	return (
		<div className={styles.contactscontainer}>
			<h2>Email: mpkosis.sman55@gmail.com</h2>
			<div className={styles.contactcard}>
				<Image
					src={linelogo}
					className={styles.logo}
					alt="logo of the app line"
				/>
				<div className={styles.contactinfo}>
					<div>CP: Ra&apos;fi Za&apos;dan </div>
					<div>ID:</div>
				</div>
			</div>
			<div className={styles.contactcard}>
				<Image
					src={linelogo}
					className={styles.logo}
					alt="logo of the app line"
				/>
				<div className={styles.contactinfo}>
					<div>CP: Ramelya Ramadany </div>
					<div>ID:</div>
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
								allowFullscreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
