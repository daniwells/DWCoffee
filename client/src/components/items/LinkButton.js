import { Link } from 'react-router-dom'
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime"
import { Fragment as _Fragment } from "react/jsx-dev-runtime"

function LinkButton({text, style, to}) { 
    const yellow = 'bg-customYellow text-white text-sm ${style} min-w-56 hover:opacity-75 hover:bg-customBrown transition-all duration-700 ease-in-out'
    const brown = 'bg-customBrown text-white ${style} min-w-56 opacity-75 hover:opacity-100 hover:bg-customBrown transition-all duration-700 ease-in-out'  
    let currentStyle = '' 
    switch (style) {
        case 'yellow':
            currentStyle = yellow
        break;    
        case 'brown':
            currentStyle = brown
        break;    
        default: 
            currentStyle = yellow      
        break;

    }
    
    return <><Link className={`flex justify-center text-sm p-3 rounded-2xl font-archivoBlack ${currentStyle}`} to={to}>{text}</Link></>}

export default LinkButton
               
                    
                        
                        