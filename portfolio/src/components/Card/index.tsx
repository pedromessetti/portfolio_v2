import React from 'react';
import styles from './Card.module.scss';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import image from 'assets/myself/pedro.jpeg';


export default function Card() {
	const icon = <FaTwitter />;
	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<img src={image} alt="Pedro Messetti" className={styles.image} />
				<div className={styles.overlay}></div>
				<div className={styles.socialIcons}>
					<a href="google.com" target="_blank" rel="noopener noreferrer">
						{icon}
					</a>
					<a href="google.com" target="_blank" rel="noopener noreferrer">
						<FaFacebook />
					</a>
					<a href="google.com" target="_blank" rel="noopener noreferrer">
						<FaInstagram />
					</a>
				</div>
			</div>
			<div className={styles.content}>
				<h3 className={styles.name}>Pedro Messetti</h3>
				<p className={styles.profession}>Software Developer</p>
				<p className={styles.location}>Lisbon, Portugal</p>
			</div>
		</div>
	);
}