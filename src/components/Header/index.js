import React from 'react';
//Styles
import '../Header/header.scss';
//Constants
import { MENU_LINKS } from './constants';
//Components
import MobileMenu from './mobile-menu';

const Header = () => {

    return (
        <nav role={'navigation'} className={'header-wrapper'}>
            <ul id={'large-screen-menu'} className={'nav-menu'}>
                {
                    MENU_LINKS.map((link,index) => <a key={index} href={link.linkTo}><li>{link.label}</li></a>)
                }
            </ul>
            <MobileMenu menuItems={MENU_LINKS} />
        </nav>
    )
};

export default Header;