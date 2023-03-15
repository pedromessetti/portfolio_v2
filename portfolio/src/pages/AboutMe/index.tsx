import React, { useState } from 'react';

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
	const [addMargin, setAddMargin] = useState(false);

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
						<StudiesLogo key={item.id} setAddMargin={setAddMargin} addMargin={addMargin} {...item} />
					))}
				</div>
			</section>

			<section className={classNames({
				[style.about]: true,
				[style.about__active]: addMargin
			})}>
				<h2 className={styleTema.title}>About me</h2>
				<div>
					<p>
						<span className={style.tag__symbol}>&#60;</span>
						<span className={style.tag__text}>p</span>
						<span className={style.tag__symbol}>&#62; </span>
						I am a very ambitious person, like to challenge myself to develop the best solution for a bigger problem. I work very well in a team and consider myself very organized in my tasks. I like to be in constant development, learning more about new technologies, new frameworks, databases and programming languages. I consider myself a very hardworking and dedicated person, when i go after a goal i dont stop until reach it.
						<span className={style.tag__symbol}> &#60;/</span>
						<span className={style.tag__text}>p</span>
						<span className={style.tag__symbol}>&#62;</span>
					</p>
				</div>
			</section>
		</>
	);
}
