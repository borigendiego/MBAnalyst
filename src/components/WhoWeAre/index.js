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
                <p className={'who-we-are-text'}>Our mission is to improve businesses thought data analytics
                projects and produce sustainable tools and resources to decision-makers.
                </p>
                <p className={'who-we-are-text'}>Whether you want to boost sales
                    by <span className={'who-we-are-text-s'}>understanding leads generation</span>,
                    conversion rates and the
                    performance of your latest marketing campaign reduce cost by measuring productivity or
                    improve service quality through on-time deliveries and customer feedback, there is a customised
                    data analytics solution for you</p>
            </div>
            <div className={'section-with-icon who-we-are-section'}>
                    <div className={'who-we-are-section-two-logo-text'}>
                        <img alt={'logo4'} src={icono4} className={'who-we-are-logo-one'}/>
                        <p className={'who-we-are-section-paragraph'}>We are creative and analytic minds armed with
                            solid technical skills
                        and business acumen.</p>
                    </div>
                    <img alt={'image4'} src={image4} className={'who-we-are-image-one'}/>
            </div>
            <div className={'section-with-icon who-we-are-section'}>
                    <img alt={'image3'} src={image3} className={'who-we-are-image-two'}/>
                    <div className={'who-we-are-section-two-logo-text'}>
                        <img alt={'logo5'} src={icono5} className={'who-we-are-logo-two'}/>
                        <p className={'who-we-are-section-paragraph'}>With local presence in Melbourne, we
                        have extensive experience working remotely in data projects around the word.</p>
                    </div>
            </div>
        </div>
    )
};

export default WhoWeAre