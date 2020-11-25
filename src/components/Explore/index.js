import React from 'react';
//Style
import './explore.scss'
//Icons
import icono6 from '../assets/icons/icono_6.png'
import icono7 from '../assets/icons/icono7.png'
import icono8 from '../assets/icons/icono_8.png'
import icono9 from '../assets/icons/icono_9.png'
import icono10 from '../assets/icons/icono_10.png'
import ExploreItem from './ExploreItem';

const Explore = () => {
    return (
        <div className={'explore-section-container'}>
            <h1 className={'explore-section-title'}>Why choose a BI solution?</h1>
            <div className={'explore-section'}>
                <ExploreItem
                    image={icono6}
                    text={'Get real time visibility of your business KPIs and save significant costs by' +
                    ' switching manual reporting activities with fully automated reports and scheduled refreshes.'}
                />
                <ExploreItem
                    image={icono7}
                    text={'Offers data analysis without the requirement of specialised technical support,' +
                    ' with a strong, intuitive interface.'}
                />
                <ExploreItem
                    image={icono8}
                    text={'Saves you time with customised information dashboards, which are moulded to your' +
                    ' organisation\'s specific needs.'}
                />
                <ExploreItem
                    image={icono9}
                    text={'Eliminates speed and memory restrictions thanks to a robust cloud environment,' +
                    ' enabling data to be found and analysed rapidly.'}
                />
                <ExploreItem
                    image={icono10}
                    text={'Allows you to view reports instantly on multiple web-connected devices,' +
                    ' including iOS, Android and Windows.'}
                />
            </div>
        </div>
    )
};

export default Explore