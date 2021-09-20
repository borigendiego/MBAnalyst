import React from 'react';
import Link from 'next/link';
//Style
import styles from './banner.module.scss';
//Image
import Logo from '../../public/assets/images/Transparent-logo.png?webp'

const Banner = () => {
    return(
        <div className={styles.container} id={'home'}>
            <div className={styles.content}>
                <img alt={'logo'} src={Logo}/>
                <div>
                    <h2 className={styles.text}><span className={styles.black_text}>Better</span></h2>
                    <h2 className={styles.text}><span className={styles.black_text}>Data,</span> Better Decisions</h2>
                    <Link href={'#contact'}>
                        <button className={styles.button}>Make your free consultation now!</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Banner
