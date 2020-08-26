import React from 'react';
import './whoWeAre.css';
import icono5 from '../assets/images/icono_5.png'
import icono4 from '../assets/images/icono_4.png'
import image4 from '../assets/images/image4.jpg'
import image3 from '../assets/images/image3.jpg'

const WhoWeAre = (props) => {
    return (
        <div className={'whoweare-section'}>
            <div className={'whoweare-section-one'}>
                <h1>WHO WE ARE</h1>
                <p className={'whoweare-text'}>Our mission is to improve businesses thought data analytics
                projects and produce sustainable tools and resources to decision-makers.
                Whether you want to boost sales by understanding leads generation, conversion rates and the
                performance of your latest marketing campaign reduce cost by measuring productivity or
                improve service quality through on-time deliveries and customer feedback, there is a customised
                data analytics solution for you</p>
            </div>
            <div className={'whoweare-section-two'}>
                    <div className={'whoweare-section-two-logotext'}>
                        <img alt={'logo4'} src={icono4} className={'whoweare-logo-one'}/>
                        <p className={'whoweare-section-paragraph'}>We are creative and analytic minds armed with
                            solid technical skills
                        and business acumen.</p>
                    </div>
                    <img alt={'imagen4'} src={image4} className={'whoweare-image-one'}/>
            </div>
            <div className={'whoweare-section-three'}>
                    <img alt={'imagen3'} src={image3} className={'whoweare-image-two'}/>
                    <div className={'whoweare-section-two-logotext'}>
                        <img alt={'logo5'} src={icono5} className={'whoweare-logo-two'}/>
                        <p className={'whoweare-section-paragraph'}>With local presence in Melbourne, we
                        have extensive experience working remotely in data projects around the word.</p>
                    </div>
            </div>
        </div>
    )
};

export default WhoWeAre