import React from 'react';

//Style imports
import style from './Footer.module.scss';

import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className={style.footer}>
			<div className={style.links}>
				<a href="https://www.linkedin.com/in/pedro-messetti/" target="_blank" rel="noopener noreferrer">
					<AiFillLinkedin />
				</a>
				<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
					<FaFacebook />
				</a>
				<a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
					<AiFillTwitterCircle />
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
