import React from "react";
import styles from "@styles/home_slides/Gallery.module.css";
import Link from "next/link";
import GalleryPhoto, {
	PlaceholderGalleryPhotos,
} from "@components/GalleryPhoto";

export default function Gallery({ galleryPhotos }) {
	return (
		<div className="page-slides">
			<div className={styles.Gallery}>
				<div className="container">
					<h1 className="title colorPrimary">Galeri Program Kerja</h1>
					<div className={styles.footer}>
						<Link href="/gallery/">See All...</Link>
					</div>
					<div className={styles.flexgrid}>
						{galleryPhotos.length > 0 ? (
							galleryPhotos.map((photo, index) => {
								if (
									index >= 24 ||
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
							})
						) : (
							<PlaceholderGalleryPhotos />
						)}
					</div>
				</div>
				<div className={styles.shadowUp}>&nbsp;</div>
			</div>
		</div>
	);
}
