//REACT
import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom"

//STYLE
import { IoHome, IoNewspaper, IoBook} from "react-icons/io5";
import { SiCoffeescript, SiHomeassistantcommunitystore } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa";
import { PiNewspaperClippingFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { GoPersonFill } from "react-icons/go";

//COMPONENTS
import Container from "./Container"
import LinkButton from '../items/buttons/LinkButton'


interface MenuHamburguerProps{
    display: string
}

const MenuHamburguer: React.FC<MenuHamburguerProps> = ({display}) => {
    const location = useLocation()
    const [logged, setLogged] = useState<boolean>(false)
    const [username, setUsername] = useState<string>("")

    useEffect(() => {
        fetch('http://127.0.0.1:5000/get_session', {
            method: "GET",
            headers: {'Content-type': 'application/json'},
            credentials: 'include' 
        })
        .then(resp => resp.json())
        .then(datas => {
            if(datas["name"]){
                setLogged(true)
                setUsername(datas["name"])
            }else{
                setLogged(false)
            }
        })
    }, [])

    return (
        <Container styleProp={`flex-col overflow-hidden -z-10 ${display} transition-all duration-500`} >
            <section className='bg-customBlack flex items-center w-full h-20 border-t-2 border-t-customYellowLight'>
                {logged 
                    ?
                    <LinkButton styleProp="menuHamburguerLogin" text={
                        <>
                            <div className="w-16 h-full row-span-2 flex items-center justify-center">
                                <GoPersonFill className="w-7 h-7" />  
                            </div>
                            <div className="min-w-16 h-full col-span-2 flex justify-start font-bold text-lg ">
                                {username}
                            </div>
                            <div className="min-w-16 h-full text-sm flex items-center justify-start">
                                My Perfil
                            </div>
                            <div className="min-w-16 h-full flex justify-center items-center">
                                <IoIosArrowForward/>
                            </div>
                        </>
                    } to={'/perfil'}/> 
                    :
                    <section className='text-white flex space-x-10 m-5 w-full h-full py-4 items-center justify-center'>
                        <LinkButton styleProp="menuRegisterAndLogin" text="LOG IN" to={'/login'}/>
                        <div className='bg-white h-full w-0.5'></div>
                        <LinkButton styleProp="menuRegisterAndLogin" text="REGISTER" to={'/register'}/>
                    </section> 
                }
                
            </section>
            <nav className=" mt-5 flex flex-col" >
                <LinkButton styleProp="menuHamburguerPages" text={<section className='flex space-x-5 items-center'><IoHome className='text-customBlack'/><p>Home</p></section>} to="/" currentLocation={location.pathname === "/" ? 'bg-gray-100' : false}/>
                <LinkButton styleProp="menuHamburguerPages" text={<section className='flex space-x-5 items-center'><SiCoffeescript className='text-customBlack'/><p>Coffee</p></section>} to="/coffee" currentLocation={location.pathname === "/coffee" ? 'bg-gray-100' : false} />
                <LinkButton styleProp="menuHamburguerPages" text={<section className='flex space-x-5 items-center'><IoNewspaper className='text-customBlack'/><p>Apply</p></section>} to="/apply" currentLocation={location.pathname === "/apply" ? 'bg-gray-100' : false}/>
                <LinkButton styleProp="menuHamburguerPages" text={<section className='flex space-x-5 items-center'><IoBook className='text-customBlack'/><p>About</p></section>} to="/about" currentLocation={location.pathname === "/about" ? 'bg-gray-100' : false}/>
                <LinkButton styleProp="menuHamburguerPages" text={<section className='flex space-x-5 items-center'><FaInfoCircle className='text-customBlack'/><p>Info</p></section>} to="/info" currentLocation={location.pathname === "/info" ? 'bg-gray-100' : false}/>
                <LinkButton styleProp="menuHamburguerPages" text={<section className='flex space-x-5 items-center'><SiHomeassistantcommunitystore className='text-customBlack'/><p>Restaurants</p></section>} to="/restaurants" currentLocation={location.pathname === "/restaurants" ? 'bg-gray-100' : false}/>
                <LinkButton styleProp="menuHamburguerPages" text={<section className='flex space-x-5 items-center'><PiNewspaperClippingFill className='text-customBlack'/><p>News</p></section>} to="/news" currentLocation={location.pathname === "/news" ? 'bg-gray-100' : false}/>
            </nav>
            <section className="py-8 px-24 flex justify-center " >
                <div className='bg-black h-0.5 w-6/12 opacity-40' ></div>
            </section>
        </Container>
    )
}


export default MenuHamburguer
