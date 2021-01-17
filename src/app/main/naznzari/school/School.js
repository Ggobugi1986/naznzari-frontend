// Import React Module
import React, { useEffect, useRef, useState } from 'react';
// Import Naznzari-UI Module
import TabsB from '@naznzari-ui/components/tabs';



// Import Naznzari-UI Module
import PageA from '@naznzari-ui/pages/pageA';

// Import Material-UI Module
import { makeStyles } from '@material-ui/core/styles';

// Import React-Redux Module and Related Modules
import { useDispatch } from 'react-redux';

// Import Other Modules
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Make Styles
const useStyles = makeStyles({

});

const Index = (props) => {

	// Use Props
    const { studyClassId } = props.match.params;

    // Use Dispatch
	const dispatch = useDispatch();

    // Use History
    const history = useHistory();

    // Use Ref
    const ref = useRef(null);

    // Use Styles
	const classes = useStyles();

    // Use State
    const [activeTabValue, setActiveTabValue] = useState(1);
    const [studyClassData, setstudyClassData] = useState({});

   // Set Naznzari-UI Props
    const coverImageProps = {
        imageUrl: studyClassData.studyClassCoverImage
    };

    const headerProps = {
        themeColor  : 'indigo',
        classes     : classes,
        breadcrumbs : [
            {
                type: 'Link',
                text: '언어',
                link: '/study/lesson'
            },
            {
                type: 'Link',
                text: '고대 언어',
                link: '/study/lesson'
            },
            {
                type: 'Text',
                text: '헬라어'
            }
        ],
        title       : studyClassData.studyClassTitle,
        description : studyClassData.studyClassSubtitle,
        actionButton: {
            icon       : 'FiHeart',
            handleClick: () => {}
        }
    };

    const tabsBProps = {
        themeColor    : 'indigo',
        classes       : classes,
        activeTabValue: activeTabValue,
        tabs          : [
            {
                type       : 'Text',
                text       : '학교 소개',
                tabValue   : 1,
                handleClick: () => {
                    setActiveTabValue(1);
                    ref.current.scrollTop = 318;
                }
            },
            {
                type       : 'Text',
                text       : '학교 과정',
                tabValue   : 2,
                handleClick: () => {
                    setActiveTabValue(2);
                    ref.current.scrollTop = 318;
                }
            },
            {
                type       : 'Text',
                text       : '학교 강의',
                tabValue   : 2,
                handleClick: () => {
                    setActiveTabValue(2);
                    ref.current.scrollTop = 318;
                }
            },
        ]
    };

    const listBProps = {
        themeColor  : 'indigo',
        classes     : classes,
        borderBottom: false,
        listItems   : [
            {
                icon         : 'FiHeart',
                primaryText  : '이 강좌 수강하기',
                secondaryText: '이 강좌를 수강합니다',
                textDirection: 'column',
                handleClick  : () => {}
            },
            {
                icon         : 'FiBookmark',
                primaryText  : '이 강좌 즐겨찾기',
                secondaryText: '이 강좌를 즐겨찾기합니다',
                textDirection: 'column',
                handleClick  : () => {}
            },
            {
                icon         : 'FiShare',
                primaryText  : '이 강좌 공유하기',
                secondaryText: '이 강좌를 공유합니다',
                textDirection: 'column',
                handleClick  : () => {}
            },
            {
                icon         : 'FiSettings',
                primaryText  : '강좌 관리',
                secondaryText: '이 강좌를 관리합니다',
                textDirection: 'column',
                handleClick  : () => history.push(`/study/class-admin/${studyClassId}`)
            }
        ]
    };

    const setTabContent = () => {

        return (
            <>
                {activeTabValue === 1 && <div />}
                {activeTabValue === 2 && <div />}
            </>
        )
    };


    return (
        <div className="h-full">
            <TabsB tabsBProps={tabsBProps} />
            <div className='p-16'>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            <div>Test</div>
            </div>
        </div>
    );
};

export default Index;
