//REACT
import React, { useState, useEffect, MouseEvent } from "react"
import { IoCloseOutline, IoAdd } from "react-icons/io5";

interface ButtonChangeProps{
    value1: React.ReactNode;
    value2: React.ReactNode;
    style: string;
    onClick: (name: string) => void;
    name: string;
    activate: boolean
}   

const ButtonChange: React.FC<ButtonChangeProps> = ({value1, value2, style, onClick, name, activate}) => {

    let [value, setValue] = useState<React.ReactNode>(value1)

    useEffect(() => {
        if(activate){
            setValue(value1)
            return  
        }
        setValue(value2)
    }, [activate])

    return (
        <button type="button" onClick={() => {onClick(name)}} className={style}>{value}</button>
    )
}

export default ButtonChange