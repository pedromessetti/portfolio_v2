import React from 'react';

//Style imports
import style from './MyProjects.module.scss';
import styleTema from 'styles/Tema.module.scss';
import classNames from 'classnames';
import professional_projects from 'data/professional.json';
import ft_projects from 'data/42.json';
import alura_projects from 'data/alura.json';
import python_projects from 'data/python.json';
import ProjectCard from 'components/ProjectCard';
import Carousel from 'styled-components-carousel';
import projects from 'data/projects.json';

export default function MyProjects() {
	return (
		<>
			<section className={styleTema.container}>
				<h1 className={styleTema.title}>Professional Projects</h1>
				<div className={style.cards}>
					<Carousel center infinite showArrows showIndicator slidesToShow={3}>
						{professional_projects.map((professional_project, index) => (
							<ProjectCard key={index} {...professional_project} />
						))}
					</Carousel>
				</div>
			</section>

			<section className={styleTema.container}>
				<h1 className={styleTema.title}>42 Projects</h1>
				<div className={style.cards}>
					<Carousel center infinite showArrows showIndicator slidesToShow={3}>
						{ft_projects.map((ft_project, index) => (
							<ProjectCard key={index} {...ft_project} />
						))}
					</Carousel>
				</div>
			</section>

			<section className={styleTema.container}>
				<h1 className={styleTema.title}>Alura Projects</h1>
				<div className={style.cards}>
					<Carousel center infinite showArrows showIndicator slidesToShow={3}>
						{alura_projects.map((alura_project, index) => (
							<ProjectCard key={index} {...alura_project} />
						))}
					</Carousel>
				</div>
			</section>

			<section className={styleTema.container}>
				<h1 className={styleTema.title}>Python Projects</h1>
				<Carousel center infinite showArrows showIndicator slidesToShow={3}>
					{python_projects.map((python_project, index) => (
						<ProjectCard key={index} {...python_project} />
					))}
				</Carousel>
			</section>
		</>
	);
}
