import React from "react";
import styles from "@styles/Structure.module.css";
import ImageCarousel from "@components/ImageCarousel";
import Image from "next/image";
import p from "@public/transparent.png";
import InstagramIcon from "@public/svg/instagramicon.svg";
import Footer from "@components/Footer";

import wakilketuaosis from "@public/foto-anggota/wakil-ketua-osis.png";
import anggotasekbidi1 from "@public/foto-anggota/anggota-sekbid-i-1.png";
import anggotasekbidi2 from "@public/foto-anggota/anggota-sekbid-i-2.png";
import anggotasekbidi3 from "@public/foto-anggota/anggota-sekbid-i-3.png";
import anggotasekbidii1 from "@public/foto-anggota/anggota-sekbid-ii-1.png";
import anggotasekbidii2 from "@public/foto-anggota/anggota-sekbid-ii-2.png";
import anggotasekbidii3 from "@public/foto-anggota/anggota-sekbid-ii-3.png";
import anggotasekbidiii1 from "@public/foto-anggota/anggota-sekbid-iii-1.png";
import anggotasekbidiii2 from "@public/foto-anggota/anggota-sekbid-iii-2.png";
import anggotasekbidiv1 from "@public/foto-anggota/anggota-sekbid-iv-1.png";
import anggotasekbidiv2 from "@public/foto-anggota/anggota-sekbid-iv-2.png";
import anggotasekbidiv3 from "@public/foto-anggota/anggota-sekbid-iv-3.png";
import anggotasekbidix1 from "@public/foto-anggota/anggota-sekbid-ix-1.png";
import anggotasekbidix2 from "@public/foto-anggota/anggota-sekbid-ix-2.png";
import anggotasekbidix3 from "@public/foto-anggota/anggota-sekbid-ix-3.png";
import anggotasekbidv1 from "@public/foto-anggota/anggota-sekbid-v-1.png";
import anggotasekbidv2 from "@public/foto-anggota/anggota-sekbid-v-2.png";
import anggotasekbidvi1 from "@public/foto-anggota/anggota-sekbid-vi-1.png";
import anggotasekbidvi2 from "@public/foto-anggota/anggota-sekbid-vi-2.png";
import anggotasekbidvii1 from "@public/foto-anggota/anggota-sekbid-vii-1.png";
import anggotasekbidvii2 from "@public/foto-anggota/anggota-sekbid-vii-2.png";
import anggotasekbidvii3 from "@public/foto-anggota/anggota-sekbid-vii-3.png";
import anggotasekbidviii1 from "@public/foto-anggota/anggota-sekbid-viii-1.png";
import anggotasekbidviii2 from "@public/foto-anggota/anggota-sekbid-viii-2.png";
import anggotasekbidx1 from "@public/foto-anggota/anggota-sekbid-x-1.png";
import anggotasekbidx2 from "@public/foto-anggota/anggota-sekbid-x-2.png";

import bendahara1 from "@public/foto-anggota/bendahara-1.png";
import bendahara2 from "@public/foto-anggota/bendahara-2.png";
import humas1 from "@public/foto-anggota/humas-1.png";
import humas2 from "@public/foto-anggota/humas-2.png";
import humas3 from "@public/foto-anggota/humas-3.png";
import ketuaosis from "@public/foto-anggota/ketua-osis.png";
import ketuasekbidi from "@public/foto-anggota/ketua-sekbid-i.png";
import ketuasekbidii from "@public/foto-anggota/ketua-sekbid-ii.png";
import ketuasekbidiii from "@public/foto-anggota/ketua-sekbid-iii.png";
import ketuasekbidiv from "@public/foto-anggota/ketua-sekbid-iv.png";
import ketuasekbidix from "@public/foto-anggota/ketua-sekbid-ix.png";
import ketuasekbidv from "@public/foto-anggota/ketua-sekbid-v.png";
import ketuasekbidvi from "@public/foto-anggota/ketua-sekbid-vi.png";
import ketuasekbidvii from "@public/foto-anggota/ketua-sekbid-vii.png";
import ketuasekbidviii from "@public/foto-anggota/ketua-sekbid-viii.png";
import ketuasekbidx from "@public/foto-anggota/ketua-sekbid-x.png";
import koordinatorhumas from "@public/foto-anggota/koordinator-humas.png";
import sekretaris1 from "@public/foto-anggota/sekretaris-1.png";
import sekretaris2 from "@public/foto-anggota/sekretaris-2.png";
import sekretarisumum from "@public/foto-anggota/sekretaris-umum.png";

