import React from 'react';
//Style
import styles from './explore.module.scss'
import ExploreItem from './exploreItem/ExploreItem';
import { EXPLORE_DATA } from './constants';
//Framer motion
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const Explore = () => {
    return (
        <div className={styles.container}>
            <motion.h1
                className={styles.title}
                initial={{opacity: 0, y: -30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 0.7, delay: 1}}
            >Why choose a BI solution?</motion.h1>
            <motion.div
                className={styles.content}
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 1.5}}
            >
                {EXPLORE_DATA.map((value, index) => <ExploreItem exploreData={value} key={value.text}/>)}
            </motion.div>
        </div>
    )
};

export default Explore
