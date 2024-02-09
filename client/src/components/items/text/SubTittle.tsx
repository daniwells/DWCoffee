//REACT
import React from "react"

const SubTittle: React.FC<Record<string, string>> = (props)=>{
    
    const currentStyleText = props.textStyle ? props.textStyle : 'text-3xl font-archivoBlack'
    const currentStyleLine = props.lineStyle ? props.lineStyle : 'bg-black w-20 h-0.5 mt-3'

    return (
        <section className={`flex flex-col justify-center w-full items-center ${props.styleProp}`}>
            <h2 className={currentStyleText}>{props.text}</h2>
            <div className={currentStyleLine}></div>
        </section>
    )
}
export default SubTittle