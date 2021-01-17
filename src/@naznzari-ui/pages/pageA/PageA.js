// Import React Module
import React, { forwardRef, useState } from 'react';

// Import Naznzari-UI Module
import TabsB from '@naznzari-ui/components/tabs';

// Import Material-UI Module
import { makeStyles } from '@material-ui/core/styles';

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

const Index = forwardRef((props, ref) => {
	// Use Props
	const { pageBProps } = props;

	// Use Styles
	const classes = useStyles();

	// Use State
	const [scrollPosition, setScrollPosition] = useState(0);

	// Set Variables
	const pageBPropsEdited = {
		...pageBProps.headerProps,
		classes: classes
	};

	// Set Functions
	const handleScroll = event => {
		setScrollPosition(event.target.scrollTop);
	};

	return (
		<div ref={ref} className={classes.root} onScroll={handleScroll}>
			{/* Cover Image */}
			<div
				className={clsx(classes.coverImage)}
				style={{
					backgroundImage: `url('${pageBProps.coverImageProps.imageUrl}')`,
					backgroundSize: 'cover'
				}}
			>
				<div className="absolute top-0 right-0 bottom-0 left-0 bg-indigo-300 opacity-50" />
			</div>
			{/* Cover Image */}

			{/* Background Paper */}
			<div className={clsx(classes.backgroundPaper, scrollPosition >= 80 ? 'bg-white' : 'bg-indigo-300')} />
			{/* Background Paper */}

			{/* Virtual Box */}
			<div className="relative h-160" />
			{/* Virtual Box */}

			{/* Paper */}
			<div className={clsx(classes.borderTopRadius16, 'relative bg-indigo-300')}>
				{/* Mask */}
				<div className={clsx(classes.mask, 'bg-indigo-300')} />
				{/* Mask */}

				{/* Paper Bar */}
				<div className={clsx(classes.borderTopRadius16, 'relative h-48 flex items-center px-16')}>
					<div className="flex-grow">
						<div className="text-16 text-white">아마존 웹 서비스 학교</div>
					</div>
				</div>
				{/* Paper Bar */}

				{/* Paper Content */}
				<div className={clsx(classes.borderTopRadius16, 'relative bg-white')}>
					{/* Header */}
					{/*<Header headerProps={pageBPropsEdited} />*/}
					{/* Header */}

					{/* Tabs */}
					<TabsB tabsBProps={pageBProps.tabsBProps} />
					{/* Tabs */}

					<div className="min-h-screen flex flex-col">{pageBProps.setTabContent()}</div>
				</div>
				{/* Paper Content */}
			</div>
			{/* Paper */}
		</div>
	);
});

export default Index;
