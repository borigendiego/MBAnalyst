import React from 'react';
//Style
import style from './mobileMenu.module.scss';

const MobileMenu = (props) => {
    const { menuItems } = props;

    return (
        <div className={style.menuToggle}>
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id={'menu'}>
                {
                    menuItems.map((link,index) => <a key={index} href={link.linkTo}><li>{link.label}</li></a>)
                }
            </ul>
        </div>
    )
};

export default MobileMenu;