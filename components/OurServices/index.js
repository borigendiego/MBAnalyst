import React from 'react';
import styles from './ourServices.module.scss';
import OurServicesItem from '../OurServicesItem';
import { SERVICES_DATA } from "./constants";

const OurServices = () => {
    return (
        <div className={'simple-section-wrapper'} id={'services'}>
            <h2 className={'section-subtitle'}>OUR SERVICES</h2>
            <div className={styles.container}>
                {SERVICES_DATA.map((value, index) => <OurServicesItem servicesData={value} key={value.title}/>)}
            </div>
        </div>
    )
};

export default OurServices;
