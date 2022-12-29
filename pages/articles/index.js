import React from "react";
import styles from "@styles/Articles.module.css";
import ArticleCard from "@components/ArticleCard";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
	"https://api-ap-southeast-2.hygraph.com/v2/clbyicmkv0fgv01urddld1niq/master"
);

const QUERY = gql`
	{
		articles(orderBy: createdAt_DESC) {
			createdAt
			datePublished
			id
			slug
			title
			coverPhoto {
				url
			}
		}
	}
`;

export async function getStaticProps() {
	const { articles } = await graphcms.request(QUERY);
	return {
		props: {
			articles,
		},
	};
}

export default function ArticlesPage({ articles }) {
	return (
		<div className={styles.Articles}>
			<div className="container">
				<h1 className="title colorPrimary">Artikel Kami</h1>
				<div className={styles.articleGrid}>
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
	);
}
