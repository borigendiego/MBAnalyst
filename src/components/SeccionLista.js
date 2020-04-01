import React from "react";

const SeccionLista = (props) => {
    return(
        <div className={'our-work-image-list-container'}>
            <ul>
                {props.textList.map((text,index) => {
                    return <li key={index}>{text}</li>
                })}
            </ul>
            <img src={props.grafico} />
        </div>

    )
};

export default SeccionLista

// footer
// hover