import React, { useState } from 'react';
import projectsData from 'data/projects.json';
import style from './MyProjects.module.scss';
import styleTema from 'styles/Tema.module.scss';
import Category from 'types/IProjects';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

export default function MyProjects() {
	const [categoryVisibility, setCategoryVisibility] = useState<{ [category: string]: boolean }>({});

	const data: Category[] = projectsData;

	const toggleCategoryVisibility = (category: string) => {
		setCategoryVisibility((prevVisibility) => ({
			...prevVisibility,
			[category]: !prevVisibility[category],
		}));
	};

	return (
		<div className={`${style.projectsPage} ${styleTema.container}`}>
			{data.map((category) => {
				const isCategoryVisible = categoryVisibility[category.category] || false;

				return (
					<div key={category.category} className={style.category}>
						<div className={style.categoryContainer} onClick={() => toggleCategoryVisibility(category.category)}>
							{isCategoryVisible ? <SlArrowDown /> : <SlArrowUp />}
							<h2 className={style.categoryTitle}>
								{category.category}
							</h2>
						</div>
						<div
							className={`${style.projectList} ${isCategoryVisible ? style.showProjects : style.hideProjects}`}
							style={{
								maxHeight: isCategoryVisible ? '100%' : '0',
								transition: isCategoryVisible ? 'max-height 0.5s ease-in-out' : 'max-height 0.3s ease-in-out'
							}}
						>
							{category.projects.map((project) => (
								<div key={project.name} className={style.project}>
									<img
										src={require(`assets/projects/${project.photo}`)}
										alt={project.name}
										className={style.projectPhoto}
									/>
									<h3 className={style.projectName}>{project.name}</h3>
									<p>{project.description}</p>
									<a href={project.link} className={style.projectLink} target="_blank" rel="noopener noreferrer">
										View Project
									</a>
								</div>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
}
