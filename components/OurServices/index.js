import React from 'react';
import styles from './ourServices.module.scss';
import OurServicesItem from '../OurServicesItem';
import { SERVICES_DATA } from "./constants";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const OurServices = () => {
    return (
        <div className={'simple-section-wrapper'} id={'services'}>
            <motion.h2
                className={'section-subtitle'}
                initial={{opacity: 0, y: -30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 0.7, delay: 1}}
            >OUR SERVICES</motion.h2>
            <motion.div
                className={styles.container}
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 1.5}}
            >
                {SERVICES_DATA.map((value, index) => <OurServicesItem servicesData={value} key={value.title}/>)}
            </motion.div>
        </div>
    )
};

export default OurServices;
