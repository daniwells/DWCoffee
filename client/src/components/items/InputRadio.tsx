//REACT
import { useState, useEffect } from "react"
import React, {ChangeEvent} from "react"

interface InputRadioApplyProps{
    name: string,
    value: string,
    selected: boolean,
    changeLabel: React.ReactNode,
    onChange: (event: InputRadioExtendChangeEvent) => void,
    data_group: string,
    id: string,
    nameVerify: string,
    styleSelectOne: string,
    styleSelectSecond: string
}  

interface InputRadioExtendChangeEvent extends ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & {
        data_group: string;
    }
}

const InputRadioApply: React.FC<InputRadioApplyProps> = ({name, value, selected, changeLabel, onChange, data_group, id, nameVerify, styleSelectOne, styleSelectSecond})=>{

    let [conclusionCourse, setConclusionCourse] = useState<React.ReactNode | string>(value)
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

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        onChange(
            {
                ...event,
                target: {
                    ...event.target,
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