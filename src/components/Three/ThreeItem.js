import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const ThreeItem = (props) => {
    const [isElementVisible, setIsElementVisible] = useState(false);
    const onChangeVisibility = (isVisible) => isVisible ? setIsElementVisible(true) : setIsElementVisible(false);

    return(
        <VisibilitySensor onChange={onChangeVisibility}>
            <div className={`${isElementVisible ? 'three-logo-container visibleClass' : 'three-logo-container'}`}>
                <img alt={'logo'} src={props.image} className={'three-logo'} id={props.id}/>
                <div className={'three-arrow'} id={props.id} />
                <p className={'three-text'}>{props.text}</p>
            </div>
        </VisibilitySensor>
    )
};

export default ThreeItem;