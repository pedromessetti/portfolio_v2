import React, { useEffect, useState } from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import style from './Footer.module.scss';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		let prevScrollY = window.pageYOffset;
		let ticking = false;

		const handleScroll = () => {
			const currentScrollY = window.pageYOffset;

			if (!ticking) {
				window.requestAnimationFrame(() => {
					if (currentScrollY < prevScrollY) {
						setIsVisible(true);
					} else {
						setIsVisible(false);
					}
					prevScrollY = currentScrollY;
					ticking = false;
				});

				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<footer className={`${style.footer} ${isVisible ? style.visible : style.hidden}`}>
			<div className={style.links}>
				<a href="https://www.linkedin.com/in/pedro-messetti/" target="_blank" rel="noopener noreferrer">
					<AiFillLinkedin />
				</a>
				<a href="mailto:pedromessetti@gmail.com" target="_blank" rel="noopener noreferrer">
					<MdEmail />
				</a>
				<a href="https://github.com/pedromessetti" target="_blank" rel="noopener noreferrer">
					<AiFillGithub />
				</a>
			</div>
			<div className={style.rights}>
				<p>Pedro Messetti - All rights reserved &copy; 2023</p>
			</div>
		</footer>
	);
}
