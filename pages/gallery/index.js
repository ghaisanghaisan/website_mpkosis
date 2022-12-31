import React from "react";
import styles from "@styles/Gallery.module.css";
import GalleryPhoto from "@components/GalleryPhoto";

export async function getStaticProps() {
	const gallery = await fetch("http://localhost:3000/api/galleryview").then(
		(res) => res.json()
	);
	return {
		props: {
			galleryPhotos: gallery.files,
		},
		revalidate: 10,
	};
}
export default function GalleryPage({ galleryPhotos }) {
	return (
		<div className={styles.galleryPage}>
			<div className="container">
				<h1 className="title colorPrimary">Galeri Kami</h1>
				<div className={styles.photoContainer}>
					{galleryPhotos.map((photo, index) => {
						if (
							!photo.thumbnailLink ||
							photo.mimeType === "application/vnd.google-apps.folder"
						) {
							return;
						}
						return (
							<GalleryPhoto
								img={photo.thumbnailLink}
								link={photo.webViewLink}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
