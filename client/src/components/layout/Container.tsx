//REACT
import React from "react"

interface ContainerProps{
    styleProp: string,
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = (props) => {
    return(
        <div className={`flex w-full ${props.styleProp}`} >
            {props.children}
        </div>
    )
}

export default Container