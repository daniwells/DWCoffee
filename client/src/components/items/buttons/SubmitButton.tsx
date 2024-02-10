//REACT
import React from "react"

interface SubmitButtonProps{
    value: string,
    styleProp: string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({value, styleProp}) => {
    
    let styles: Record<string, string> = {
        "brown":"p-4 cursor-pointer mt-10 w-56 bg-customBrown text-xl rounded-lg text-white rounded-10 hover:bg-customBrownDark transition-all duration-700 ease-in-out font-archivoBlack",
        "brown_small":"py-3 cursor-pointer w-48 bg-customBrown text-base rounded-lg text-white rounded-10 hover:bg-customBrownDark transition-all duration-300 ease-in-out font-archivoBlack"
    }

    let style: string = styles[styleProp]

    return ( 
        <input type="submit" className={`cursor-pointer ${style}`} value={value}/>
    )
} 

export default SubmitButton