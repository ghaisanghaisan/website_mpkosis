import React from "react";
import styles from "@styles/home_slides/Gallery.module.css";
import Link from "next/link";

function GalleryPhoto({ img }) {
	return (
		<div className={styles.galleryPhoto}>
			<img src={img} className={styles.image} />
		</div>
	);
}

export default function Gallery() {
	return (
		<div className="page-slides">
			<div className={styles.Gallery}>
				<div className="container">
					<h1 className="title colorPrimary">Program Kerja Lalu Kami</h1>

					<div className={styles.flexgrid}>
						<GalleryPhoto />
						<GalleryPhoto />
						<GalleryPhoto />
						<GalleryPhoto />
						<GalleryPhoto />
						<GalleryPhoto />
						<GalleryPhoto />
						<GalleryPhoto />
						<GalleryPhoto />
						<GalleryPhoto />
					</div>
					<div className={styles.footer}>
						<Link href="/gallery/">See All...</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
