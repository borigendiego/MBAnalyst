import React from "react";
import './ourServices.css'
import './TextoDescripcion'
import TextoDescripcion from "./TextoDescripcion";

const WeAreGomi = (props) => {
    return(
        <div className={"section-whoweare"}>
           <h2>{props.title}</h2>
            <div className={'description-text'}>
                <TextoDescripcion description = "ESTO ES UN TEXTO DE PRUEBAS ASDADASDADADSDSADASDAASDADAS"/>
            </div>
        </div>
    )
};

export default WeAreGomi