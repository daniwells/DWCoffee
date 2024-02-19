//REACT
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useLocation } from 'react-router-dom';
import React from 'react';

//STYLE
import logo from '../images/logo.png'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";

//COMPONENTS
import MenuHamburguer from './MenuHamburguer'
import Container from './Container';

const Header = () => {
    const location = useLocation().pathname
   
    let [menuExist, setMenuExist] = useState(false)
   
    function activeMenu(){
        setMenuExist(preValue => !preValue)
    }


    return (
        <>
            {location !== '/apply' ?
                <section>
                    <Container styleProp={'bg-customBlack min-h-10'}>  
                        <div className={'bg-customYellow flex w-3/12 items-center justify-center p-1'}><Link to="/"><img src={logo} className={'h-20 cursor-pointer'} alt="Web site's logo"></img></Link></div>
                        <div className={'w-9/12 flex'}>
                            <h1 className={'justify-center flex items-center h-full font-fondamento text-customYellowLight text-3xl p-5'}>DWCoffee</h1>
                            <div className={'flex items-center ml-5'}>
                                <ul className={'flex font-archivoBlack text-2xl text-white space-x-5 cursor-pointer'}>
                                    <li><AiOutlineMenu className={"w-7 h-7 hover:text-customYellowLight transition-all duration-300 ease-in-out"} onClick={activeMenu} /></li>
                                    <li><IoCartOutline className={"w-7 h-7 hover:text-customYellowLight transition-all duration-300 ease-in-out"}/></li>
                                </ul>  
                            </div>
                        </div>
                    </Container>
                    <section className="z-0  " >
                        {menuExist ? <MenuHamburguer display={"h-128 "}/> : <MenuHamburguer display={'opacity-0 h-0'} />}
                    </section>
                </section>
            :false}
               
        </>
    )
}


export default Header