import React from "react";
import styles from "@styles/home_slides/OurStuff.module.css";
import logo from "@public/Logo 55FM.jpg";
import Image from "next/image";
import Link from "next/link";

function ProkerCard({ img, title, description, link }) {
	return (
		<Link href={link}>
			<div className={styles.prokercard}>
				<Image src={img} className={styles.image} />

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

					<div className={styles.gridcontainer}>
						<ProkerCard
							img={logo}
							title="55FM"
							description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis"
							link="https://www.youtube.com/"
						/>
						<ProkerCard
							img={logo}
							title="Instagram"
							description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis"
							link="https://www.youtube.com/"
						/>
						<ProkerCard
							img={logo}
							title="Youtube"
							description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis"
							link="https://www.youtube.com/"
						/>
						<ProkerCard
							img={logo}
							title="SCOPELLA"
							description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis"
							link="https://www.youtube.com/"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
