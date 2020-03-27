import React from 'react'

const FooterImagenTexto = (props) => {
    return(
        <div>
            <img src={props.image} className="footer-insignia" />
            <p>{props.description}</p>
        </div>
    )
};
export default FooterImagenTexto