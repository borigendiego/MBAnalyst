import React from 'react';
import '../Header/Header.css'

const Header = (props) => {
    return (
        <div className='header'>
            <nav className={'item'}><a href={'#home'}>Home</a></nav>
            <nav className={'item'}><a href={'#services'}>Services</a></nav>
            <nav className={'item'}><a href={'#work'}>Work</a></nav>
            <nav className={'item'}><a href={'#contact'}>Contact</a></nav>
        </div>
    )
};

export default Header;