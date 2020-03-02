import React from 'react'
import logo from '../logo.svg';

const SeccionImagenes = (props) => {
    return(
        <div>
            <img src={props.image} className="App-logo" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
export default SeccionImagenes