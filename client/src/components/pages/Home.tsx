//REACT
import React from 'react'
import {Link} from 'react-router-dom'

//import { FaLess } from 'react-icons/fa6'

//COMPONENTS
import SubTittle from '../items/SubTittle'
import ParallaxImage from '../items/ParallaxImage'
import LinkButton from '../items/LinkButton'


const Home = () => {
    return (  
        <main className={'flex flex-col space-y-24 items-center mb-24'}>
            <ParallaxImage image='home_image' lightness={false}/>
            <article className={'flex flex-col w-full justify-center items-center px-12 min-w-36 space-y-10'}>
                <SubTittle text="ABOUT" textStyle='text-3xl font-archivoBlack' lineStyle='bg-black w-20 h-0.5 mt-3' />
                <p className={' text-justify'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nobis, possimus inventore veritatis eligendi perferendis nisi ducimus
                    repellendus nesciunt! Consectetur at amet officia quae temporibus non natus aspernatur aut commodi!<br/><br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores quisquam numquam illum doloremque cupiditate eos
                    aperiam. Qui expedita quam reprehenderit omnis perferendis neque officiis vitae, minima vero possimus voluptates!<br/><br/> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni minima nisi asperiores? Deleniti consequatur ad odio
                    accusantium eum possimus corrupti voluptates dolor, impedit laboriosam exercitationem totam consectetur iusto voluptate.  
                </p>
                <LinkButton text='READ MORE' to="/about" style='bg-customYellow text-white text-sm ${style} min-w-56 hover:opacity-75 hover:bg-customBrown transition-all duration-700 ease-in-out'/>
            </article>
            <section className={'bg-customBlack py-2 w-full'}>
                <ParallaxImage image='home_image2' lightness={false}></ParallaxImage>
            </section>
            <article className={'flex flex-col w-full justify-center items-center px-12 min-w-36 space-y-10 '}>
                <SubTittle text="APPLY" textStyle='text-3xl font-archivoBlack' lineStyle='bg-black w-20 h-0.5 mt-3'/>
                <section className={'flex space-x-3'}><div className={'bg-gray-700 w-14 h-0.5 mt-3'}></div><h3>WORK WITH US! </h3><div className={'bg-gray-700 w-14 h-0.5 mt-3'}></div></section>
                <p className='text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nobis, possimus inventore veritatis eligendi 
                    perferendis nisi ducimus repellendus nesciunt! Consectetur at amet officia quae temporibus non natus aspernatur aut commodi!<br/><br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio asperiores quisquam numquam illum doloremque cupiditate eos aperiam. 
                    Qui expedita quam reprehenderit omnis perferendis neque officiis vitae, minima vero possimus voluptates!
                </p>
                <LinkButton text='SEND CURRICULUM' to="/about" style='bg-customYellow text-white text-sm ${style} min-w-56 hover:opacity-75 hover:bg-customBrown transition-all duration-700 ease-in-out'/>
            </article>
            <ParallaxImage image='home_image3' lightness={false}/>
            <article className={'flex flex-col w-full justify-center items-center px-12 min-w-36 space-y-10'}>
                <SubTittle text="INFO" textStyle='text-3xl font-archivoBlack' lineStyle='bg-black w-20 h-0.5 mt-3'/>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.950611805961!2d-48.86249012368021!3d-26.2632662663838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deafc576601a05%3A0x5e15c8877b6dbb3a!2sSENAI%20Joinville%20Norte%20II!5e0!3m2!1spt-BR!2sbr!4v1703470302040!5m2!1spt-BR!2sbr" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    className={'w-full" h-60'}>    
                </iframe>
                <h3 className="font-archivoBlack text-xl">D.W Coffee - SC - Joinville</h3>
                <p className={'text-justify'}>
                    Open 9:00 AM - 7:00 PM,  Monday - Saturday <br/><br/>
                    Neighborhood Cardoso, AV - D.Pedro, 666 <br/><br/>
                    dw.cofffeJoinville@gmail.com - 666.666.6666 
                </p>
                
                <section className='flex flex-col justify-center w-full items-center group cursor-pointer'>
                    <Link to={'/Info'} className={'font-archivoBlack text-xl group-hover:text-customYellow transition-all duration-300 ease-in-out'}>RESTAURANTS</Link>
                    <div className={'bg-black w-40 h-0.5 mt-1 group-hover:bg-customYellow transition-all duration-300 ease-in-out'}></div>
                </section>
            </article>
        </main>
    )
}

export default Home