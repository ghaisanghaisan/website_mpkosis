import React from "react";
import styles from "@styles/components/ImageCarousel.module.css";
import { Carousel } from "react-responsive-carousel";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

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

function customArrowPrev(onClickHandler, therePrevItem) {
	return (
		<div className={styles.arrow} onClick={onClickHandler} id="left">
			<AiFillCaretLeft />
		</div>
	);
}

function customArrowNext(onClickHandler, thereNextItem) {
	return (
		<div className={styles.arrow} onClick={onClickHandler} id="right">
			<AiFillCaretRight />
		</div>
	);
}

export default function ImageCarousel({ children, onChange }) {
	return (
		<Carousel
			infiniteLoop
			stopOnHover
			swipeable={false}
			showArrows
			showIndicators
			showStatus={false}
			onChange={onChange}
			renderIndicator={customIndicator}
			renderArrowPrev={customArrowPrev}
			renderArrowNext={customArrowNext}>
			{children}
		</Carousel>
	);
}
