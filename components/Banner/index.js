import React from 'react';
//Style
import styles from './banner.module.scss';
//Image
import Logo from '../../public/assets/images/Transparent-logo.png?webp'
//Framer motion
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'


const Banner = () => {
    return(
        <div
            className={styles.container}
            id={'home'}
        >
            <motion.div
                className={styles.content}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{ once: true }}
                transition={{duration: 0.7, delay: 2}}
            >
                <img alt={'logo'} src={Logo} />
                <motion.div
                    initial={{opacity: 0, x: -30}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{ once: true }}
                    transition={{duration: 0.7, delay: 3}}
                >
                    <h2 className={styles.text}><span className={styles.black_text}>Better</span></h2>
                    <h2 className={styles.text}><span className={styles.black_text}>Data,</span> Better Decisions</h2>
                </motion.div>
            </motion.div>
        </div>
    )
};

export default Banner
