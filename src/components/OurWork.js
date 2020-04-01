import React from 'react';
import './ourServices.css'
import grafico from '../grafico.png'
import SeccionLista from "./SeccionLista";

const OurWork = (props) => {
    return (
        <div className={'section-ourwork'}>
            <h2>{props.title}</h2>
            <SeccionLista textList={['Item A1', 'Item A2', 'Item A3', 'Item A4']} grafico={grafico}/>
            <SeccionLista textList={['Item B1', 'Item B2', 'Item B3']} grafico={grafico}/>
            <SeccionLista textList={['Item C1', 'Item C2']} grafico={grafico}/>
         </div>

    )
}

export default OurWork