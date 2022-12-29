import React from "react";
import { useRouter } from "next/router";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
	"https://api-ap-southeast-2.hygraph.com/v2/clbyicmkv0fgv01urddld1niq/master"
);

const QUERY = gql`
	query Article($slug: String!) {
		article(where: { slug: $slug }) {
			id
			title
			secondaryTitle
			content {
				html
			}
			datePublished
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
	const data = await graphcms.request(QUERY, { slug });
	const article = data.article;

	return {
		props: {
			article,
		},
	};
}

export default function Article({ article }) {
	return <div>{article.title}</div>;
}
