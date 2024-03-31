//REACT
import { useState, useMemo} from "react";
import React from "react";

//STYLE
import {IoMdArrowDropleft, IoMdArrowDropright} from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import menu_image from '../images/menu_image2.png'

//COMPONENTS
import LinkButton from "../items/buttons/LinkButton";
import Container from "../layout/Container"
import ParallaxImage from "../items/ParallaxImage"
import SubTittle from "../items/text/SubTittle"

//HOOKS
import useChangeDirection from "../../myHooks/useChangeDirection";

type stringArrayObject = Record<string, string[]>

const About = () => {
    const [restaurants, setRestaurants] = useState<stringArrayObject[]>([{"":[]}])
    const [restaurantCurrent, setRestaurantCurrent] = useState<string[]>([""])
    const [countRestaurants, setCountRestaurants] = useChangeDirection(restaurants.length)
    const [chefCurrent, setChefCurrent] = useState<string[]>([""])

    useMemo(
        () => {
            fetch('http://127.0.0.1:5000/get_restaurant_data/info', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
            })
            .then(
                res => res.json()
            )
            .then(
                (data: Record<string,stringArrayObject[]>) => {
                    if(data["response"]){
                        let response: stringArrayObject[] = data["response"]
                        setRestaurantCurrent(response[0]["restaurant"])
                        setChefCurrent(response[0]["chef"])
                        setRestaurants(response)           
                    }
                }
            )
        }, []
    )

    function changeRestaurant(direction: string) {
        setCountRestaurants(direction)
        setRestaurantCurrent(restaurants[countRestaurants-1]["restaurant"])
        setChefCurrent(restaurants[countRestaurants-1]["chef"])
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
                        {<p className='font-archivoBlack text-customBlack text-xl'>{restaurantCurrent[0]}</p>}
                    </section>
                    <section className='w-11/12 ' >
                        <SubTittle text="CHEF"/>
                        <section className="flex pt-10 w-full relative " >
                            <section className="w-7/12 h-60 bg-slate-300 shadow-md ">
                                <img src={`data:image/webp;base64,${restaurantCurrent[4]}`} alt="Restaurant Chef" className={' w-full h-full '} />
                            </section>
                            <section className="left-48 top-16 w-6/12 h-60 absolute bg-customYellowExtraLight shadow-xl">
                                <section className='py-3 px-5 bg-customBlack'> 
                                    <h3 className='text-customYellowExtraLight font-archivoBlack text-sm'>{chefCurrent[0]}</h3>
                                </section>
                                <p className='text-xs text-justify p-4'>
                                    {chefCurrent[1]}
                                </p>
                                <section className='flex space-x-3 justify-center p-3 '>
                                    <LinkButton to="/" styleProp='about' text={<FaSquareInstagram className='text-customYellowExtraLight' />}/>
                                    <LinkButton to="/" styleProp='about' text={<BsTwitterX className="text-customYellowExtraLight" />}/>
                                </section>
                            </section>
                        </section>
                    </section>
                    
                    <div className='bg-black w-11/12 h-0.5'></div>
                    <section className="grid grid-rows-2 grid-flow-col" >
                        <div className='flex flex-col items-center min-w-48 min-h-48 bg-slate-400 cursor-pointer shadow-md'>
                            <img src={menu_image} alt="Menu"/>
                        </div>
                        <div className='flex flex-col items-center min-w-48 min-h-48'>
                            <h3 className='font-archivoBlack text-start w-full px-4 py-2'>KITCHEN</h3>
                            <p className='text-xs text-justify w-40'> 
                                {restaurantCurrent[1]}
                            </p> 
                        </div>
                        <div className=' flex flex-col items-center min-w-48 min-h-48'>
                            <h3 className='font-archivoBlack text-start w-full px-4 py-2'>MENU</h3>
                            <p className='text-xs text-justify w-40'>
                                {restaurantCurrent[2]}
                            </p>    
                        </div>
                        <div className=' flex flex-col items-center min-w-48 min-h-48 bg-slate-800 shadow-md'>
                            <img src={`data:image/webp;base64,${restaurantCurrent[3]}`} alt="Kitchen of restaurant" className="  w-48 " />
                        </div>
                    </section>
                </article>
            </main>
        </Container>
    )
}

export default About