import React from 'react';

import style from './StudiesLogo.module.scss';

interface Props {
	name: string,
	path: string,
	id: string,
 href: string
}

export default function StudiesLogo(props: Props) {
	return (
		<a href={props.href} target='_blank' rel='noreferrer' className={style.container}>
			<img src={props.path} alt={`${props.name} Logo`} />
			<p>{props.name}</p>
		</a>
	);
}
