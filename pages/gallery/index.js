import React, { useEffect, useState } from "react";
import styles from "@styles/Gallery.module.css";
import GalleryPhoto from "@components/GalleryPhoto";
import Head from "next/head";

export default function GalleryPage() {
	const [galleryPhotos, setgalleryPhotos] = useState([]);

	useEffect(() => {
		fetch("/api/galleryview", { photosNum: 100 })
			.then((res) => res.json())
			.then((data) => setgalleryPhotos(data.files));
	}, []);

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
								key={photo.id}
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
