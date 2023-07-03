import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './Header.module.scss';

import { HiMenu } from 'react-icons/hi';

import classNames from 'classnames';

export default function Header() {

	const [showMenu, setShowMenu] = useState(true);

	return (
		<header>
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
				[style.nav__show]: showMenu
			})
			}>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About Me</Link>
				</li>
				<li>
					<Link to='/projects'>My Projects</Link>
				</li>
				<li>
					<Link to='/skills'>Skills</Link>
				</li>
			</ul>
		</header>
	);
}
