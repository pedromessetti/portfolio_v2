import React from 'react';

//Style imports
import style from './AboutMe.module.scss';
import styleTema from 'styles/Tema.module.scss';

//Component import
import Card from 'components/Card';
import StudiesLogo from 'components/StudiesLogo';

//Data import
import studies from 'data/studies.json';

//Lib import
import classNames from 'classnames';


export default function AboutMe() {

	const item = studies;

	return (
		<>
			<section className={classNames({
				[styleTema.container]: true,
				[style.infos]: true
			})}>
				<h2 className={styleTema.title}>Personal informations</h2>
				<Card />
			</section>
			<section className={style.studies}>
				<h2 className={styleTema.title}>My studies</h2>
				<div className={style.studies__container}>
					{item.map(item => (
						<StudiesLogo key={item.id} {...item} />
					))}
				</div>
			</section>
			<section className={style.about}>
			</section>
		</>
	);
}
