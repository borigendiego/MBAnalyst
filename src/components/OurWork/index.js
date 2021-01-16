import React from 'react';
//Styles
import './our-work.scss';
//Constants
import { DASHBOARDS } from './constants';
//Component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import MyIframe from './MyIframe';
import { Carousel } from 'react-responsive-carousel';

const OurWork = () => {
    return (
        <div className={'simple-section-wrapper'} id={'work'}>
            <h2 className={'section-subtitle'}>OUR WORK</h2>
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
            <p className={'our-work-text'}>Are you ready to accelerate your business growth?<br/> Get in touch to
                discover more about what MBAnalyst could do for your business.</p>
        </div>
    )
};

export default OurWork;