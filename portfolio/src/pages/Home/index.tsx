import React from 'react';

import pedro from 'assets/pedro.png';

import style from './Home.module.scss';
import './writer.css';

import { BiWorld } from 'react-icons/bi';
import { RxDoubleArrowUp } from 'react-icons/rx';

import TypewriterComponent from 'typewriter-effect';

export default function Home() {

	return (
		<section className={style.home}>
			<p className={style.home__suggestion}><RxDoubleArrowUp />Browse through the options to get to know me a little better</p>
			<h2 className={style.home__hello}>
				<TypewriterComponent
					onInit={(write) => {
						write.typeString('Hello World !')
							.start(); 
					}}
				/>
				<BiWorld />
			</h2>
			<h3 className={style.home__name}>
				<TypewriterComponent
					onInit={(write) => {
						write.pauseFor(2000)
							.typeString('I am <strong>Pedro Messetti</strong>')
							.start();
					}}
				/>
			</h3>
			<img src={pedro} alt='Pedro Messetti floating picture' />
			<h2 className={style.home__profession}>
				<TypewriterComponent
					onInit={(write) => {
						write.pauseFor(5500)
							.typeString('Front-End Developer')
							.pauseFor(1500)
							.deleteAll(100)
							.typeString('Back-End Developer')
							.pauseFor(1500)
							.deleteAll(100)
							.typeString('Full-Stack Developer')
							.start();
					}}
				/>
			</h2>
		</section>
	);
}
