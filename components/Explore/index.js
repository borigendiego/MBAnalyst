import React from 'react';
//Style
import styles from './explore.module.scss'
import ExploreItem from './exploreItem/ExploreItem';
import { EXPLORE_DATA } from './constants';

const Explore = () => {
    return (
        <div className={styles.container} id={'explore'}>
            <h1 className={styles.title}>Why choose a BI solution?</h1>
            <div className={styles.content}>
                {EXPLORE_DATA.map((value, index) => <ExploreItem exploreData={value} key={value.text}/>)}
            </div>
        </div>
    )
};

export default Explore
