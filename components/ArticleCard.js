import React from "react";
import styles from "@styles/components/ArticleCard.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ArticleCard({ scale, img, title, date, slug }) {
	return (
		<div
			style={{
				transformOrigin: "left top",
				scale,
			}}>
			<Link href={`/articles/${slug}`} className={styles.ArticleCard}>
				<div className={styles.articleimage}>
					<Image src={img} alt="" height="1080" width="1920" />
				</div>
				<div className={styles.articlelabel}>
					<h1>{title}</h1>
					<small>{date}</small>
				</div>
			</Link>
		</div>
	);
}
