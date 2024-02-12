//REACT
import React, { useState, useEffect} from "react"

interface ButtonChangeProps{
    value1: React.ReactNode;
    value2: React.ReactNode;
    styleProp: string;
    onClick: (name: string) => void;
    name: string;
    activate: boolean|unknown
}   

const ButtonChange: React.FC<ButtonChangeProps> = ({value1, value2, styleProp, onClick, name, activate}) => {

    let [value, setValue] = useState<React.ReactNode>(value1)

    useEffect(() => {
        if(activate){
            setValue(value1)
            return  
        }
        setValue(value2)
    }, [activate])

    return (
        <button type="button" onClick={() => {onClick(name)}} className={styleProp}>{value}</button>
    )
}

export default ButtonChange