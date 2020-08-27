import React from 'react';
import './our-work.scss';
//Component
import YourData from './YourData';

const OurWork = (props) => {
    return (
        <div>
            <div className={'section-ourwork'}>
                <h2>{props.title}</h2>

            </div>
            <YourData />
        </div>
    )
};

export default OurWork;