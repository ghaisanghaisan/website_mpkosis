import React, { useState } from "react";
import styles from "@styles/home_slides/Hero.module.css";
import ImageCarousel from "@components/ImageCarousel";
import Link from "next/link";

export default function Hero({ heroArticles }) {
	const [currentArticle, setCurrentArticle] = useState(heroArticles[0]);

	const handleChange = (index, item) => {
		setCurrentArticle(heroArticles[index]);
	};

	return (
		<div className="page-slides">
			{/* TODO: IMAGE CAROUSEL, BACKEND IMAGEFORMATTING, FIX WAVE RESPONSIVE */}
			<div className={styles.hero}>
				<ImageCarousel onChange={handleChange}>
					{heroArticles.map((article) => {
						return (
							<Link href={`/articles/${article.slug}`} key={article.id}>
								<div className={styles.herocrop}>
									<img
										src={article.coverPhoto.url}
										className={styles.heroimage}
									/>
								</div>
							</Link>
						);
					})}
				</ImageCarousel>
				<h1
					className={styles.herotitle}
					data-aos="fade-right"
					data-aos-offset="0">
					{currentArticle.secondaryTitle}
				</h1>
				<Link href={`/articles/${currentArticle.slug}`}>
					<div className={styles.learnbtn}>Learn More</div>
				</Link>

				<svg
					className={styles.wave}
					id="visual"
					viewBox="0 0 900 600"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1">
					<path
						d="M0 486L21.5 484.2C43 482.3 86 478.7 128.8 484.3C171.7 490 214.3 505 257.2 520.3C300 535.7 343 551.3 385.8 551.7C428.7 552 471.3 537 514.2 536.3C557 535.7 600 549.3 642.8 549C685.7 548.7 728.3 534.3 771.2 527C814 519.7 857 519.3 878.5 519.2L900 519L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
						stroke-linecap="round"
						stroke-linejoin="miter"></path>
				</svg>
				{/* <svg
					className={styles.wave}
					width="1440"
					height="352"
					viewBox="0 0 1440 352"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M174.797 125.496C88.4004 53.5425 41.9383 7.58544 0 0V354.902C337.666 351.832 1532.91 422.908 1434.23 353.396C1335.56 283.884 931.74 325.944 866.017 289.644C792.594 249.093 542.817 264.043 491.025 253C440.738 242.277 282.793 215.438 174.797 125.496Z"
						fill="#A62E2E"
					/>
				</svg> */}
			</div>
		</div>
	);
}
