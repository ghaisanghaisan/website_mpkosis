import React from "react";
import styles from "@styles/components/ImageCarousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export function CustomIndicator({ onClickHandler, isSelected, index, label }) {
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

export function CustomArrowPrev({ onClickHandler, therePrevItem }) {
	return (
		<div className={styles.arrow} onClick={onClickHandler} id="left">
			<AiFillCaretLeft />
		</div>
	);
}

export function CustomArrowNext({ onClickHandler, thereNextItem }) {
	return (
		<div className={styles.arrow} onClick={onClickHandler} id="right">
			<AiFillCaretRight />
		</div>
	);
}

export default function ImageCarousel({ children, onChange, width }) {
	return (
		<Carousel
			width={width}
			infiniteLoop
			stopOnHover
			swipeable={false}
			showArrows
			showIndicators
			showStatus={false}
			onChange={onChange}
			renderIndicator={(onClickHandler, isSelected, index, label) => (
				<CustomIndicator
					onClickHandler={onClickHandler}
					isSelected={isSelected}
					index={index}
					label={label}
				/>
			)}
			renderArrowPrev={(onClickHandler) => (
				<CustomArrowPrev onClickHandler={onClickHandler} />
			)}
			renderArrowNext={(onClickHandler) => (
				<CustomArrowNext onClickHandler={onClickHandler} />
			)}>
			{children}
		</Carousel>
	);
}
