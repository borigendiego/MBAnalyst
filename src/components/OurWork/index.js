import React from 'react';
import './our-work.scss';
import { DASHBOARDS } from './constants';
//Component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import MyIframe from './MyIframe';
import { Carousel } from 'react-responsive-carousel';

const OurWork = (props) => {
    return (
        <div className={'our-work-container'} id={'work'}>
            <h1 className={'section-subtitle'}>OUR WORK</h1>
            <Carousel
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
            >
                {
                    DASHBOARDS.map((dashboard, index) =>
                        <div key={index} style={{height: '100%'}}>
                            <MyIframe url={dashboard.url} id={index}/>
                        </div>)
                }
            </Carousel>
        </div>
    )
};

export default OurWork;