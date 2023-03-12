import React, { useState } from 'react';

//Style imports
import style from './AboutMe.module.scss';
import styleTema from 'styles/Tema.module.scss';

//Component import
import Card from 'components/Card';

import logos from './logos.json';

//Lib import
import classNames from 'classnames';
import StudiesLogo from 'components/StudiesLogo';

export default function AboutMe() {

	const [item, setItem] = useState(logos);

	return (
		<>
			<section className={classNames({
				[styleTema.container]: true,
				[style.infos]: true
			})}>
				<h2 className={styleTema.titulo}>Personal informations</h2>
				<Card />
			</section>
			<section className={style.studies}>
				<h2 className={styleTema.titulo}>My studies</h2>
				<div className={style.container}>
					{item.map(item => (
						<StudiesLogo key={item.id} {...item}/>
					))}
				</div>
			</section>
		</>
	);
}
