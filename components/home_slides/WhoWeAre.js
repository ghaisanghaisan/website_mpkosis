import React from "react";
import styles from "@styles/home_slides/WhoWeAre.module.css";
import Link from "next/link";
import Image from "next/image";

import ketuampk from "@public/foto-anggota/ketua-mpk.png";
import ketuaosis from "@public/foto-anggota/ketua-osis.png";
import wakilketuaosis from "@public/foto-anggota/ketua-osis.png";

import p from "@public/transparent.png";

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
							image={p}
						/>
						<PersonCard
							position="KETUA MPK"
							name="Anastasia Shifa Abigeil"
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
