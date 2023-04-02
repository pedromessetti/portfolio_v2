/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import style from './ProjectCard.module.scss';
import IProjects from 'types/IProjects';

export default function ProjectCard(props: IProjects) {

	const CurrentBg = require(`assets/projects/${props.photo}`);

	return (
		<article className={style.card} style={{backgroundImage: `url(${CurrentBg})`}}>
			<div className={style.card__body}>
				<h2>{props.name}</h2>
				<p>{props.description}</p>
			</div>
		</article>
	);
}
