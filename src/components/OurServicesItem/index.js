import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const OurServicesItem = (props) => {
    const [isElementVisible, setIsElementVisible] = useState(false);
    const onChangeVisibility = (isVisible) => isVisible ? setIsElementVisible(true) : setIsElementVisible(false);

    return (
        <VisibilitySensor onChange={onChangeVisibility}>
            <div id={props.id} className={`${isElementVisible ? 'our-service-item visibleClass' : 'our-service-item'}`}>
                <div className={'our-service-item-image'} style={{backgroundImage:`url(${props.image})`}}/>
                <h3 className={'our-service-item-title'}>{props.title}</h3>
                <div className={'our-service-item-description-wrapper'}>
                    <p className={'our-service-item-text'}>{props.text}</p>
                </div>
            </div>
        </VisibilitySensor>
    )
};

export default OurServicesItem