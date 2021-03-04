import React from 'react';

import './Header.scss';
import Gameloft from '../svg/gameloft';
import Hamburger from '../svg/hamburger';

export default function Header() {
	return (
		<div className="header">
			<Gameloft />
			<Hamburger />
		</div>
	);
}
