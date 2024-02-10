//REACT
import React from "react";
import { useLocation } from "react-router-dom"

//STYLE
import { IoHome, IoNewspaper, IoBook} from "react-icons/io5";
import { SiCoffeescript, SiHomeassistantcommunitystore } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa";
import { PiNewspaperClippingFill } from "react-icons/pi";

//COMPONENTS
import Container from "./Container"
import LinkButton from '../items/buttons/LinkButton'


interface MenuHamburguerProps{
    display: string
}

const MenuHamburguer: React.FC<MenuHamburguerProps> = ({display}) => {
    const location = useLocation()
    return (
        <Container styleProp={`flex-col overflow-hidden -z-10 ${display} transition-all duration-500`} >
            <section className='bg-customBlack flex items-center justify-center p-5 h-1/4 w-full border-t-2 border-t-customYellowLight  ' >
                <section className='text-white flex space-x-10'>
                    <LinkButton styleProp="menuRegisterAndLogin" text="LOG IN" to={'/login'}/>
                    <div className='bg-white h-12/12 w-0.5'></div>
                    <LinkButton styleProp="menuRegisterAndLogin" text="REGISTER" to={'/register'}/>
                </section>
            </section>
            <nav className=" mt-5 flex flex-col" >
                <LinkButton styleProp="menu" text={<section className='flex space-x-5 items-center'><IoHome className='text-customBlack'/><p>Home</p></section>} to="/" currentLocation={location.pathname === "/" ? 'bg-gray-100' : false}/>
                <LinkButton styleProp="menu" text={<section className='flex space-x-5 items-center'><SiCoffeescript className='text-customBlack'/><p>Coffee</p></section>} to="/coffee" currentLocation={location.pathname === "/coffee" ? 'bg-gray-100' : false} />
                <LinkButton styleProp="menu" text={<section className='flex space-x-5 items-center'><IoNewspaper className='text-customBlack'/><p>Apply</p></section>} to="/apply" currentLocation={location.pathname === "/apply" ? 'bg-gray-100' : false}/>
                <LinkButton styleProp="menu" text={<section className='flex space-x-5 items-center'><IoBook className='text-customBlack'/><p>About</p></section>} to="/about" currentLocation={location.pathname === "/about" ? 'bg-gray-100' : false}/>
                <LinkButton styleProp="menu" text={<section className='flex space-x-5 items-center'><FaInfoCircle className='text-customBlack'/><p>Info</p></section>} to="/info" currentLocation={location.pathname === "/info" ? 'bg-gray-100' : false}/>
                <LinkButton styleProp="menu" text={<section className='flex space-x-5 items-center'><SiHomeassistantcommunitystore className='text-customBlack'/><p>Restaurants</p></section>} to="/" currentLocation={location.pathname === "/restaurants" ? 'bg-gray-100' : false}/>
                <LinkButton styleProp="menu" text={<section className='flex space-x-5 items-center'><PiNewspaperClippingFill className='text-customBlack'/><p>News</p></section>} to="/" currentLocation={location.pathname === "/news" ? 'bg-gray-100' : false}/>
            </nav>
            <section className=" py-14 px-5" >
                <div className='bg-black h-0.5 w-12/12' ></div>
            </section>
        </Container>
    )
}


export default MenuHamburguer
