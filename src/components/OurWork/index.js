import React from 'react';
import './our-work.scss';
//Component
import Iframe from 'react-iframe';

const OurWork = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <Iframe url="https://app.powerbi.com/view?r=eyJrIjoiMTZlNGRhNGQtYWVjNi00NGZiLWE2NjctMmExY2MxNWU2NzU5IiwidCI6IjJkMWE2YjZkLWY5M2UtNDJlYy04YzQyLThkYWE5NDAzZDBkOCJ9&pageName=ReportSection1"
                    width="100%"
                    height="100%"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
        </div>
    )
};

export default OurWork;