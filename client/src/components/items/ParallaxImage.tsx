//REACT
import React from 'react'

//STYLE
import style from './ParallaxImage.module.css'

interface ParallaxImageProps {
    image: string,
    lightness: string | boolean
} 

const ParallaxImage: React.FC<ParallaxImageProps> = ({image, lightness}) => {
    return (  
        <section className={`${style[image]} bg-fixed h-72 w-full`}>
            {lightness ? <section className={`bg-black w-full h-full ${lightness}`}></section> : ''}
        </section>
    )
}

export default ParallaxImage