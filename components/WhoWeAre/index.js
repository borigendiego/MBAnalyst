import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
//Styles
import styles from './whoWeAre.module.scss';
//Images
import icono5 from '../../public/assets/images/icono_5.png?webp';
import icono4 from '../../public/assets/images/icono_4.png?webp';
import image4 from '../../public/assets/images/image4.jpg?webp';
import image3 from '../../public/assets/images/image3.jpg?webp'
//Framer motion
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const WhoWeAre = () => {
    const [isElement1Visible, setIsElement1Visible1] = useState(false);
    const [isElement2Visible, setIsElement2Visible2] = useState(false);
    const onChangeVisibility1 = (isVisible) => isVisible ? setIsElement1Visible1(true) : setIsElement1Visible1(false);
    const onChangeVisibility2 = (isVisible) => isVisible ? setIsElement2Visible2(true) : setIsElement2Visible2(false);

    return (
        <div className={styles.container}>
            <div className={`${styles.first_section} ${styles.section}`}>
                <div className={styles.first_overlay}/>
                <motion.h1
                    initial={{opacity: 0, y: -30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, delay: 1}}
                >WHO WE ARE</motion.h1>
                <motion.p
                    className={styles.text}
                    initial={{opacity: 0, x: -30}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, delay: 1.5}}
                >   We are committed to helping businesses make better
                    decisions using data. Our expert team will become your trusted adviser on everything data
                    combining passion, knowledge and experience to transform the way your business deals with data.
                </motion.p>
            </div>
            <VisibilitySensor onChange={onChangeVisibility1}>
                <div className={`${isElement1Visible ? `${styles.section_icon} ${styles.section} visibleClass` : `${styles.section_icon} ${styles.section}`}`}>
                    <div className={styles.section_logo}>
                        <img alt={'logo4'} src={icono4} className={styles.logo_one}/>
                        <p className={styles.paragraph}>We provide end to end BI services tailored
                            to fit your company’s individual needs.</p>
                    </div>
                    <img alt={'image4'} src={image4} className={styles.image_one}/>
                </div>
            </VisibilitySensor>
            <VisibilitySensor onChange={onChangeVisibility2}>
                <div className={`${isElement2Visible ? `${styles.section_icon} ${styles.section} visibleClass` : `${styles.section_icon} ${styles.section}`}`}>
                    <img alt={'image3'} src={image3} className={styles.image_two}/>
                    <div className={styles.section_logo}>
                        <img alt={'logo5'} src={icono5} className={styles.logo_two}/>
                        <p className={styles.paragraph}>We are a boutique data analytics
                            consulting firm based in Melbourne, Australia with extensive experience working
                            remotely in data projects around the world.</p>
                    </div>
                </div>
            </VisibilitySensor>
        </div>
    )
};

export default WhoWeAre
