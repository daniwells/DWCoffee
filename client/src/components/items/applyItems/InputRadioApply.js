import { useState, useEffect } from "react"

function InputRadioApply({name, value, selected, changeLabel, onChange, data_group, id, nameVerify}){
    const styleSelectOne = "min-h-9 text-2xl font-arimo font-bold opacity-60 px-3 py-0.5 border-2 border-black cursor-pointer hover:opacity-100 rounded-md"
    const styleSelectSecond = "min-h-9 flex text-4xl px-0.5 font-arimo font-bold border-2 border-black cursor-pointer hover:opacity-60 rounded-md "

    let [conclusionCourse, setConclusionCourse] = useState(value)
    let [style_conclusionCourse, setStyle_conclusionCourse] = useState(styleSelectOne)

    useEffect(() => {
        if(name === nameVerify){
            if(selected){
                setConclusionCourse(changeLabel) 
                setStyle_conclusionCourse(styleSelectSecond)
                return
            }else{
                setConclusionCourse(value) 
                setStyle_conclusionCourse(styleSelectOne)
            }
        }
       
    }, [selected]  
    )

    function handleChange(event) {
        onChange(
            {
                ...event,
                target: {
                    data_group,
                    value,
                    name
                }
              
            }
        )
    }

    return (
        <section className="flex" >
            <label htmlFor={id} className={style_conclusionCourse}>{conclusionCourse}</label>
            <input type="radio" id={id} data-group={data_group} name={name} className="hidden" value={value} onChange={handleChange}/>
        </section>
    )
}

export default InputRadioApply