import React from 'react';
import styles from './Card.module.scss';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import image from 'assets/myself/pedro.jpeg';


export default function Card() {
	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<img src={image} alt="Pedro Messetti" className={styles.image} />
				<div className={styles.overlay}></div>
				<div className={styles.socialIcons}>
					<a href="https://api.whatsapp.com/send?phone=351924686213" target="_blank" rel="noopener noreferrer">
						<ImWhatsapp />
					</a>
					<a href="https://www.instagram.com/pedromessetti/" target="_blank" rel="noopener noreferrer">
						<FaInstagram />
					</a>
					<a href="https://twitter.com/pedro_messetti" target="_blank" rel="noopener noreferrer">
						<FaTwitter />
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