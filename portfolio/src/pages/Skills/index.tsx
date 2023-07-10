import React from 'react';
import { IconType } from 'react-icons';
import { FaPython, FaReact, FaAngular, FaHtml5, FaSass } from 'react-icons/fa';
import { SiCoursera, SiCplusplus, SiCsharp, SiJavascript, SiTypescript, SiDjango, SiPowershell, SiMysql, SiSqlite, SiMongodb, SiCss3 } from 'react-icons/si';
import style from './Skills.module.scss';
import skillsData from 'data/skills.json';

const getIconComponent = (iconName: string): IconType => {
	switch (iconName) {
	case 'Python':
		return FaPython;
	case 'React':
		return FaReact;
	case 'Angular':
		return FaAngular;
	case 'HTML':
		return FaHtml5;
	case 'Sass':
		return FaSass;
	case 'C':
		return SiCoursera;
	case 'C++':
		return SiCplusplus;
	case 'C#':
		return SiCsharp;
	case 'JavaScript':
		return SiJavascript;
	case 'TypeScript':
		return SiTypescript;
	case 'Django':
		return SiDjango;
	case 'Shell':
		return SiPowershell;
	case 'MySQL':
		return SiMysql;
	case 'SQLite':
		return SiSqlite;
	case 'MongoDB':
		return SiMongodb;
	case 'CSS':
		return SiCss3;
	default:
		return FaPython;
	}
};

export default function Skills() {
	const skills = skillsData.skills;

	const center = { x: 300, y: 300 };
	const radius = 300;
	const angleStep = (2 * Math.PI) / skills.length;

	const getBubblePosition = (index: number) => {
		const angle = index * angleStep;
		const x = center.x + radius * Math.cos(angle);
		const y = center.y + radius * Math.sin(angle);
		return { x, y };
	};


	return (
		<div className={style.skillsPage}>
			<h2>My Programming Skills</h2>
			<svg className={style.skillSvg} viewBox="0 -100 600 900">
				<g>
					{skills.map((skill, index) => {
						const { x, y } = getBubblePosition(index);
						const IconComponent = getIconComponent(skill.name);

						return (
							<g key={skill.name}>
								<line
									x1={center.x}
									y1={center.y}
									x2={x}
									y2={y}
									stroke="#ccc"
									strokeWidth="2"
								/>
								<g
									transform={`translate(${x}, ${y})`}
									className={style.skillBubble}
								>
									<circle cx="0" cy="0" r="50"></circle>
									<IconComponent className={style.skillIcon} />
									<title>{skill.name}</title>
								</g>
								<foreignObject
									x={x + 100}
									y={y - 75}
									width="150"
									height="150"
								>
									<div className={style.skillDetails}>
										<h3>{skill.name}</h3>
										<p className={style.skillDescription}>
											{skill.description}
										</p>
									</div>
								</foreignObject>
							</g>
						);
					})}
				</g>
			</svg>
		</div>
	);
}
