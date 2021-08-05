import React, {useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import styles from '../explore.module.scss';

const ExploreItem = ({exploreData}) => {
    const [isElementVisible, setIsElementVisible] = useState(false);
    const onChangeVisibility = (isVisible) => isVisible ? setIsElementVisible(true) : setIsElementVisible(false);

    const {image, text} = exploreData;

    return (
        <VisibilitySensor onChange={onChangeVisibility}>
            <div className={`${isElementVisible ? `${styles.item} visibleClass` : `${styles.item}`}`}>
                <div className={styles.hexagon}>
                    <img src={image} alt={'logo'} className={styles.logo}/>
                </div>
                <p className={styles.text}>{text}</p>
            </div>
        </VisibilitySensor>
    )
};

export default ExploreItem