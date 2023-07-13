import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import { HiMenu } from 'react-icons/hi';
import classNames from 'classnames';

export default function Header() {

	const [showMenu, setShowMenu] = useState(true);
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
		<header className={`${style.header} ${isVisible ? style.visible : style.hidden}`}>
			<div className={style.container}>
				<div className={style.container__menu}>
					<HiMenu
						onClick={() => {
							setShowMenu(!showMenu);
						}}
					/>
				</div>
				<div className={style.container__logo}>
					<Link to='/'>
						<h1>Port<span>folio</span></h1>
					</Link>
				</div>
			</div>
			<ul className={classNames({
				[style.nav]: true,
				[style.nav__show]: !showMenu,
			})
			}>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#about'>About Me</a>
				</li>
				<li>
					<a href='#projects'>Projects</a>
				</li>
				<li>
					<a href='#skills'>Skills</a>
				</li>
			</ul>
		</header>
	);
}
