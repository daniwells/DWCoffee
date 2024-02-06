//REACT
import React from "react"

interface SubmitButtonProps{
    value: string,
    styleProp: string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({value, styleProp}) => {

    return ( 
        <> 
            <input type="submit" className={`p-4 cursor-pointer ${styleProp}`} value={value}/>
        </>
    )
} 

export default SubmitButton