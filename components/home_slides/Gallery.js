import React from "react";
import styles from "@styles/home_slides/Gallery.module.css";
import Link from "next/link";
import GalleryPhoto from "@components/GalleryPhoto";

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
						{galleryPhotos.map((photo, index) => {
							if (
								index >= 24 ||
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
				<div className={styles.shadowUp}>&nbsp;</div>

				<svg
					className="wave"
					id="visual"
					viewBox="0 0 900 600"
					xmlns="http://www.w3.org/2000/svg"
					version="1.1">
					<path
						d="M0 486L21.5 484.2C43 482.3 86 478.7 128.8 484.3C171.7 490 214.3 505 257.2 520.3C300 535.7 343 551.3 385.8 551.7C428.7 552 471.3 537 514.2 536.3C557 535.7 600 549.3 642.8 549C685.7 548.7 728.3 534.3 771.2 527C814 519.7 857 519.3 878.5 519.2L900 519L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
						stroke-linecap="round"
						stroke-linejoin="miter"></path>
				</svg>
			</div>
		</div>
	);
}
