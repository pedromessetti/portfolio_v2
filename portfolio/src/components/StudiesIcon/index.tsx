import React, { useState } from 'react';
import style from './StudiesIcon.module.scss';
import Study from 'types/IStudies';

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
			<div className={style.container}>
				<img src={require(`assets/logos/${study.photo}`)} alt={study.name} className={style.icon} />
				<p className={style.name}>{study.name}</p>
			</div>
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
