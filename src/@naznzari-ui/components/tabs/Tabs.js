// Import React
import React from 'react';

// Import Naznzari-UI Module
import Icons from '@naznzari-ui/components/icons';

// Import Material-UI Module
import { makeStyles } from '@material-ui/core/styles';

// Import Other Modules
import clsx from 'clsx';

// Make Styles
const useStyles = makeStyles({
    tabsB: {
        top: 48,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16
    },
    indicator: {
        position: 'absolute',
        bottom  : -8
    }
});

const Index = (props) => {

    // Use Props
    const { tabsBProps } = props;

    // Use Styles
	const classes = useStyles();

    return (
        <div className={clsx(
            'sticky z-10 px-16 bg-white',
            classes.tabsB,
            tabsBProps.classes.tabsB,
        )}>
            <div className='h-40 flex'>
                {tabsBProps.tabs && tabsBProps.tabs.map((tab, index) =>
                    <div
                        key={index}
                        className={clsx('relative flex items-center mr-16')}
                        onClick={tab.handleClick}
                    >
                        {tab.type === 'Icon' &&
                            <div className={clsx(tabsBProps.activeTabValue === tab.tabValue ? 'text-indigo-400' : 'text-gray-700')}>
                                <Icons
                                    icon={tab.icon}
                                    size='large'
                                />
                            </div>
                        }
                        {tab.type === 'Text' &&
                            <div className={clsx(
                                'text-16',
                                tabsBProps.activeTabValue === tab.tabValue ? 'text-indigo-400 font-medium' : 'text-gray-700'
                            )}>
                                {tab.text}
                        </div>
                        }
                        {tabsBProps.activeTabValue === tab.tabValue &&
                            <div className={clsx(
                                classes.indicator,
                                'w-full h-8 rounded bg-indigo-300'
                            )} />
                        }
                    </div>
                )}
            </div>
            <div className='h-8 rounded bg-indigo-50' />
        </div>
    );
};

export default Index;