import anggotakomisia1 from "@public/foto-anggota/anggota-komisi-a-1.png";
import anggotakomisia2 from "@public/foto-anggota/anggota-komisi-a-2.png";
import anggotakomisib1 from "@public/foto-anggota/anggota-komisi-b-1.png";
import anggotakomisib2 from "@public/foto-anggota/anggota-komisi-b-2.png";
import anggotakomisib3 from "@public/foto-anggota/anggota-komisi-b-3.png";
import anggotakomisic1 from "@public/foto-anggota/anggota-komisi-c-1.png";
import anggotakomisic2 from "@public/foto-anggota/anggota-komisi-c-2.png";
import ketuakomisia from "@public/foto-anggota/ketua-komisi-a.png";
import ketuakomisib from "@public/foto-anggota/ketua-komisi-b.png";
import ketuakomisic from "@public/foto-anggota/ketua-komisi-c.png";
import ketuampk from "@public/foto-anggota/ketua-mpk.png";
import sekretarismpk1 from "@public/foto-anggota/sekretaris-mpk-1.png";
import sekretarismpk2 from "@public/foto-anggota/sekretaris-mpk-2.png";

function StructureCarousel({ title, children }) {
	return (
		<div className={styles.structurecontainer}>
			<h1>{title}</h1>
			<ImageCarousel>{children}</ImageCarousel>
		</div>
	);
}

function PersonCard({ img, name, position, links, id, eg }) {
	return (
		<div className={[styles.personCard, eg].join(" ")} id={id}>
			<div>
				<Image
					src={img}
					className={styles.personImage}
					alt={`image of ${name}`}
				/>
				<div className={styles.personInfo}>
					<h1>{name}</h1>
					<p>{position}</p>
				</div>
			</div>
			{/* <div className={styles.personCardFooter}>
				{links &&
					links.map((link) => (
						<a href={link.url} target="_blank" rel="noreferrer noopener">
							{link.icon}
						</a>
					))}
			</div> */}
		</div>
	);
}

