import React from 'react';
import icono6 from '../assets/icons/icono_6.png'
import icono7 from '../assets/icons/icono7.png'
import icono8 from '../assets/icons/icono_8.png'
import icono9 from '../assets/icons/icono_9.png'
import icono10 from '../assets/icons/icono_10.png'
import ExploreItem from './ExploreItem';
import './explore.css'

const Explore = (props) => {
    return (
        <div className={'explore-section'}>
            <ExploreItem
                image={icono6}
                text={'Get real time visibility of sales performance against Kpls with automatically' +
                'refreshed dashboards'}
            />
            <ExploreItem
                image={icono7}
                text={'Slice and dice your sales data and quickly break it down by region, product, customer,' +
                'account, manager and others'}
            />
            <ExploreItem
                image={icono8}
                text={'See historical trends and forecast future performance'}
            />
            <ExploreItem
                image={icono9}
                text={'Set up alerts to quickly under performing areas and make corrective decisions'}
            />
            <ExploreItem
                image={icono10}
                text={'Access your dashboards on the go from your mobile or tablet'}
            />
        </div>
    )
};

export default Explore