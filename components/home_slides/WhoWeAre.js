import React from "react";
import styles from "@styles/home_slides/WhoWeAre.module.css";
import Link from "next/link";
import Image from "next/image";

import ketuampk from "@public/foto-anggota/1.Ketua-MPK/ketua-mpk-1.jpeg";
import ketuaosis from "@public/foto-anggota/1.Ketos-waketos/ketua-osis.jpg";
import wakilketuaosis from "@public/foto-anggota/1.Ketos-waketos/wakil-ketua-osis.jpg";

function PersonCard({ position, name, image }) {
	return (
		<div className={styles.personcard}>
			<Image className={styles.image} src={image} alt={`photo of ${name}`} />
			<h1>{position}</h1>
			<p>{name}</p>
		</div>
	);
}

export default function WhoWeAre() {
	return (
		<div className="page-slides">
			<div className={styles.whoweare}>
				<div className="container">
					<div
						className={styles.content}
						data-aos="fade-in"
						data-aos-offset="300">
						<PersonCard
							position="KETUA OSIS"
							name="Muhammad Akio Zaiko"
							image={ketuaosis}
						/>
						<PersonCard
							position="WAKIL KETUA OSIS"
							name="Jossy Zefanya"
							image={wakilketuaosis}
						/>
						<PersonCard
							position="KETUA MPK"
							name="Anastasia Shifa Abigail"
							image={ketuampk}
						/>
					</div>

					<p
						className={styles.invitetext}
						data-aos="fade-up"
						data-aos-offset="30">
						This is an organization after all{" "}
						<Link href="/structure/">
							<span className={styles.btncta}>See our full team</span>
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