export default function StructurePage() {
	return (
		<div className={styles.structurePage}>
			<div className="container">
				<div className={styles.contentcontainer}>
					<h1 className="title ">Struktur MPK</h1>
					<StructureCarousel title="BPH">
						<div className={styles.slides}>
							<PersonCard
								img={ketuampk}
								name="Anastasia Syifa Abigeil"
								position="Ketua Umum"
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
								img={sekretarismpk1}
								name="Kayla Alima Fatin"
								position="Sekretaris I"
								links={[
									{
										icon: <InstagramIcon />,
										url: "https://www.instagram.com/danishghaisan_",
									},
								]}
							/>
							<PersonCard
								img={sekretarismpk2}
								name="Safa Nailatul Izzah"
								position="Sekretaris II"
								links={[
									{
										icon: <InstagramIcon />,
										url: "https://www.instagram.com/danishghaisan_",
									},
								]}
							/>
						</div>
					</StructureCarousel>
					<div className={styles.sekbidContainer}>
						<StructureCarousel title="Komisi A">
							<div className={styles.slides}>
								<PersonCard
									img={ketuakomisia}
									name="Fabnejla Aaliyah Ibradiputri"
									position="Ketua Komisi A"
								/>
							</div>
							<div className={styles.slides}>
								<PersonCard
									img={anggotakomisia1}
									name="Saskia Adya Auranisaa"
									position="Anggota Komisi A"
								/>
								<PersonCard
									img={anggotakomisia2}
									name="Steven Anthony Suhartoyo"
									position="Anggota Komisi A"
								/>
							</div>
						</StructureCarousel>
						<StructureCarousel title="Komisi B">
							<div className={styles.slides}>
								<PersonCard
									img={ketuakomisib}
									name="Baskoro Suryo Wibowo"
									position="Anggota Komisi B"
								/>
							</div>
							<div className={styles.slides}>
								<PersonCard
									img={anggotakomisib1}
									name="Daniel Christian Toro"
									position="Anggota Komisi B"
								/>
								<PersonCard
									img={anggotakomisib2}
									name="Ardeshir Hammurabi Shalmaneser"
									position="Anggota Komisi B"
								/>
								<PersonCard
									img={anggotakomisib3}
									name="Trisha Calista Siahaan"
									position="Anggota Komisi B"
								/>
							</div>
						</StructureCarousel>
						<StructureCarousel title="Komisi C">
							<div className={styles.slides}>
								<PersonCard
									img={ketuakomisic}
									name="Muhammad Dzaky Bahrul Ilmi"
									position="Ketua Komisi C"
								/>
							</div>
							<div className={styles.slides}>
								<PersonCard
									img={anggotakomisic1}
									name="Wilda Yulianti"
									position="Anggota Komisi C"
								/>
								<PersonCard
									img={anggotakomisic2}
									name="Naysilla Namira"
									position="Anggota Komisi C"
								/>
								<PersonCard
									img={p}
									name="Raisa Ramadhani"
									position="Anggota Komisi C"
								/>
							</div>
						</StructureCarousel>
					</div>
					<h1 className="title ">Struktur OSIS</h1>
					<StructureCarousel title="BPH">
						<div className={styles.slides}>
							<PersonCard
								img={ketuaosis}
								name="Muhammad Akio Zaiko"
								position="Ketua Umum"
								links={["www.instagram.com/danishghaisan_"]}
							/>
							<PersonCard
								img={wakilketuaosis}
								name="Jossy Zefanya"
								position="Wakil Ketua"
								links={["www.instagram.com/danishghaisan_"]}
							/>
						</div>
						<div className={styles.slides}>
							<PersonCard
								img={sekretarisumum}
								name="Rachmania Naila"
								position="Sekretaris Umum"
								links={["www.instagram.com/danishghaisan_"]}
							/>
							<PersonCard
								img={sekretaris1}
								name="Walu Amadea Mozza"
								position="Sekretaris I"
								links={["www.instagram.com/danishghaisan_"]}
							/>
							<PersonCard
								img={sekretaris2}
								name="Maylafazya Suryadikarta"
								position="Sekretaris II"
								links={["www.instagram.com/danishghaisan_"]}
							/>
						</div>
						<div className={styles.slides}>
							<PersonCard
								img={bendahara1}
								name="Aisya Radia"
								position="Bendahara I"
								links={["www.instagram.com/danishghaisan_"]}
							/>
							<PersonCard
								img={bendahara2}
								name="Naaila Dhiya Isnaeni"
								position="Bendahara II"
								links={["www.instagram.com/danishghaisan_"]}
							/>
						</div>
						<div className={styles.slides}>
							<PersonCard
								img={koordinatorhumas}
								name="Falih Elmanda Ghaisan"
								position="Koordinator Humas"
								links={["www.instagram.com/danishghaisan_"]}
							/>
							<PersonCard
								img={humas1}
								name="Ramelya Ramdany"
								position="Anggota Humas"
								links={["www.instagram.com/danishghaisan_"]}
							/>
							<PersonCard
								img={humas2}
								name=" Adinda Naura Adhyaksari"
								position="Anggota Humas"
								links={["www.instagram.com/danishghaisan_"]}
							/>
							<PersonCard
								img={humas3}
								name="Muhammad Ra’fi Za’dan"
								position="Anggota Humas"
								links={["www.instagram.com/danishghaisan_"]}
							/>
						</div>
					</StructureCarousel>
					<div className={styles.sekbidContainer}>
						<SekbidI />
						<SekbidII />
						<SekbidIII />
						<SekbidIV />
						<SekbidV />
					</div>
					<div className={styles.sekbidContainer}>
						<SekbidVI />
						<SekbidVII />
						<SekbidVIII />
						<SekbidIX />
						<SekbidX />
					</div>
				</div>
			</div>

			<div className={styles.wrap}>
				<Footer />
			</div>
		</div>
	);

	function SekbidX() {
		return (
			<StructureCarousel title="Sekbid X">
				<div className={styles.slides}>
					<PersonCard
						img={ketuasekbidx}
						name="Karen Iliana Lumban Tobing"
						position="Ketua Sekbid X"
					/>
				</div>
				<div className={styles.slides}>
					<PersonCard
						img={anggotasekbidx2}
						name="Tasya Zahra Syifa"
						position="Anggota Sekbid X"
					/>
					<PersonCard
						img={anggotasekbidx1}
						name="Theodora Zefanya Manulu"
						position="Anggota Sekbid X"
					/>
				</div>
			</StructureCarousel>
		);
	}

	function SekbidIX() {
		return (
			<StructureCarousel title="Sekbid IX">
				<div className={styles.slides}>
					<PersonCard
						eg={styles.nine}
						img={ketuasekbidix}
						name="Dinda Selomitha"
						position="Ketua Sekbid IX"
					/>
				</div>
				<div className={styles.slides}>
					<PersonCard
						id={styles.danish}
						eg={styles.nine}
						img={anggotasekbidix1}
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
						eg={styles.nine}
						img={anggotasekbidix1}
						name="Muhammad Alfiansyah"
						position="Anggota Sekbid IX"
					/>
					<PersonCard
						eg={styles.nine}
						img={anggotasekbidix3}
						name="Shazia Nandyta Lituhayu"
						position="Anggota Sekbid IX"
					/>
					<PersonCard
						eg={styles.nine}
						img={anggotasekbidix2}
						name="Najmu Syakieb"
						position="Anggota Sekbid IX"
					/>
				</div>
			</StructureCarousel>
		);
	}

	function SekbidVIII() {
		return (
			<StructureCarousel title="Sekbid VIII">
				<div className={styles.slides}>
					<PersonCard
						img={ketuasekbidviii}
						name="Dahniar Maya Fahrezi"
						position="Ketua Sekbid VIII"
					/>
				</div>
				<div className={styles.slides}>
					<PersonCard
						img={anggotasekbidviii1}
						name="Muhammad Hani’Arkanifasi"
						position="Anggota Sekbid VIII"
					/>
					<PersonCard
						img={anggotasekbidviii2}
						name="Oktaviana Nur Safitri"
						position="Anggota Sekbid VIII"
					/>
				</div>
			</StructureCarousel>
		);
	}

	function SekbidVII() {
		return (
			<StructureCarousel title="Sekbid VII">
				<div className={styles.slides}>
					<PersonCard
						img={ketuasekbidvii}
						name="Jovan Satria Aradhana"
						position="Ketua Sekbid VII"
					/>
				</div>
				<div className={styles.slides}>
					<PersonCard
						img={anggotasekbidvii1}
						name="Tessalonica Betrania L.T."
						position="Anggota Sekbid VII"
					/>
					<PersonCard
						img={anggotasekbidvii3}
						name="Yosia Muara Situmorang"
						position="Anggota Sekbid VII"
					/>
					<PersonCard
						img={anggotasekbidvii2}
						name="Shelly Lain Hui Ting "
						position="Anggota Sekbid VII"
					/>
				</div>
			</StructureCarousel>
		);
	}

	function SekbidVI() {
		return (
			<StructureCarousel title="Sekbid VI">
				<div className={styles.slides}>
					<PersonCard
						img={ketuasekbidvi}
						name="Adzraa Rizki Fitriani"
						position="Ketua Sekbid VI"
					/>
				</div>
				<div className={styles.slides}>
					<PersonCard
						img={anggotasekbidvi1}
						name="Altius Vieddy"
						position="Anggota Sekbid VI"
					/>
					<PersonCard
						img={anggotasekbidvi2}
						name="Maulida Fathul Fauza"
						position="Anggota Sekbid VI"
					/>
				</div>
			</StructureCarousel>
		);
	}

	function SekbidV() {
		return (
			<StructureCarousel title="Sekbid V">
				<div className={styles.slides}>
					<PersonCard
						img={ketuasekbidv}
						name="Rizkia Jeddah"
						position="Ketua Sekbid V"
					/>
				</div>
				<div className={styles.slides}>
					<PersonCard
						img={anggotasekbidv1}
						name="Galuh Rahmasiwi"
						position="Anggota Sekbid V"
					/>
					<PersonCard
						img={anggotasekbidv2}
						name="Azzah Zahraa"
						position="Anggota Sekbid V"
					/>
				</div>
			</StructureCarousel>
		);
	}

	function SekbidIV() {
		return (
			<StructureCarousel title="Sekbid IV">
				<div className={styles.slides}>
					<PersonCard
						img={ketuasekbidiv}
						name="Nindi Fitriani"
						position="Ketua Sekbid IV"
					/>
				</div>
				<div className={styles.slides}>
					<PersonCard
						img={anggotasekbidiv3}
						name="Dawsen Paskah"
						position="Anggota Sekbid IV"
					/>
					<PersonCard
						img={anggotasekbidiv1}
						name="Nasywa Callista"
						position="Anggota Sekbid IV"
					/>
					<PersonCard
						img={anggotasekbidiv2}
						name="Gizha Aliya Masyailla"
						position="Anggota Sekbid IV"
					/>
				</div>
			</StructureCarousel>
		);
	}

	function SekbidIII() {
		return (
			<StructureCarousel title="Sekbid III">
				<div className={styles.slides}>
					<PersonCard
						img={ketuasekbidiii}
						name="Keihan Radja Vasya"
						position="Ketua Sekbid III"
					/>
				</div>
				<div className={styles.slides}>
					<PersonCard
						img={anggotasekbidiii1}
						name="Kurniawan Firdaus"
						position="Anggota Sekbid III"
					/>
					<PersonCard
						img={anggotasekbidiii2}
						name="Nayla Rezqina Sya’bani"
						position="Anggota Sekbid III"
					/>
				</div>
			</StructureCarousel>
		);
	}

	function SekbidII() {
		return (
			<StructureCarousel title="Sekbid II">
				<div className={styles.slides}>
					<PersonCard
						img={ketuasekbidii}
						name="Muhammad Raffi Daulay"
						position="Ketua Sekbid II"
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
						img={anggotasekbidii1}
						name="Anisa Humaira"
						position="Anggota Sekbid II"
						links={[
							{
								icon: <InstagramIcon />,
								url: "https://www.instagram.com/danishghaisan_",
							},
						]}
					/>
					<PersonCard
						img={anggotasekbidii2}
						name="Chelsea Stifani Agustina"
						position="Anggota Sekbid II"
						links={[
							{
								icon: <InstagramIcon />,
								url: "https://www.instagram.com/danishghaisan_",
							},
						]}
					/>
					<PersonCard
						img={anggotasekbidii3}
						name="Evelyn Marintan T.M."
						position="Anggota Sekbid II"
						links={[
							{
								icon: <InstagramIcon />,
								url: "https://www.instagram.com/danishghaisan_",
							},
						]}
					/>
				</div>
			</StructureCarousel>
		);
	}

	function SekbidI() {
		return (
			<StructureCarousel title="Sekbid I">
				<div className={styles.slides}>
					<PersonCard
						img={ketuasekbidi}
						name="Hazel Zharfan Anggoro"
						position="Ketua Sekbid I"
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
						img={anggotasekbidi2}
						name="Bagas Erland Wicaksono"
						position="Anggota Sekbid I"
						links={[
							{
								icon: <InstagramIcon />,
								url: "https://www.instagram.com/danishghaisan_",
							},
						]}
					/>
					<PersonCard
						img={anggotasekbidi1}
						name="Muhammad Azril"
						position="Anggota Sekbid I"
						links={[
							{
								icon: <InstagramIcon />,
								url: "https://www.instagram.com/danishghaisan_",
							},
						]}
					/>
					<PersonCard
						img={anggotasekbidi3}
						name="Unzurna Rahiel Azada"
						position="Anggota Sekbid I"
						links={[
							{
								icon: <InstagramIcon />,
								url: "https://www.instagram.com/danishghaisan_",
							},
						]}
					/>
				</div>
			</StructureCarousel>
		);
	}
}
