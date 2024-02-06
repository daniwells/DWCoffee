//REACT
import { useState, useEffect } from "react";
import React from "react";

//STYLE
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io";
import about_image from '../images/chef_image.png'
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import menu_image from '../images/menu_image2.png'
import about_image2 from '../images/about_image2.png'

//COMPONENTS
import LinkButton from "../items/LinkButton";
import Container from "../layout/Container"
import ParallaxImage from "../items/ParallaxImage"
import SubTittle from "../items/SubTittle"


/*interface restaurantsInterface {
    restaurant: string,
    chef: string,
    aboutRestaurant: string,
    aboutMenu: string
}*/

const About = () => {
    //const [restaurants, setRestaurants] = useState<restaurantsInterface[]>([])
    const [restaurantName, setRestaurantName] = useState<string[]>([])
    let [restaurantNameCurrent, setRestaurantNameCurrent] = useState<string>()
    const [countRestaurants, setCountRestaurants] = useState<number>(0)

    let countReders = 0

    useEffect(
        () => {
            fetch('http://127.0.0.1:5000/datas', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(
                res => res.json()
            )
            .then(
                (data: any) => {
                    //setRestaurants(data['restaurants'])
                    setRestaurantNameCurrent(restaurantName[0])

                    if(countReders === 0){
                        data['restaurants'].forEach((value: any) =>{
                            setRestaurantName(prevState => [...prevState, value['restaurant']])
                        })
                        setCountRestaurants(data['restaurants'].length-1) 
                        countReders++
                    }
                }  
            )
        }, [countReders, restaurantName]
    )

    function changeRestaurant(direction: string) {
        if(direction === 'right'){
            setCountRestaurants((prevCount) => prevCount + 1);
            if(countRestaurants >= restaurantName.length){
                setCountRestaurants(1)
            }
        }else{
            setCountRestaurants((prevCount) => prevCount - 1);
            if(countRestaurants <= 0){
                setCountRestaurants(restaurantName.length-1)
            }
        }
        setRestaurantNameCurrent(restaurantName[countRestaurants])
    }

    return (
        <Container styleProp="mb-24" >
            <main className="w-full space-y-24" >
                <section className='static flex items-center justify-center'>
                    <SubTittle styleProp='absolute z-10' text="ABOUT US" textStyle='text-4xl font-archivoBlack text-white' lineStyle='bg-white w-40 h-0.5 mt-3'/> 
                    <ParallaxImage image='about_image1' lightness={'opacity-55'}/>
                </section>
                <article className="flex flex-col space-y-20 items-center justify-center">
                    <section className={'flex flex-col w-full items-center justify-center space-y-3'} >
                        <section className={'flex items-center justify-center space-x-8'}>
                            <IoMdArrowDropleft className='h-7 w-7 cursor-pointer' onClick={() => changeRestaurant("left")}/>
                            <h2>RESTAURANTS</h2>
                            <IoMdArrowDropright className='h-7 w-7 cursor-pointer' onClick={() => changeRestaurant("right")}/>
                        </section>
                        {
                        restaurantNameCurrent ? 
                        <p className='font-archivoBlack text-customBlack text-xl'>{restaurantNameCurrent}</p>
                        :
                        <p className='font-archivoBlack text-customBlack text-xl' >{restaurantName[0]}</p>
                        }
                    </section>
                    <section className='w-11/12 ' >
                        <SubTittle text="CHEF"/>
                        <section className="flex pt-10 w-full relative " >
                            <section className="w-7/12 h-60 bg-slate-300">
                                <img src={about_image} alt="Restaurant Chef" className={' w-full h-full '} />
                            </section>
                            <section className="left-48 top-16 w-6/12 h-60 absolute bg-customYellowExtraLight ">
                                <section className='py-3 px-5 bg-customBlack'> 
                                    <h3 className='text-customYellowExtraLight font-archivoBlack text-sm'>Pessoa Aleatória</h3>
                                </section>
                                <p className='text-xs text-justify p-4  '>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi tempora reprehenderit modi suscipit praesentium fugiat, 
                                    autem blanditiis asdfasdffgh fdg.
                                </p>
                                <section className='flex space-x-3 justify-center items-center h-1/4 '>
                                    <LinkButton to="/" styleProp='brown' text={<FaSquareInstagram className='text-customYellowExtraLight' />}/>
                                    <LinkButton to="/" styleProp='brown' text={<BsTwitterX className="text-customYellowExtraLight" />}/>
                                </section>
                            </section>
                        </section>
                    </section>
                    
                    <div className='bg-black w-11/12 h-0.5'></div>
                    <section className="grid grid-rows-2 grid-flow-col" >
                        <div className='flex flex-col items-center min-w-48 min-h-48 bg-slate-400 cursor-pointer'><img src={menu_image} alt="Menu"/></div>
                        <div className='flex flex-col items-center min-w-48 min-h-48'>
                            <h3 className='font-archivoBlack text-start w-full px-4 py-2 '>KITCHEN</h3>
                            <p className='text-xs text-justify w-40'> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi tempora reprehenderit modi suscipit 
                                praesentium fugiat, autem blanditiis saepe eum aperiam odio iste maxime quos magnam distinctio ipsum. Harum, eos.
                            </p> 
                        </div>
                        <div className=' flex flex-col items-center min-w-48 min-h-48'>
                            <h3 className='font-archivoBlack text-start w-full px-4 py-2 '>MENU</h3>
                            <p className='text-xs text-justify w-40'> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi tempora reprehenderit modi suscipit 
                                praesentium fugiat, autem blanditiis saepe eum aperiam odio iste maxime quos magnam distinctio ipsum. Harum, eos.
                            </p>    
                        </div>
                        <div className=' flex flex-col items-center min-w-48 min-h-48 bg-slate-800'>
                            <img src={about_image2} alt=""/>
                        </div>
                    </section>
                </article>
            </main>
        </Container>
    )
}

export default About