import React from 'react';
//css
import './your-data.scss';
//Images
import FirstIcon from '../assets/icons/icono_11.png';
import SecondIcon from '../assets/icons/icono_12.png'
import ThirdIcon from '../assets/icons/icono_13.png'
import Image from '../assets/images/image5.jpg'

const YourData = () => {
    return (
        <div className={'your-data-section'}>
            <h1 className={'your-data-title'}>YOUR DATA</h1>
            <div className={'your-data-container'}>
                <div className={'items-wrapper'}>
                    <div className={'your-data-items'}>
                        <img alt={'first-icon'} src={FirstIcon} />
                        <p>Define your key business drivers and track them through custom made dashboards.</p>
                    </div>
                    <div className={'your-data-items'}>
                        <img alt={'second-icon'} src={SecondIcon} />
                        <p>Visualise commercial trends to support data driven decisions making.</p>
                    </div>
                    <div className={'your-data-items'}>
                        <img alt={'third-icon'} src={ThirdIcon} />
                        <p>Understand what makes your business grow and monitor it at glance.</p>
                    </div>
                </div>
                <div className={'your-data-rhombus-container'}>
                    <div className={'rhombus first'}>
                        <img src={SecondIcon} alt={'first-icon'} className={'your-data-icon'}/>
                    </div>
                    <div className={'rhombus second'}>
                        <img src={FirstIcon} alt={'second-icon'} className={'your-data-icon'}/>
                    </div>
                    <div className={'rhombus third'}>
                        <img src={Image} alt={'image'} className={'your-data-img'} />
                    </div>
                    <div className={'rhombus fourth'}>
                        <img src={ThirdIcon} alt={'third-icon'} className={'your-data-icon'}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default YourData;