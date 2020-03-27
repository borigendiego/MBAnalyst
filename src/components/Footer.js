import React from "react";
import TextoDescripcion from "./TextoDescripcion";
import FooterImagenTexto from "./FooterImagenTexto";
import insignia from "../insignia.png"
import SeccionLista from "./SeccionLista";

const Footer = (props) => {
    return(
     <div className={'footer'}>
         <SeccionLista textList={['Link 1', 'Link2', 'Link3', 'Link4']}/>
         <div className={'footer-insignia'}>
             <TextoDescripcion description = "TEXTO DE DESCRIPCION TEXTO DE DESCRIPCIONTEXTO DE DESCRIPCION "/>
         </div>
         <FooterImagenTexto image={insignia} description={'Descripcion 1'} />
         <FooterImagenTexto image={insignia} description={'Descripcion 2'} />
         <FooterImagenTexto image={insignia} description={'Descripcion 3'} />
     </div>
    )
}

export default Footer