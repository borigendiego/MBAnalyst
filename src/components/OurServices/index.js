import React from 'react';
import './ourServices.css';
import '../imagenes/logo.svg';
import OurServicesItem from '../OurServicesItem';
import icono1 from '../imagenes/icono_1.png'
import icono2 from '../imagenes/icono_2.png'
import icono3 from '../imagenes/icono_3.png'

const OurServices = (props) => {
    return (
        <div className={'ourservices-section'}>
            <h1 className={'ourservices-title'}>OUR SERVICES</h1>
            <div className={'container-section'}>
                <OurServicesItem image={icono1} title={'Power BI Cosulting'} text={'We design visually engaging dashboards\n' +
                '                        using Power BI to capture what is critical to\n' +
                '                        your business at a glance.'} id={'box1'}/>
                <OurServicesItem image={icono2} title={'Business Analysis'} text={'We work with process owners to identify key\n' +
                '                        business drivers, set targets and measure\n' +
                '                        performance with the aim of transforming data\n' +
                '                        into valuable information for decision making.'} id={'box2'}/>
                <OurServicesItem image={icono3} title={'Executive reporting'} text={'We develop detailed executive summaries and\n' +
                '                        business cases to support major business\n' +
                '                        decisions.'} id={'box3'}/>
            </div>
        </div>
    )
};

export default OurServices