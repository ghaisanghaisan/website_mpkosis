import React from "react";
import styles from "@styles/Structure.module.css";
import ImageCarousel from "@components/ImageCarousel";
import Image from "next/image";
import p from "@public/foto-anggota/16. sekbid 9/dsc07957(1).jpg";
import InstagramIcon from "@public/svg/instagramicon.svg";
import Footer from "@components/Footer";

function StructureCarousel({ title, children }) {
	return (
		<div className={styles.structurecontainer}>
			<h1>{title}</h1>
			<ImageCarousel>{children}</ImageCarousel>
		</div>
	);
}

function PersonCard({ img, name, position, links }) {
	return (
		<div className={styles.personCard}>
			<div>
				<Image src={img} className={styles.personImage} />
				<h1>{name}</h1>
				<p>{position}</p>
			</div>
			<div className={styles.personCardFooter}>
				{links.map((link) => (
					<a href={link.url} target="_blank" rel="noreferrer noopener">
						{link.icon}
					</a>
				))}
			</div>
		</div>
	);
}

export default function StructurePage() {
	return (
		<div className={styles.structurePage}>
			<div className="container">
				<div className={styles.contentcontainer}>
					<h1 className="title ">Struktur Kami</h1>
					<StructureCarousel title="MPK">
						<div className={styles.slides}></div>
						<div className={styles.slides}>
							<PersonCard
								img={p}
								name="Danish Ghaisan Putera Ahmadi"
								position="Anggota Sekbid IX"
								links={[
									{
										icon: <InstagramIcon />,
										url: "https://www.instagram.com/danishghaisan_",
									},
								]}
							/>
							<PersonCard
								img={p}
								name="Danish Ghaisan Putera Ahmadi"
								position="Anggota Sekbid IX"
								links={[
									{
										icon: <InstagramIcon />,
										url: "https://www.instagram.com/danishghaisan_",
									},
								]}
							/>
							<PersonCard
								img={p}
								name="Danish Ghaisan Putera Ahmadi"
								position="Anggota Sekbid IX"
								links={[
									{
										icon: <InstagramIcon />,
										url: "https://www.instagram.com/danishghaisan_",
									},
								]}
							/>
							<PersonCard
								img={p}
								name="Danish Ghaisan Putera Ahmadi"
								position="Anggota Sekbid IX"
								links={[
									{
										icon: <InstagramIcon />,
										url: "https://www.instagram.com/danishghaisan_",
									},
								]}
							/>
						</div>
					</StructureCarousel>

					<StructureCarousel title="BPH">
						<div className={styles.slides}>
							<PersonCard
								img={p}
								name="Danish Ghaisan Putera Ahmadi"
								position="Anggota Sekbid IX"
								links={["www.instagram.com/danishghaisan_"]}
							/>
						</div>
					</StructureCarousel>
					<div className={styles.sekbidContainer}>
						<StructureCarousel title="Sekbid I">
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
						</StructureCarousel>
						<StructureCarousel title="Sekbid II">
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
						</StructureCarousel>
						<StructureCarousel title="Sekbid III">
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
						</StructureCarousel>
						<StructureCarousel title="Sekbid IV">
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
						</StructureCarousel>
						<StructureCarousel title="Sekbid V">
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
						</StructureCarousel>
					</div>
					<div className={styles.sekbidContainer}>
						<StructureCarousel title="Sekbid VI">
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
						</StructureCarousel>
						<StructureCarousel title="Sekbid VII">
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
						</StructureCarousel>
						<StructureCarousel title="Sekbid VIII">
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
						</StructureCarousel>
						<StructureCarousel title="Sekbid IX">
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
						</StructureCarousel>
						<StructureCarousel title="Sekbid X">
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
							<div className={styles.slides}>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
								<PersonCard
									img={p}
									name="Danish Ghaisan Putera Ahmadi"
									position="Anggota Sekbid IX"
									links={[
										{
											icon: <InstagramIcon />,
											url: "https://www.instagram.com/danishghaisan_",
										},
									]}
								/>
							</div>
						</StructureCarousel>
					</div>
				</div>
			</div>

			<div className={styles.wrap}>
				<Footer />
			</div>
		</div>
	);
}
