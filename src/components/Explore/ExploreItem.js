import React, {useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const ExploreItem = (props) => {
    const [isElementVisible, setIsElementVisible] = useState(false);
    const onChangeVisibility = (isVisible) => isVisible ? setIsElementVisible(true) : setIsElementVisible(false);

    return (
        <VisibilitySensor onChange={onChangeVisibility}>
            <div className={`${isElementVisible ? 'explore-container visibleClass' : 'explore-container'}`}>
                <div className={'hexagon'}>
                    <img src={props.image} alt={'logo'} className={'explore-logo'}/>
                </div>
                <p className={'explore-text'}>{props.text}</p>
            </div>
        </VisibilitySensor>
    )
};

export default ExploreItem