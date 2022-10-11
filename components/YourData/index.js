import React, { useState } from 'react';
//css
import styles from './yourData.module.scss';
//Framer motion
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
//Images
import FirstIconWhite from '../../public/assets/icons/icono_11_dif.png?webp';
import SecondIconWhite from '../../public/assets/icons/icono_12_dif.png?webp';
import ThirdIconWhite from '../../public/assets/icons/icono_13_dif.png?webp';
import FirstIconOrange from '../../public/assets/icons/icono_11.png?webp';
import SecondIconOrange from '../../public/assets/icons/icono_12.png?webp';
import ThirdIconOrange from '../../public/assets/icons/icono_13.png?webp';
import Image from '../../public/assets/images/image5.jpg?webp';

const YourData = () => {
    const [isLeftHover, setIsLeftHover] = useState(false);
    const [isTopHover, setIsTopHover] = useState(false);
    const [isBottomHover, setIsBottomHover] = useState(false);

    return (
        <div className={styles.container}>
            <motion.h1
                className={styles.title}
                initial={{opacity: 0, y: -30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 0.7, delay: 1}}
            >EXPLORE YOUR DATA</motion.h1>
            <motion.div
                className={styles.content}
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 1.5}}
            >
                <div className={styles.items_wrapper}>
                    <div
                        className={`${isTopHover ? `${styles.item} ${styles.hover_element}` : `${styles.item}`}`}
                        onMouseEnter={() => setIsTopHover(true)}
                        onMouseLeave={() => setIsTopHover(false)}
                    >
                        <img alt={'top-icon'} src={FirstIconOrange} />
                        <p className={styles.text}>Say goodbye to clunky spreadsheets,
                            static views and manually compiled reports prone to human error</p>
                    </div>
                    <div
                        className={`${isLeftHover ? `${styles.item} ${styles.hover_element}` : `${styles.item}`}`}
                        onMouseEnter={() => setIsLeftHover(true)}
                        onMouseLeave={() => setIsLeftHover(false)}
                    >
                        <img alt={'left-icon'} src={SecondIconOrange} />
                        <p className={styles.text}>Discover powerful insights within your existing data to
                            identify areas of improvement, streamline operations and make evidence-based decisions. </p>
                    </div>
                    <div
                        className={`${isBottomHover ? `${styles.item} ${styles.hover_element}` : `${styles.item}`}`}
                        onMouseEnter={() => setIsBottomHover(true)}
                        onMouseLeave={() => setIsBottomHover(false)}
                    >
                        <img alt={'bottom-icon'} src={ThirdIconOrange} />
                        <p className={styles.text}>Get a BI solution tailored to your business needs to
                            transform your data into actionable intelligence in the most efficient
                            and sustainable way.</p>
                    </div>
                </div>
                <div className={styles.rhombus_container}>
                    <div
                        className={`${isLeftHover ? `${styles.rhombus} ${styles.left} ${styles.rhombus_hover}` : `${styles.rhombus} ${styles.left}`}`}
                        onMouseEnter={() => setIsLeftHover(true)}
                        onMouseLeave={() => setIsLeftHover(false)}
                    >
                        <img src={SecondIconWhite} alt={'left-icon'} className={styles.icon}/>
                    </div>
                    <div
                        className={`${isTopHover ? `${styles.rhombus} ${styles.top} ${styles.rhombus_hover}` : `${styles.rhombus} ${styles.top}`}`}
                        onMouseEnter={() => setIsTopHover(true)}
                        onMouseLeave={() => setIsTopHover(false)}
                    >
                        <img src={FirstIconWhite} alt={'top-icon'} className={styles.icon}/>
                    </div>
                    <div className={`${styles.rhombus} ${styles.right}`}>
                        <img src={Image} alt={'right'} className={styles.image} />
                    </div>
                    <div
                        className={`${isBottomHover ? `${styles.rhombus} ${styles.bottom} ${styles.rhombus_hover}` : `${styles.rhombus} ${styles.bottom}`}`}
                        onMouseEnter={() => setIsBottomHover(true)}
                        onMouseLeave={() => setIsBottomHover(false)}
                    >
                        <img src={ThirdIconWhite} alt={'fourth-icon'} className={styles.icon}/>
                    </div>
                </div>
            </motion.div>
        </div>
    )
};

export default YourData;
