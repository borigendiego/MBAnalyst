import React from 'react'

const SeccionImagenes = (props) => {
    return(
        <div className={'gomi-section'}>
            <img src={props.image} className="App-logo" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
};
export default SeccionImagenes