import React from 'react';

//Style import
import style from './Card.module.scss';

import pic from 'assets/foto.jpg';

//Icons import
import { MdEmail, MdPhone } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';


export default function Card() {
	return (
		<div className={style.card}>
			<h3>Pedro Vinicius Messetti</h3>
			<div className={style.card__imagecontainer}>
				<img src={pic} alt="Pedro Messetti picture" />
			</div>
			<div className={style.card__container}>
				<div className={style.text__age}>
					<strong>Age:</strong> 23 years
				</div>
				<div className={style.text__location}>
					<strong>From:</strong> Rio de Janeiro, RJ - Brasil
				</div>
				<div className={style.text__location}>
					<strong>Living in:</strong> Oeiras, Lisboa - Portugal
				</div>
				<div className={style.icons}>
					<a href='mailto:pedromessetti@gmail.com' target='_blank' rel='noreferrer'><MdEmail className={style.card__icons__email} /></a>
					<a href='tel:+351 924 686 213'><MdPhone className={style.card__icons__phone} /></a>
					<a href='https://www.linkedin.com/in/pedro-messetti/' target='_blank' rel='noreferrer'><BsLinkedin className={style.card__icons__linkedin} /></a>
				</div>
			</div>
		</div>
	);
}
