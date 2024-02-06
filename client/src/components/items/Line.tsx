//REACT
import React from "react"

interface LineProps{
    styleProp: string
}

const Line: React.FC<LineProps> = ({styleProp}) => {
    return (
        <div className={`${styleProp}`}></div>
    )
}

export default Line