import React from "react";
import styles from "@styles/home_slides/OurStuff.module.css";
import logo55fm from "@public/Logo 55FM.jpg";
import logoIG from "@public/logoIG.png";
import logoYoutube from "@public/logoYoutube.png";
import Image from "next/image";
import Link from "next/link";

function ProkerCard({ offset, img, title, description, link }) {
	return (
		<Link href={link}>
			<div className={styles.prokercard}>
				<Image
					src={img}
					className={styles.image}
					alt={`Logo untuk ${title}`}
					style={{
						transform: `translate(${offset})`,
					}}
				/>

				<div className={styles.prokerlabel}>
					<div className={styles.prokerinfo}>
						<h1>{title}</h1>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default function OurStuff() {
	return (
		<div className="page-slides">
			<div className={styles.OurStuff}>
				<div className="container">
					<h1 className="title colorPrimary">Program Kerja Kami</h1>

					<div className={styles.prokercontainer}>
						<ProkerCard
							img={logo55fm}
							title="55FM"
							description="Podcastnya anak anak Petrol. Konten penuh edukasi dan juga canda tawa!"
							link="https://www.youtube.com/"
						/>
						<ProkerCard
							img={logoIG}
							title="Instagram"
							description="Instagram official MPK OSIS dari SMAN 55 Jakarta, dokumentasi, informasi penting, dan lain lain!"
							link="https://www.youtube.com/"
						/>
						<ProkerCard
							img={logoYoutube}
							title="Youtube"
							description="Channel Youtube official MPK OSIS dari SMAN 55 Jakarta."
							link="https://www.youtube.com/"
						/>
						<div className={styles.placeholder}>
							<h1>COMING SOON !</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}