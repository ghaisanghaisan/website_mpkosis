import AboutUs from "@components/home_slides/AboutUs";
import Gallery from "@components/home_slides/Gallery";
import Hero from "@components/home_slides/Hero";
import OurStuff from "@components/home_slides/OurStuff";
import ReadArticles from "@components/home_slides/ReadArticles";
import WhoWeAre from "@components/home_slides/WhoWeAre";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GraphQLClient, gql } from "graphql-request";
import Footer from "@components/Footer";

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
			showOnHero
			coverPhoto {
				url
			}
		}
	}
`;

export async function getStaticProps() {
	const { articles } = await graphcms.request(QUERY);
	const heroArticles = articles.filter((article) => article.showOnHero);

	const gallery = await fetch("http://localhost:3000/api/galleryview").then(
		(res) => res.json()
	);
	return {
		props: {
			articles,
			heroArticles,
			galleryPhotos: gallery.files,
		},
		revalidate: 10,
	};
}
export default function Home({ articles, heroArticles, galleryPhotos }) {
	return (
		<div>
			<Head>
				<title>MPK OSIS 55</title>
				<meta
					name="description"
					content="Website Official MPKOSIS di SMAN 55 Jakarta"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
			</Head>

			<main>
				<Hero heroArticles={heroArticles} />
				<AboutUs />
				<WhoWeAre />
				<OurStuff />
				<Gallery galleryPhotos={galleryPhotos} />
			</main>
			<Footer />
		</div>
	);
}
