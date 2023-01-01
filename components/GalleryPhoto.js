import styles from "@styles/components/GalleryPhoto.module.css";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPhoto({ img, link }) {
	return (
		<div className={styles.galleryPhoto}>
			<a href={link} target="_blank" rel="noreferrer noopener">
				<Image
					src={img}
					className={styles.image}
					height="1080"
					width="1920"
					alt=""
				/>
			</a>
		</div>
	);
}
