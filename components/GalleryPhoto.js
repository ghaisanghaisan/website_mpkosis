import styles from "@styles/components/GalleryPhoto.module.css";
import Image from "next/image";
import Link from "next/link";

export function PlaceholderGalleryPhotos() {
	return (
		<>
			{[...Array(24)].map((x, i) => (
				<GalleryPhoto />
			))}
		</>
	);
}

export default function GalleryPhoto({ img, link }) {
	if (img && link) {
		return (
			<div className={styles.galleryPhoto}>
				<a href={link} target="_blank" rel="noreferrer noopener">
					<Image
						src={img}
						className={styles.image}
						height="1080"
						width="1920"
						alt=""
						unoptimized
					/>
				</a>
			</div>
		);
	}

	return <div className={styles.galleryPhoto} id={styles.skeleton}></div>;
}
