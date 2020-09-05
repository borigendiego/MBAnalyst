import React from 'react';

const ThreeItem = (props) => {
    return(
        <div className={'three-item'}>
            <div className={'three-logo-container'}>
                <img alt={'logo'} src={props.image} className={'three-logo'} id={props.id}/>
            </div>
            <p className={'three-text'}>{props.text}</p>
        </div>
    )
};

export default ThreeItem;