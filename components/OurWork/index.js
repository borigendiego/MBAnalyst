import React from 'react';
//Styles
import styles from './ourWork.module.scss';
//Constants
import { DASHBOARDS } from './constants';
//Component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import MyIframe from './MyIframe';
import { Carousel } from 'react-responsive-carousel';
//Framer motion
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const OurWork = () => {
    return (
        <div className={'simple-section-wrapper'} id={'work'}>
            <motion.h2
                className={'section-subtitle'}
                initial={{opacity: 0, y: -30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}
                transition={{duration: 0.7, delay: 1}}
            >OUR WORK</motion.h2>
            <Carousel
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
            >
                {
                    DASHBOARDS.map((dashboard, index) =>
                        <div key={index} style={{height: '100%'}}>
                            <MyIframe url={dashboard.url} id={index}/>
                        </div>)
                }
            </Carousel>
            <p className={styles.text}>
                Are you ready to accelerate your business growth?<br/> Get in touch to
                discover more about what MBAnalyst could do for your business.
            </p>
        </div>
    )
};

export default OurWork;
