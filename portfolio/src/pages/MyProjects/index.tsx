import React from 'react';

//Style imports
import style from './MyProjects.module.scss';
import styleTema from 'styles/Tema.module.scss';
import classNames from 'classnames';
import projects from 'data/projects.json';
import ProjectCard from 'components/ProjectCard';
import Carousel from 'styled-components-carousel';

export default function MyProjects() {
	return (
		<>
			<section className={classNames({
				[styleTema.container]: true,
				[style.professional]: true
			})}
			>
				<h1 className={styleTema.title}>Professional Projects</h1>
				<div className={style.cards}>
					<Carousel center infinite showArrows showIndicator slidesToShow={4}>
						{projects.map(project => (
							<ProjectCard key={project.id} {...project} />
						))}
					</Carousel>
				</div>
			</section>

			<section className={styleTema.container}>
				<h1 className={styleTema.title}>42 Projects</h1>
			</section>

			<section className={styleTema.container}>
				<h1 className={styleTema.title}>Alura Projects</h1>
			</section>

			<section className={styleTema.container}>
				<h1 className={styleTema.title}>Python Projects</h1>
			</section>
		</>
	);
}
