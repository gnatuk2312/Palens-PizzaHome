import React from 'react';
import CartButton from './CartButton';

import logo from '../../assets/img/pizza-logo.svg'
import { Route, Switch } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<a href='/' className="header__logo">
					<img width="38" src={logo} alt="Pizza logo" />
					<div>
						<h1>React Pizza</h1>
						<p>самая вкусная пицца во вселенной</p>
					</div>
				</a>
				<Switch>
					<Route path='/cart' />
					<Route component={CartButton} />
				</Switch>
			</div>
		</header>
	);
};

export default Header;