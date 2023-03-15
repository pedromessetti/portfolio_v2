/* eslint-disable @typescript-eslint/no-var-requires */
import StudiesDesc from 'components/StudiesDesc';
import React, { useState } from 'react';

import style from './StudiesLogo.module.scss';

import IStudies from 'types/IStudies';
import classNames from 'classnames';

export default function StudiesLogo(props: IStudies) {

	const [canShow, setCanShow] = useState(false);

	const handleClick = () => {
		props.setAddMargin(!props.addMargin);
		setCanShow(!canShow);
	};

	return (
		<>
			<div onClick={() => handleClick()}
				className={classNames({
					[style.container]: true,
					[style.container__active]: canShow
				})}
			>
				<img src={require(`assets/logos/${props.photo}`)} alt={`${props.name} Logo`} />
				<p>{props.name}</p>
			</div>
			{canShow ? <StudiesDesc {...props} /> : null}
		</>
	);
}
