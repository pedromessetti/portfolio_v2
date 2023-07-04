import React from 'react';
import projectsData from 'data/projects.json';
import style from './MyProjects.module.scss';
import Category from 'types/IProjects';

export default function MyProjects() {
	const data: Category[] = projectsData;

	return (
		<div className={style.projectsPage}>
			{data.map((category) => (
				<div key={category.category} className={style.category}>
					<h2 className={style.categoryTitle}>{category.category}</h2>
					<div className={style.projectList}>
						{category.projects.map((project) => (
							<div key={project.name} className={style.project}>
								<img src={require(`assets/projects/${project.photo}`)} alt={project.name} className={style.projectPhoto} />
								<h3 className={style.projectName}>{project.name}</h3>
								<p>{project.description}</p>
								<a href={project.link} className={style.projectLink} target="_blank" rel="noopener noreferrer">
									View Project
								</a>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}