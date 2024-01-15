//REACT
import React from "react"

interface SubmitButtonProps{
    value: string,
    style: string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({value, style}) => {

    return ( 
        <> 
            <input type="submit" className={`p-4 cursor-pointer ${style}`} value={value}/>
        </>
    )
} 

export default SubmitButton