import React from 'react';

const OurServicesItem = (props) => {
    return (
        <div id={props.id} className={'our-service-item'}>
            <div className={'our-service-item-image'} style={{backgroundImage:`url(${props.image})`}}/>
            {/*<img className={'our-service-item-image'} src={props.image} />*/}
            <div className={'our-service-item-description-wrapper'}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
};

export default OurServicesItem