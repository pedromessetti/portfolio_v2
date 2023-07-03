import React from 'react';

import style from './StudiesDesc.module.scss';

import IStudies from 'types/IStudies';

import { TfiHandPointRight } from 'react-icons/tfi';

export default function StudiesDesc(props: IStudies) {
	return (
		<div className={style.container}>
			<p>{props.description}</p>
			<p><strong>Learnings: </strong>{props.learnings}</p>
			<a href={props.docs_link} target="_blank" rel="noopener noreferrer"><TfiHandPointRight />See my <span>{props.docs_type}</span></a>
		</div>
	);
}
