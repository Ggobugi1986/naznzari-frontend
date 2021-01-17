// Import React Module
import React from 'react';

// Import Naznzari-UI Module
import Icons from '@naznzari-ui/components/icons';

// Import Material-UI Module
import { makeStyles } from '@material-ui/core/styles';

// Import Other Modules
import clsx from 'clsx';
import { Link } from 'react-router-dom';

// Make Style
const useStyles = makeStyles({
    header: {
        height: 110
    }
});

const Index = (props) => {

    // Set Props
    const { headerProps } = props;

    // Set Style
    const classes = useStyles();

    return (
        <div className={clsx(
            'z-20 relative bg-white',
            classes.header,
            headerProps.classes.header
        )}>
            <div className='flex p-8'>
                <div className='flex-grow p-8'>
                    <div className='flex mb-4'>
                        {headerProps.breadcrumbs.map((breadcrumb, index) =>
                            <div
                                key={index}
                                className='flex items-center'
                            >
                                {breadcrumb.type === 'Link' &&
                                    <Link to={breadcrumb.link}>
                                        <div className='text-14 text-indigo-400'>
                                            {breadcrumb.text}
                                        </div>
                                    </Link>
                                }
                                {breadcrumb.type === 'Text' &&
                                    <div className='text-14 text-gray-500'>
                                        {breadcrumb.text}
                                    </div>
                                }
                                {headerProps.breadcrumbs.length > index + 1 &&
                                    <Icons
                                        icon='FiChevronRight'
                                        className='w-16 h-16 text-gray-500'
                                    />
                                }
                            </div>
                        )}
                    </div>
                    <div className='mb-8'>
                        <div className='text-18 font-medium'>
                            {headerProps.title}
                        </div>
                    </div>
                    {headerProps.description &&
                        <div className='text-16 text-gray-500'>
                            {headerProps.description}
                        </div>
                    }
                </div>
                {headerProps.actionButton &&
                    <div
                        className='w-40 h-40 flex-shrink-0 flex items-center justify-center'
                        onClick={headerProps.actionButton.handleClick}
                    >
                        <Icons
                            icon={headerProps.actionButton.icon}
                            size='large'
                            className='text-indigo-400'
                        />
                    </div>
                }
            </div>
        </div>
    );
};

export default Index;