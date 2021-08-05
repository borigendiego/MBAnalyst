import React from 'react';
import ThreeItem from './threeItem/ThreeItem';
import styles from './three.module.scss';
import { THREE_DATA } from './constants';


const Three = () => {
    return(
        <div className={styles.section}>
            {THREE_DATA.map((value, index) => <ThreeItem  threeData={value} key={value.text}/>)}
        </div>
    )
};

export default Three;