import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import styles from '../OurServices/ourServices.module.scss';

const OurServicesItem = ({servicesData}) => {
    const [isElementVisible, setIsElementVisible] = useState(false);
    const onChangeVisibility = (isVisible) => isVisible ? setIsElementVisible(true) : setIsElementVisible(false);

    const {image, title, text, id} = servicesData;

    return (
        <VisibilitySensor onChange={onChangeVisibility}>
            <div id={id} className={`${isElementVisible ? `${styles.item} visibleClass` : `${styles.item}`}`}>
                <div className={styles.item_image} style={{backgroundImage:`url(${image})`}}/>
                <h3 className={styles.item_title}>{title}</h3>
                <div className={styles.item_description}>
                    <p className={styles.item_text}>{text}</p>
                </div>
            </div>
        </VisibilitySensor>
    )
};

export default OurServicesItem