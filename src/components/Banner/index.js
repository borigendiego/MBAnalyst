import React from 'react';
//Style
import '../Banner/Banner.scss';
//Image
import Logo from '../assets/images/Transparent-logo.png'

const Banner = (props) => {
    return(
        <div className={'banner'}>
            <div className={'banner-content'}>
                <img alt={'logo'} src={Logo}/>
                <div className={'text-container'}>
                    <h2 className={'text'}><span className={'black-text'}>Better</span></h2>
                    <h2 className={'text'}><span className={'black-text'}>Data,</span> Better Decisions</h2>
                </div>
            </div>
        </div>
    )
};

export default Banner