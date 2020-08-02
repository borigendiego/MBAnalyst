import React from "react";
import './ourServices.css';
import '../imagenes/logo.svg'

const OurServices = (props) => {
    return (
        <div className={'ourservices-section'}>
            <h1>OUR SERVICES</h1>
            <div className={'container-section'}>
                <div className={'ourservices-container'} id={'box1'}>
                    <h3 className={'ourservices-title'}>Power BI Cosulting</h3>
                    <p className={'ourservices-text'}>We design visually engaging dashboards
                        using Power BI to capture what is critical to
                        your business at a glance.</p>
                </div>
                <div className={'ourservices-container'} id={'box2'}>
                    <h3 className={'ourservices-title'}>Business Analysis</h3>
                    <p className={'ourservices-text'}>We work with process owners to identify key
                        business drivers, set targets and measure
                        performance with the aim of transforming data
                        into valuable information for decision making.
                    </p>
                </div>
                <div className={'ourservices-container'} id={'box3'}>
                    <h3 className={'ourservices-title'}>Executive reporting</h3>
                    <p className={'ourservices-text'}>We develop detailed executive summaries and
                        business cases to support major business
                        decisions.</p>
                </div>
            </div>
        </div>
    )
};

export default OurServices