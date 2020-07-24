import React from 'react';
import './ourWork.css'
import grafico from '../imagenes/grafico.png'
import SeccionLista from "../SeccionLista";

const OurWork = (props) => {
    return (
        <div className={'section-ourwork'}>
            <h2>{props.title}</h2>
            <div className={'item1'}>
                <SeccionLista textList={['Item A1', 'Item A2', 'Item A3', 'Item A4']} grafico={grafico}/>
            </div>
            <div className={'item2'}>
                <SeccionLista textList={['Item B1', 'Item B2', 'Item B3']} grafico={grafico}/>
            </div>
            <div className={'item3'}>
                <SeccionLista textList={['Item C1', 'Item C2']} grafico={grafico}/>
            </div>
         </div>

    )
}

export default OurWork