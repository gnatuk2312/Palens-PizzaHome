import React from 'react';
import Pizza from '../components/Pizza';
import Filters from '../components/Filters';

const Page = () => {
	return (
		<div className="content">
			<div className="container">
				<Filters />
				<h2 className="content__title">Все пиццы</h2>
				<div className="content__items">
					<Pizza />
					<Pizza />
					<Pizza />
					<Pizza />
					<Pizza />
					<Pizza />
					<Pizza />
					<Pizza />
					<Pizza />
				</div>
			</div>
		</div>
	);
};

export default Page;