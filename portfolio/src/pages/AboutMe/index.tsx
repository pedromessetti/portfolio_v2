import React from 'react';
import style from './AboutMe.module.scss';
import Card from 'components/Card';
import StudiesIcon, { Study } from 'components/StudiesIcon';
import data from 'data/studies.json';

export default function AboutMe() {
	return (
		<section className={style.container}>

			<div className={style.description}>
				<h2>About Me</h2>
				<p>
					Hello! I&apos;m Pedro Messetti, a passionate and dedicated Software Developer based in Lisbon. With a strong background in Production Engineering, I have practical experience at 42 Lisboa, where I constantly improve my
					problem-solving skills, teamwork, and efficient project delivery. I strive to create impactful and engaging solutions that make a difference.
				</p>
			</div>

			<Card />

			<div className={style.story}>
				<h2>My Journey</h2>
				<p>
					Ever since I was a kid, I&apos;ve been fascinated by technology and how it can be used to solve problems and make people&apos;s lives better. I began coding during college, where I studied C++ and it has captivated me ever since. In 2021, I moved to Portugal and decided to make a career transition. I started learning Python through YouTube, and I became very passionate about the language. Later, I studied Front-End development at Alura, where I learned about HTML, CSS, JS, TS, and frameworks such as React, Angular and Django. Since then, I have been continuously seeking to learn more and have truly fallen in love with programming.
				</p>
				<br />
				<p>
					Currently, I&apos;m studying at 42 Lisboa, one of the top programming schools in the world, and in just 2 months, I have completed 7 major projects in C. Now, I&apos;m actively seeking my first job in the field. I&apos;m a highly dedicated professional who doesn&apos;t rest until I find a solution to the given problem. Communication comes naturally to me, including in English, and I easily adapt to any work environment. I have excellent time management skills and work well in teams. I have a leadership mindset and enjoy organizing my projects to ensure the best possible outcomes.

				</p>
			</div>

			<h2>My Studies</h2>
			<div className={style.studies}>
				{data.map((study: Study) => (
					<StudiesIcon key={study.id} study={study} />
				))}
			</div>

		</section>
	);
}
