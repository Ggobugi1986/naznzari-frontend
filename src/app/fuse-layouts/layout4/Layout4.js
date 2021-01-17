// Import React Module
import React, { useContext, useState } from 'react';

// Import Naznzari-UI Module
import Icons from '@naznzari-ui/components/icons';

// Import Material-UI Module
import { makeStyles } from '@material-ui/core/styles';

import AppContext from 'app/AppContext';
import FuseSuspense from '@fuse/core/FuseSuspense';
import { renderRoutes } from 'react-router-config';

// Import Other Modules
import clsx from 'clsx';

// Make Styles
const useStyles = makeStyles({
	root: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		overflow: 'scroll'
	},
	coverImage: {
		zIndex: -10,
		position: 'fixed',
		top: 0,
		right: 0,
		left: 0,
		height: 176
	},
	backgroundPaper: {
		zIndex: -10,
		position: 'fixed',
		top: 160,
		right: 0,
		bottom: 0,
		left: 0,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16
	},
	borderTopRadius16: {
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16
	},
	mask: {
		position: 'absolute',
		top: 0,
		right: 16,
		left: 16,
		height: 1
	},
	header: {
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16
	}
});

const Layout4 = () => {
	const appContext = useContext(AppContext);
	const { routes } = appContext;

	// Use Styles
	const classes = useStyles();

	// Use State
	const [scrollPosition, setScrollPosition] = useState(0);
	console.log(scrollPosition);

	// Set Functions
	const handleScroll = event => {
		setScrollPosition(event.target.scrollTop);
	};

	return (
		<div className={classes.root} onScroll={handleScroll}>
			<div>
				<div
					className={clsx(classes.coverImage)}
					style={{
						backgroundImage: 'url(/assets/images/demo-content/computer.png)',
						backgroundSize: 'cover'
					}}
				>
					<div className="absolute top-0 right-0 bottom-0 left-0" />
				</div>

				<div className="h-160" />

				<div className={clsx(classes.borderTopRadius16, 'relative h-full bg-indigo-300')}>
					<div className={clsx(scrollPosition < 160 && classes.borderTopRadius16, 'sticky top-0 h-48 flex items-center justify-center bg-indigo-300 z-50')}>
						<div className="w-56 h-48 flex items-center justify-center">
							<Icons icon="FiHome" size="large" className="text-white" />
						</div>
						<div className="flex-grow flex justify-center text-16 text-white font-medium">
							아마존 웹 서비스 학교
						</div>
						<div className="w-56 h-48 flex items-center justify-center">
							<Icons icon="FiMenu" size="large" className="text-white" />
						</div>
					</div>

					{/* Paper Content */}
					<div className={clsx(classes.borderTopRadius16, 'relative h-full bg-white')}>
						<FuseSuspense>{renderRoutes(routes)}</FuseSuspense>
					</div>
					{/* Paper Content */}
				</div>
			</div>
		</div>
	);
};

export default Layout4;
