import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import styles from "@styles/ArticlePage.module.css";
import Image from "next/image";
import ArticleCard from "@components/ArticleCard";

const graphcms = new GraphQLClient(
	"https://api-ap-southeast-2.hygraph.com/v2/clbyicmkv0fgv01urddld1niq/master"
);

const QUERY = gql`
	{
		articles(orderBy: createdAt_DESC) {
			createdAt
			datePublished
			id
			secondaryTitle
			slug
			title
			updatedAt
			content {
				html
			}
			coverPhoto {
				url
			}
		}
	}
`;

const SLUGLIST = gql`
	{
		articles {
			slug
		}
	}
`;

export async function getStaticPaths() {
	const { articles } = await graphcms.request(SLUGLIST);

	return {
		paths: articles.map((article) => ({ params: { slug: article.slug } })),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const slug = params.slug;
	const { articles } = await graphcms.request(QUERY);
	const article = articles.find((item) => item.slug == slug);

	return {
		props: {
			article,
			articles,
		},
	};
}

export default function Article({ article, articles }) {
	return (
		<div className="container">
			<div className={styles.gridContainer}>
				<div className={styles.article}>
					<div>
						<Image
							src={article.coverPhoto.url}
							alt=""
							width="1920"
							height="1080"
							className={styles.articleCoverphoto}
						/>
					</div>
					<div className={styles.articleInfo}>
						<h1>{article.title}</h1>
						<p>{article.datePublished}</p>
					</div>
					<div
						className={styles.articleContent}
						dangerouslySetInnerHTML={{ __html: article.content.html }}></div>
				</div>
				<div className={styles.recommendedArticles}>
					<h1>Other Articles</h1>
					{articles.map((item) =>
						// We do not want our current article to show up on the "other articles" section
						item.id === article.id ? (
							""
						) : (
							<div className={styles.wrap} key={item.id}>
								<ArticleCard
									scale="0.5"
									img={item.coverPhoto.url}
									title={item.title}
									date={item.datePublished}
									slug={item.slug}
								/>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
}
