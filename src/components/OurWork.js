import React from 'react';
import './ourServices.css'
import grafico from '../grafico.png'

const OurWork = (props) => {
    return (
        <div className={'section-ourwork'}>
            <h2>{props.title}</h2>
            {//TODO: Todo este div lo deberias sacar a nuevo componente que sea SectionWithListImage o algo asi y las props serian list={[tex1,tex2,tex3,tex4] y una imagen }}
            <div className={'our-work-image-list-container'}>
                <ul>
                    {['text1', 'text2', 'text3'].map((text,index) => {
                        return <li key={index}>{text}</li>
                    })}
                </ul>
                <img src={grafico} />
            </div>
        </div>

    )
}

export default OurWork