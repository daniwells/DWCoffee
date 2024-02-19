//REACT
import React, {MouseEvent} from 'react'

interface ButtonProps{
    children: React.ReactNode,
    styleProp?: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => any;
}

const Button: React.FC<ButtonProps> = ({children, styleProp, onClick}) => {
    return (
        <button className={`text-mb rounded-xl font-archivoBlack ${styleProp}`} onClick={onClick}>{children}</button>    
    )
}

export default Button
