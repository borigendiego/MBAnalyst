import React from 'react';

const OurServicesItem = (props) => {
    return (
        <div id={props.id} className={'our-service-item'}>
            <div className={'our-service-item-image'} style={{backgroundImage:`url(${props.image})`}}/>
            <div className={'our-service-item-description-wrapper'}>
                <h3 className={'our-service-item-title'}>{props.title}</h3>
                <p className={'our-service-item-text'}>{props.text}</p>
            </div>
        </div>
    )
};

export default OurServicesItem