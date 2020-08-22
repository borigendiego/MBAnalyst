import React from 'react';
//Style
import '../Banner/Banner.scss';
//Image
import Logo from '../assets/images/Transparent-logo.png'

const Banner = (props) => {
    return(
        <div className={'banner'}>
            <div className={'banner-content'}>
                <img src={Logo}/>
                <h2 className={'text'}>Better Data, Better Decisions</h2>
            </div>
        </div>
    )
};

export default Banner