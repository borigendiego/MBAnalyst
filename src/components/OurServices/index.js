import React from 'react';
import './ourServices.scss';
import '../imagenes/logo.svg';
import OurServicesItem from '../OurServicesItem';
import icono1 from '../imagenes/icono_1.png'
import icono2 from '../imagenes/icono_2.png'
import icono3 from '../imagenes/icono_3.png'

const OurServices = (props) => {
    return (
        <div className={'ourservices-section'} id={'services'}>
            <h1 className={'our-services-title section-subtitle'}>OUR SERVICES</h1>
            <div className={'container-section'}>
                <OurServicesItem
                    id={'box1'}
                    image={icono1}
                    title={'Power BI Cosulting'}
                    text={'We design visually engaging dashboards using Power BI to capture what is critical to your' +
                    ' business at a glance.'}
                />
                <OurServicesItem
                    id={'box2'}
                    image={icono2}
                    title={'Business Analysis'}
                    text={'We work with process owners to identify key business drivers, set targets and measure' +
                    ' performance with the aim of transforming data into valuable information for decision making.'}

                />
                <OurServicesItem
                    id={'box3'}
                    image={icono3}
                    title={'Executive reporting'}
                    text={'We develop detailed executive summaries and business cases to support major business' +
                    ' decisions.'}
                />
            </div>
        </div>
    )
};

export default OurServices