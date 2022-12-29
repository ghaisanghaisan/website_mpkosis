import React from "react";
import Image from "next/image";
import styles from "@styles/home_slides/Collaborate.module.css";
import linelogo from "@public/linelogo.png";
import whatsapplogo from "@public/whatsapplogo.png";

export default function Collaborate() {
	return (
		<div className="page-slides">
			<div className={styles.Collaborate}>
				<div className="container">
					<div className="title">Kontak Kami</div>

					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipiscing elit Ut t.et massa
						mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
						fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
						vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
						ornare leo, non suscipi
					</p>
					<div className={styles.contactscontainer}>
						<div className={styles.contactcard}>
							<Image src={linelogo} className={styles.logo} />
							<div className={styles.contactinfo}>
								<div>CP: Ra'fi Za'dan</div>
								<div>ID:</div>
							</div>
						</div>
						<div className={styles.contactcard}>
							<Image src={linelogo} className={styles.logo} />
							<div className={styles.contactinfo}>
								CP: Ramelya Ramadany <br />
								<br />
								ID:
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
