import React, { useState } from 'react';
import style from './StudiesIcon.module.scss';

export interface Study {
	id: number;
	name: string;
	photo: string;
	description: string;
	learnings: string[];
	link: string;
	docs_type: string;
	docs_link: string;
}

interface StudiesIconProps {
	study: Study;
}

export default function StudiesIcon({ study }: StudiesIconProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div onClick={toggleExpand}>
			<img src={require(`assets/logos/${study.photo}`)} alt={study.name} className={style.icon} />
			<p className={style.name}>{study.name}</p>
			{isExpanded && (
				<div className={style.overlay}>
					<div className={style.information}>
						<h3>{study.name}</h3>
						<p>{study.description}</p>
						<p>Learnings: {study.learnings.join(', ')}</p>
						<a href={study.docs_link} target="_blank" rel="noopener noreferrer">
							{study.docs_type}
						</a>
					</div>
				</div>
			)}
		</div>
	);
}
