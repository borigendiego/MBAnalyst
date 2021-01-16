import React from 'react';
import './ourServices.scss';
import '../imagenes/logo.svg';
import OurServicesItem from '../OurServicesItem';
import icono1 from '../imagenes/icono_1.png'
import icono2 from '../imagenes/icono_2.png'
import icono3 from '../imagenes/icono_3.png'

const OurServices = () => {
    return (
        <div className={'simple-section-wrapper'} id={'services'}>
            <h2 className={'section-subtitle'}>OUR SERVICES</h2>
            <div className={'container-section'}>
                <OurServicesItem
                    id={'box1'}
                    image={icono1}
                    title={'Power BI Consulting'}
                    text={'We work with Power BI to create powerful automated reports' +
                    ' to visualise your business data, capture key insights in real time and improve decision making. ' +
                    'As a best-in-class BI platform, Power BI allows you to connect to data stored in multiple sources' +
                    ' and share and collaborate among your team members, ensuring your data has the maximum impact.'}
                />
                <OurServicesItem
                    id={'box2'}
                    image={icono2}
                    title={'Business Analysis'}
                    text={'We use our wealth of experience in BI and commercial acumen to help your' +
                    ' business identify and understand its key performance drivers, set meaningful targets,' +
                    ' solve problems with data and support major business decisions, working closely with process' +
                    ' owners to make the most of your data.'}

                />
                <OurServicesItem
                    id={'box3'}
                    image={icono3}
                    title={'BI support'}
                    text={'We offer end-to-end support to companies already operating a Power BI solution,' +
                    ' expert consultancy on Power BI best practices and training sessions allowing your business' +
                    ' to realise its full BI potential.'}
                />
            </div>
        </div>
    )
};

export default OurServices