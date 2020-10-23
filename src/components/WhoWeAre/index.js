import React from 'react';
//Styles
import './whoWeAre.scss';
//Images
import icono5 from '../assets/images/icono_5.png';
import icono4 from '../assets/images/icono_4.png';
import image4 from '../assets/images/image4.jpg';
import image3 from '../assets/images/image3.jpg';

const WhoWeAre = () => {
    return (
        <div className={'who-we-are-sections'}>
            <div className={'who-we-are-first-section who-we-are-section'}>
                <div className={'first-section-overlay'}/>
                <h1 className={'who-we-are-title'}>WHO WE ARE</h1>
                <p className={'who-we-are-text'}>We are committed to helping businesses make better
                    decisions using data. Our expert team will become your trusted adviser on everything data
                    combining passion, knowledge and experience to transform the way your business deals with data.
                </p>
            </div>
            <div className={'section-with-icon who-we-are-section'}>
                    <div className={'who-we-are-section-two-logo-text'}>
                        <img alt={'logo4'} src={icono4} className={'who-we-are-logo-one'}/>
                        <p className={'who-we-are-section-paragraph'}>We provide end to end BI services tailored
                            to fit your company’s individual needs.</p>
                    </div>
                    <img alt={'image4'} src={image4} className={'who-we-are-image-one'}/>
            </div>
            <div className={'section-with-icon who-we-are-section'}>
                    <img alt={'image3'} src={image3} className={'who-we-are-image-two'}/>
                    <div className={'who-we-are-section-two-logo-text'}>
                        <img alt={'logo5'} src={icono5} className={'who-we-are-logo-two'}/>
                        <p className={'who-we-are-section-paragraph'}>We are a boutique data analytics
                            consulting firm based in Melbourne, Australia with extensive experience working
                            remotely in data projects around the world.</p>
                    </div>
            </div>
        </div>
    )
};

export default WhoWeAre