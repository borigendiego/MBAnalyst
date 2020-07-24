import React from "react";
import './weAreGomi.css';
import TextoDescripcion from "../TextoDescripcion";

const WeAreGomi = (props) => {
    return(
        <div className={"section-whoweare"}>
           <h2>{props.title}</h2>
            <div className={'description-text'}>
                <TextoDescripcion description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Morbi tincidunt ultricies libero malesuada blandit. Maecenas vehicula dui in dictum tincidunt.
                  Fusce laoreet porta sapien sit amet varius. In aliquam accumsan erat, et porta nunc consequat ut.
                   Fusce sed mi pharetra, sagittis est eu, fermentum arcu. Mauris in est faucibus, egestas urna et,
                 lobortis urna. Integer tortor felis, tempus ac viverra nec, accumsan a eros."/>
            </div>
        </div>
    )
};

export default WeAreGomi