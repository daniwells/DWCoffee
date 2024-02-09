//REACT
import React, {MouseEvent} from 'react'

interface ButtonProps{
    children: React.ReactNode,
    styleProp?: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({children, styleProp, onClick}) => {
    return (
        <button className={`flex justify-center text-sm p-3 px-8 rounded-xl text-white font-archivoBlack ${styleProp}`} onClick={onClick}>{children}</button>    
    )
}

export default Button
