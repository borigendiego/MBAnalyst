import React from 'react';
import '../Header/header.scss'

const Header = (props) => {
    return (
        <div className='header'>
            <nav className={'header-item'}><a href={'#home'}>Home</a></nav>
            <nav className={'header-item'}><a href={'#services'}>Services</a></nav>
            <nav className={'header-item'}><a href={'#work'}>Work</a></nav>
            <nav className={'header-item'}><a href={'#contact'}>Contact</a></nav>
        </div>
    )
};

export default Header;