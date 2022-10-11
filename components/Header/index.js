import React from 'react';
//Styles
import styles from './header.module.scss';
//Constants
import { MENU_LINKS } from './constants';
//Components
import MobileMenu from './mobile-menu';
//Framer motion
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

const Header = () => {

    if (process.browser) {
        // Client-side-only code
        const stickyFunction = () => window.addEventListener('scroll', function() {
            let navigation = document.querySelector('nav');

            if (navigation) {
                navigation.classList.toggle('sticky', window.scrollY > 0);
            }
        })
        stickyFunction();
    }

    return (
        <motion.nav
            role={'navigation'}
            className={`${styles.container} header-wrapper`}
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{ once: true }}
            transition={{duration: 0.7}}
        >
            <ul id={'large-screen-menu'} className={styles.menu}>
                {
                    MENU_LINKS.map((link,index) =>
                        <motion.a
                            key={index}
                            href={link.linkTo}
                            className={`${styles.navItem}`}
                            initial={{opacity: 0, x: -30}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.7, delay: 1}}
                        ><li>{link.label}</li></motion.a>
                    )
                }
            </ul>
            <MobileMenu menuItems={MENU_LINKS} />
        </motion.nav>
    )
};

export default Header;
