import React, { useEffect, useState } from "react";
import styles from "@styles/Gallery.module.css";
import GalleryPhoto, {
	PlaceholderGalleryPhotos,
} from "@components/GalleryPhoto";
import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";

export default function GalleryPage() {
	const [galleryPhotos, setgalleryPhotos] = useState([]);
	const [nextPageToken, setNextPageToken] = useState("");

	useEffect(() => {
		fetch("/api/galleryview")
			.then((res) => res.json())
			.then((parsedResponse) => {
				let data = parsedResponse.res.data;
				setgalleryPhotos((prevState) => [...prevState, ...data.files]);
				setNextPageToken(data.nextPageToken);
			});
	}, []);

	function nextData() {
		console.log("Finding next");
		fetch(`/api/galleryview/${nextPageToken}`)
			.then((res) => res.json())
			.then((parsedResponse) => {
				let data = parsedResponse.res.data;
				setgalleryPhotos((prevState) => [...prevState, ...data.files]);
				setNextPageToken(data.nextPageToken);
			});
	}

	return (
		<div className={styles.galleryPage}>
			<Head>
				<title>MPK OSIS 55 - Galeri</title>
				<meta
					name="description"
					content="Galeri Foto Program Program Kerja lalu MPK/OSIS di SMAN 55 Jakarta"
				/>
			</Head>
			<div className="container">
				<h1 className="title colorPrimary">Galeri Kami</h1>
				<div>
					<InfiniteScroll
						className={styles.photoContainer}
						dataLength={galleryPhotos.length}
						next={nextData}
						hasMore={nextPageToken.length > 0}
						loader={<PlaceholderGalleryPhotos />}
						endMessage={
							<p style={{ textAlign: "center" }}>
								              <b>Yay! You have seen it all</b>
								            
							</p>
						}>
						{galleryPhotos.map((photo, index) => {
							if (
								!photo.thumbnailLink ||
								photo.mimeType === "application/vnd.google-apps.folder"
							) {
								return;
							}
							return (
								<GalleryPhoto
									key={photo.id}
									img={photo.thumbnailLink}
									link={photo.webViewLink}
								/>
							);
						})}
					</InfiniteScroll>
				</div>
			</div>
		</div>
	);
}
