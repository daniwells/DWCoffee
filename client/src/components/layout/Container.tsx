//REACT
import React from "react"

interface ContainerProps{
    style: string,
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = (props) => {
    return(
        <div className={`flex w-full ${props.style}`} >
            {props.children}
        </div>
    )
}

export default Container