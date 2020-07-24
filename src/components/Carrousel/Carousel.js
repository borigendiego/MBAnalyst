import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import pelota from '../imagenes/pelota.jpg'

const Gallery = () => {
    const handleOnDragStart = (e) => e.preventDefault();
    return (
        <AliceCarousel mouseTrackingEnabled>
            <img src={pelota} onDragStart={handleOnDragStart} className="yours-custom-class" />
            <h1>Hola</h1>
        </AliceCarousel>
    )
};

export default Gallery