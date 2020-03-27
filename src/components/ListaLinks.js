import React from "react";

const ListaLinks = (props) => {
    return(
        <div className={'lista-links'}>
            <ul>
                {props.textList.map((text,index) => {
                    return <li key={index}>{text}</li>
                })}
            </ul>
        </div>

    )
};

export default ListaLinks