import React from "react";
import styles from "@styles/components/ArticleCard.module.css";
import Link from "next/link";

export default function ArticleCard({ img, title, date, slug }) {
	return (
		<Link href={`/articles/${slug}`} className={styles.ArticleCard}>
			<div className={styles.articleimage}>
				<img src={img} />
			</div>
			<div className={styles.articlelabel}>
				<h1>{title}</h1>
				<small>{date}</small>
			</div>
		</Link>
	);
}
