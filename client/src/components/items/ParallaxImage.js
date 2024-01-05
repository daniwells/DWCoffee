import style from './ParallaxImage.module.css'

function ParallaxImage({image, lightness}){
    return (  
        <section className={`${style[image]} bg-fixed h-72 w-full`}>
            {lightness ? <section className={`bg-black w-full h-full ${lightness}`}></section> : ''}
        </section>
    )
}

export default ParallaxImage