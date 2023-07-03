import React, { useState } from 'react';
import styles from './StudiesIcon.module.scss';

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
		<div className={styles.studiesIcon} onClick={toggleExpand}>
			<img src={require(`assets/logos/${study.photo}`)} alt={study.name} className={styles.icon} />
			<p className={styles.name}>{study.name}</p>
			{isExpanded && (
				<div className={styles.expandedContent}>
					<p className={styles.description}>{study.description}</p>
					<ul className={styles.learnings}>
						{study.learnings.map((learning, index) => (
							<li key={index}>{learning}</li>
						))}
					</ul>
					<a href={study.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
						Visit Website
					</a>
				</div>
			)}
		</div>
	);
}