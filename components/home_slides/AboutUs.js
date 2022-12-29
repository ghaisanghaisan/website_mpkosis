import React from "react";
import styles from "@styles/home_slides/AboutUs.module.css";
import argalogo from "@public/Argasatya_Transparent.png";
import Image from "next/image";

export default function AboutUs() {
	return (
		<div className="page-slides">
			<div className={styles.aboutus}>
				<div className="container">
					<h1 className="title">Tentang Kami</h1>
					<div className={styles.content}>
						<p data-aos="fade-in" data-aos-duration="500">
							OSIS SMA Negeri 55 Jakarta adalah organisasi yang sah dan resmi
							sebagai wadah dalam mendorong terwujudnya kolaborasi nyata dengan
							semangat kebermanfaatan baik dalam akademik maupun non akademik
							sekolah.
						</p>
						<Image
							src={argalogo}
							className={styles.logo}
							data-aos="zoom-out"
							data-aos-duration="600"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
