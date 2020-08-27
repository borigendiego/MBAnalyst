import React from 'react';
//css
import './your-data.scss';
//Images
import FirstIcon from '../assets/icons/icono_11.png';

const YourData = () => {
    return (
        <div>
            <h1>YOUR DATA</h1>
            <div className={'your-data-container'}>
                <div className={'items-wrapper'}>
                    <div className={'your-data-items'}>
                        <img src={FirstIcon} />
                        <p>Define your key business drivers and track them through custom made dashboards.</p>
                    </div>
                    <div className={'your-data-items'}>
                        <img src={FirstIcon} />
                        <p>Define your key business drivers and track them through custom made dashboards.</p>
                    </div>
                    <div className={'your-data-items'}>
                        <img src={FirstIcon} />
                        <p>Define your key business drivers and track them through custom made dashboards.</p>
                    </div>
                </div>
                <div className={'your-data-rhombus-container'}>
                    <div className={'rhombus first'}></div>
                    <div className={'rhombus second'}></div>
                    <div className={'rhombus third'}></div>
                    <div className={'rhombus fourth'}></div>
                </div>
            </div>
        </div>
    )
};

export default YourData;