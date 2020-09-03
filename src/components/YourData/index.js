import React from 'react';
//css
import './your-data.scss';
//Images
import FirstIconWhite from '../assets/icons/icono_11_dif.png';
import SecondIconWhite from '../assets/icons/icono_12_dif.png'
import ThirdIconWhite from '../assets/icons/icono_13_dif.png'
import FirstIconOrange from '../assets/icons/icono_11.png'
import SecondIconOrange from '../assets/icons/icono_12.png'
import ThirdIconOrange from '../assets/icons/icono_13.png'
import Image from '../assets/images/image5.jpg'

const YourData = () => {
    return (
        <div className={'your-data-section'}>
            <h1 className={'your-data-title'}>YOUR DATA</h1>
            <div className={'your-data-container'}>
                <div className={'items-wrapper'}>
                    <div className={'your-data-items'}>
                        <img alt={'first-icon'} src={FirstIconOrange} />
                        <p>Define your key business drivers and track them through custom made dashboards.</p>
                    </div>
                    <div className={'your-data-items'}>
                        <img alt={'second-icon'} src={SecondIconOrange} />
                        <p>Visualise commercial trends to support data driven decisions making.</p>
                    </div>
                    <div className={'your-data-items'}>
                        <img alt={'third-icon'} src={ThirdIconOrange} />
                        <p>Understand what makes your business grow and monitor it at glance.</p>
                    </div>
                </div>
                <div className={'your-data-rhombus-container'}>
                    <div className={'rhombus first'}>
                        <img src={SecondIconWhite} alt={'first-icon'} className={'your-data-icon'}/>
                    </div>
                    <div className={'rhombus second'}>
                        <img src={FirstIconWhite} alt={'second-icon'} className={'your-data-icon'}/>
                    </div>
                    <div className={'rhombus third'}>
                        <img src={Image} alt={'third-icon'} className={'your-data-img'} />
                    </div>
                    <div className={'rhombus fourth'}>
                        <img src={ThirdIconWhite} alt={'fourth-icon'} className={'your-data-icon'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default YourData;