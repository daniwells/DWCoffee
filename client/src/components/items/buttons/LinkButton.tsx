//REACT
import { Link } from 'react-router-dom'
import React from 'react'


interface LinkButtonProps{
    text: React.ReactNode,
    styleProp: string,
    to: string,
    currentLocation?: string | boolean 
}

const LinkButton: React.FC<LinkButtonProps> = ({text, styleProp, to, currentLocation}) => {
    let styles: Record<string, string> = {
        "home":"flex justify-center text-sm p-3 rounded-lg font-archivoBlack bg-customYellow text-white min-w-56 hover:opacity-75 hover:bg-customBrown transition-all duration-500 ease-in-out",
        "about":"flex justify-center w-2/4 text-sm p-2 rounded-2xl font-archivoBlack bg-customBrown text-white opacity-75 hover:opacity-100 hover:bg-customBrown transition-all duration-700 ease-in-out",
        "transparent":" flex justify-center text-base font-arimo text-customBlack2 transition-all duration-700 ease-in-out hover:text-customBrown w-full ",
        "menuHamburguerPages":`p-2 px-5 cursor-pointer ${currentLocation} hover:bg-gray-200 transition ease-in-out`,
        "menuRegisterAndLogin":"cursor-pointer hover:text-customYellowLight",
        "menuHamburguerLogin":"grid grid-cols-3 grid-rows-2 items-center justify-center px-5 py-5 cursor-pointer hover:text-customYellowLight text-white"
    }

    let style: string = styles[styleProp]

    return <Link className={`${style}`} to={to}>{text}</Link>
}
export default LinkButton
               
                    
                        
                        