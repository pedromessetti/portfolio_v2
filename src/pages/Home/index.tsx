import React from 'react';

import pedro from 'assets/pedro.png';

import style from './Home.module.scss';
import './writer.css';

import { BiWorld } from 'react-icons/bi';

import TypewriterComponent from 'typewriter-effect';

export default function Home() {

	return (
		<section className={style.home}>
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
			<img src={pedro} alt='Pedro Messetti picture' />
			<h2 className={style.home__profession}>
				<TypewriterComponent
					onInit={(write) => {
						write.pauseFor(5500)
							.typeString('Software Developer')
							.start();
					}}
				/>
			</h2>
		</section>
	);
}
