import React from 'react';
import SeccionImagenes from "../SeccionImagenes/SeccionImagenes";
import logo from '../imagenes/logo.svg'
import pelota from '../imagenes/pelota.jpg'
import './ourServicess.css'

const OurServices = (props) => {
  return (
      <div className={'section-container'}>
          <h2>{props.title}</h2>
          <div className={'imagenes-container'}>
              <SeccionImagenes title={'Titulo 1'} description={'Descripcion 1'} image={pelota} />
              <SeccionImagenes title={'Titulo 2'} description={'Descripcion 2'} image={logo} />
              <SeccionImagenes title={'Titulo 3'} description={'Descripcion 3'} image={logo} />
          </div>
          <button class="boton" type="button">Click Me!</button>
      </div>
  )
};

export default OurServices