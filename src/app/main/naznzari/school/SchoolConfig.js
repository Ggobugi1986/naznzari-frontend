import React from 'react';

const SchoolConfig = {
	settings: {
		layout: {}
	},
	routes: [
		{
			path: '/school',
			component: React.lazy(() => import('.'))
		}
	]
};

export default SchoolConfig;
