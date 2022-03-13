import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<Switch>
				<Route path='/cart' component={Cart} />
				<Route component={Home} />
			</Switch>
		</div>
	);
}

export default App;
