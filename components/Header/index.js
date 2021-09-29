import React from 'react';
//Styles
import styles from './header.module.scss';
//Constants
import { MENU_LINKS } from './constants';
//Components
import MobileMenu from './mobile-menu';

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
        <nav role={'navigation'} className={`${styles.container} header-wrapper` }>
            <ul id={'large-screen-menu'} className={styles.menu}>
                {
                    MENU_LINKS.map((link,index) =>
                        <a key={index} href={link.linkTo}><li className={styles.element}>{link.label}</li></a>
                    )
                }
            </ul>
            <MobileMenu menuItems={MENU_LINKS} />
        </nav>
    )
};

export default Header;
