import React from "react";
import styles from "@styles/components/ImageCarousel.module.css";
import { Carousel } from "react-responsive-carousel";

function customIndicator(onClickHandler, isSelected, index, label) {
	if (isSelected) {
		return (
			<li
				className={`${styles.customindicator} ${styles.active}`}
				aria-label={`Selected: ${label} ${index + 1}`}
				title={`Selected: ${label} ${index + 1}`}
			/>
		);
	}
	return (
		<li
			className={styles.customindicator}
			onClick={onClickHandler}
			onKeyDown={onClickHandler}
			value={index}
			key={index}
			role="button"
			tabIndex={0}
			title={`${label} ${index + 1}`}
			aria-label={`${label} ${index + 1}`}
		/>
	);
}

export default function ImageCarousel({ children, onChange }) {
	return (
		<Carousel
			infiniteLoop
			stopOnHover
			swipeable
			showArrows
			showIndicators
			showStatus={false}
			onChange={onChange}
			renderIndicator={customIndicator}>
			{children}
		</Carousel>
	);
}
