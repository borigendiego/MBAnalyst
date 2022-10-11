import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import styles from '../three.module.scss';
//Framer motion
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const ThreeItem = ({threeData}) => {
    const [isElementVisible, setIsElementVisible] = useState(false);
    const onChangeVisibility = (isVisible) => isVisible ? setIsElementVisible(true) : setIsElementVisible(false);


    const {id, image, text} = threeData;

    return(
        <VisibilitySensor onChange={onChangeVisibility}>
            <motion.div
                className={`${id === 'black-box' ? `${styles.logo_container} ${styles.black_box}`  : `${styles.logo_container}`}`}
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 1}}
            >
                <img alt={'logo'} src={image} className={styles.logo} id={id}/>
                <div className={styles.arrow} id={id} />
                <div className={styles.text_container}>
                    <p className={styles.text}>{text}</p>
                </div>
            </motion.div>
        </VisibilitySensor>
    )
};

export default ThreeItem;