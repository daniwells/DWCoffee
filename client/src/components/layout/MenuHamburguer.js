import Container from "./Container"
import LinkMennu from '../items/LinkMenu'
import { Link, useLocation } from "react-router-dom"
import { IoHome, IoNewspaper, IoBook} from "react-icons/io5";
import { SiCoffeescript, SiHomeassistantcommunitystore } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa";
import { PiNewspaperClippingFill } from "react-icons/pi";

function MenuHamburguer({display}){

    const location = useLocation()
    return (
        <Container style={`flex-col overflow-hidden -z-10 ${display} transition-all duration-500`} >
            <section className='bg-customBlack flex items-center justify-center p-5 h-1/4 w-full border-t-2 border-t-customYellowLight  ' >
                <section className='text-white flex space-x-10'>
                    <Link className="cursor-pointer hover:text-customYellowLight" >LOG IN</Link>
                    <div className='bg-white h-12/12 w-0.5'></div>
                    <Link className="cursor-pointer hover:text-customYellowLight" >REGISTER</Link>
                </section>
            </section>
            <nav className=" mt-5 flex flex-col" >
                <LinkMennu text={<><IoHome className='text-customBlack'/><p>Home</p></>} to="/" currentLocation={location.pathname === "/" ? 'bg-gray-100' : false}/>
                <LinkMennu text={<><SiCoffeescript className='text-customBlack'/><p>Coffee</p></>} to="/coffee" currentLocation={location.pathname === "/coffee" ? 'bg-gray-100' : false} />
                <LinkMennu text={<><IoNewspaper className='text-customBlack'/><p>Apply</p></>} to="/apply" currentLocation={location.pathname === "/apply" ? 'bg-gray-100' : false}/>
                <LinkMennu text={<><IoBook className='text-customBlack'/><p>About</p></>} to="/about" currentLocation={location.pathname === "/about" ? 'bg-gray-100' : false}/>
                <LinkMennu text={<><FaInfoCircle className='text-customBlack'/><p>Info</p></>} to="/info" currentLocation={location.pathname === "/info" ? 'bg-gray-100' : false}/>
                <LinkMennu text={<><SiHomeassistantcommunitystore className='text-customBlack'/><p>Restaurants</p></>} currentLocation={location.pathname === "/restaurants" ? 'bg-gray-100' : false}/>
                <LinkMennu text={<><PiNewspaperClippingFill className='text-customBlack'/><p>News</p></>} currentLocation={location.pathname === "/news" ? 'bg-gray-100' : false}/>
            </nav>
            <section className=" py-14 px-5" >
                <div className='bg-black h-0.5 w-12/12' ></div>
            </section>
        </Container>
    )
}

export default MenuHamburguer