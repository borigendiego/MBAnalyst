import React, { useState } from 'react';
//css
import styles from './yourData.module.scss';
//Images
import FirstIconWhite from '../../public/assets/icons/icono_11_dif.png';
import SecondIconWhite from '../../public/assets/icons/icono_12_dif.png'
import ThirdIconWhite from '../../public/assets/icons/icono_13_dif.png'
import FirstIconOrange from '../../public/assets/icons/icono_11.png'
import SecondIconOrange from '../../public/assets/icons/icono_12.png'
import ThirdIconOrange from '../../public/assets/icons/icono_13.png'
import Image from '../../public/assets/images/image5.jpg'

const YourData = () => {
    const [isLeftHover, setIsLeftHover] = useState(false);
    const [isTopHover, setIsTopHover] = useState(false);
    const [isBottomHover, setIsBottomHover] = useState(false);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>EXPLORE YOUR DATA</h1>
            <div className={styles.content}>
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
            </div>
        </div>
    )
};

export default YourData;