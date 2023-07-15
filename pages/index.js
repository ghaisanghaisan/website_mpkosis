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
import { useState, useEffect } from "react";

import { MdClose } from "react-icons/md";

import Modal from "react-modal";

import styles from "@styles/Home.module.css";

import logoSCP from "@public/LOGOSCP.png";
import logoSCPpolos from "@public/LOGOSCPPOLOS.png";

import Image from "next/image";

import Link from "next/link";

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

	return {
		props: {
			articles,
			heroArticles,
		},
		revalidate: 10,
	};
}
export default function Home({ articles, heroArticles }) {
	const [galleryPhotos, setgalleryPhotos] = useState([]);
	const [modalIsOpen, setIsOpen] = useState(true);

	useEffect(() => {
		fetch("/api/galleryview")
			.then((res) => res.json())
			.then((parsedResponse) => {
				let data = parsedResponse.res.data;
				setgalleryPhotos(data.files);
			});
	}, []);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

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
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					contentLabel="Example Modal"
					className={styles.Modal}
					overlayClassName={styles.Overlay}>
					<div className={styles.ModalHeader}>
						<h1 className="title">DAFTAR SCOPELLA</h1>
						{/* <MdClose onClick={closeModal} className={styles.closebtn} /> */}
					</div>
					<div className={styles.ModalBody}>
						<div>
							<Image src={logoSCPpolos} width="1080" height="1080" />{" "}
						</div>
						<div>
							<p>
								Ikuti kompetisi tahunan yang diadakan oleh MPK/OSIS SMAN 55!
								Bergabunglah dalam beragam lomba, seperti Futsal, Basket, Tari
								Saman, dan Modern Dance.
								<br />
								<br />
								Jangan sia-siakan kesempatan ini untuk meraih prestasi.
								Tunjukkan bakatmu, buktikan kemampuanmu, dan raih kemenangan di
								panggung prestise acara ini.
								<br />
								<br />
								Bergabunglah sekarang dan jadilah bagian dari kesuksesan bersama
								kami!
							</p>
							<Link href="https://forms.gle/5CkQMbXVCbD37C1o6">
								<div className={styles.joinbtn}>Daftar Sekarang!</div>
							</Link>
						</div>
					</div>
				</Modal>
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
