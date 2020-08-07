import React from 'react';
import './ourServices.css';
import '../imagenes/logo.svg'
import OurServicesItem from '../OurServicesItem';

const OurServices = (props) => {
    return (
        <div className={'ourservices-section'}>
            <h1>OUR SERVICES</h1>
            <div className={'container-section'}>
                <OurServicesItem title={'Power BI Cosulting'} text={'We design visually engaging dashboards\n' +
                '                        using Power BI to capture what is critical to\n' +
                '                        your business at a glance.'} id={'box1'}/>
                <OurServicesItem title={'Business Analysis'} text={'We work with process owners to identify key\n' +
                '                        business drivers, set targets and measure\n' +
                '                        performance with the aim of transforming data\n' +
                '                        into valuable information for decision making.'} id={'box2'}/>
                <OurServicesItem title={'Executive reporting'} text={'We develop detailed executive summaries and\n' +
                '                        business cases to support major business\n' +
                '                        decisions.'} id={'box3'}/>
            </div>
        </div>
    )
};

export default OurServices