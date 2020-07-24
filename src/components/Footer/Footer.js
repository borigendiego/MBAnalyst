import React from "react";
import TextoDescripcion from "../TextoDescripcion";
import FooterImagenTexto from "./FooterImagenTexto";
import insignia from "../imagenes/insignia.png"
import ListaLinks from "../ListaLinks";
import footer from './Footer.css'

const Footer = (props) => {
    return(
     <div className={'footer'}>
         <ListaLinks textList={['MBAnalyst', 'RedArquitectos']}/>
         <div className={'footer-insignia'}>
             <TextoDescripcion description="Este sería otro texto que especificaría como ponerse en contacto con nosotros"/>
         </div>
         <div className={'footer-ins'}>
             <FooterImagenTexto image={insignia} description={'Descripcion 1'} />
             <FooterImagenTexto image={insignia} description={'Descripcion 2'} />
             <FooterImagenTexto image={insignia} description={'Descripcion 3'} />
         </div>
     </div>
    )
};

export default Footer