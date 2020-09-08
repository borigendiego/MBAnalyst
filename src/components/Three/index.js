import React from 'react';
import ThreeItem from './ThreeItem';
import './three.scss';
import Icono1 from '../assets/icons/icono_14.png'
import Icono2 from '../assets/icons/icono_15.png'
import Icono3 from '../assets/icons/icono_16.png'

const Three = (props) => {
    return(
        <div className={'three-section'}>
            <ThreeItem
                image={Icono1}
                text={'Manage inventory key metrics such as Aged Stock, Inventory Turnover, Availability,' +
                ' fastest moving inventory items and others.'}
            />
            <ThreeItem
                image={Icono2}
                id={'black-box'}
                text={'Link inventory data to sales performance to forecast inventory purchases and' +
                ' healthy stock levels'}
            />
            <ThreeItem
                image={Icono3}
                text={'Visualise overall Supply performance chain through updated data directly connected' +
                'to your inventory management systems'}
            />
        </div>
    )
};

export default Three