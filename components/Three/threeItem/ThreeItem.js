import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import styles from '../three.module.scss';

const ThreeItem = ({threeData}) => {
    const [isElementVisible, setIsElementVisible] = useState(false);
    const onChangeVisibility = (isVisible) => isVisible ? setIsElementVisible(true) : setIsElementVisible(false);


    const {id, image, text} = threeData;

    return(
        <VisibilitySensor onChange={onChangeVisibility}>
            <div className={`${id === 'black-box' ? `${styles.logo_container} ${styles.black_box}`  : `${styles.logo_container}`}`}>
                <img alt={'logo'} src={image} className={styles.logo} id={id}/>
                <div className={styles.arrow} id={id} />
                <div className={styles.text_container}>
                    <p className={styles.text}>{text}</p>
                </div>
            </div>
        </VisibilitySensor>
    )
};

export default ThreeItem;