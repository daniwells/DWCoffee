//REACT
import React from "react"

interface LineProps{
    style: string
}

const Line: React.FC<LineProps> = ({style}) => {
    return (
        <div className={`${style}`}></div>
    )
}

export default Line