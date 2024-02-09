//REACT
import { Link } from 'react-router-dom'
import React from 'react'

interface LinkButtonProps{
    text: React.ReactNode,
    styleProp: string,
    to: string 
}

const LinkButton: React.FC<LinkButtonProps> = ({text, styleProp, to}) => { 
    //const YELLOW = 'bg-customYellow text-white text-sm ${style} min-w-56 hover:opacity-75 hover:bg-customBrown transition-all duration-700 ease-in-out'
    //const BROWN = 'bg-customBrown text-white min-w-56 opacity-75 hover:opacity-100 hover:bg-customBrown transition-all duration-700 ease-in-out'  
    
    return <Link className={`flex justify-center text-sm p-3 rounded-2xl font-archivoBlack ${styleProp}`} to={to}>{text}</Link>
}
export default LinkButton
               
                    
                        
                        