import { useState, useEffect } from "react"

function ButtonChange({value1, value2, style, onClick, name, activate}){

    let [value, setValue] = useState(value1)

    useEffect(() => {
        if(activate){
            setValue(value1)
            return  
        }
        setValue(value2)
    }, [activate])
   

    return (
        <p type="reset" onClick={() => {onClick(name)}} value={value} className={style}>{value}</p>
    )
}

export default ButtonChange