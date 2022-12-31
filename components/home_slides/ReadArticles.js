import React from "react";
import styles from "@styles/home_slides/ReadArticles.module.css";
import ArticleCard from "../ArticleCard.js";
import Link from "next/link.js";

export default function ReadArticles({ articles }) {
	return (
		<div className="page-slides">
			<div className={styles.ReadArticles}>
				<div className="container">
					<h1 className="title colorPrimary	">Baca Artikel Kami</h1>
					<div className={styles.footer}>
						<Link href="/articles/">See All...</Link>
					</div>
					<div className={styles.slideshow}>
						{articles.map((article) => (
							<ArticleCard
								key={article.id}
								img={article.coverPhoto.url}
								title={article.title}
								date={article.datePublished}
								slug={article.slug}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
