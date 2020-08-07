import React from 'react';

const OurServicesItem = (props) => {
    return (
        <div id={props.id}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
};

export default OurServicesItem