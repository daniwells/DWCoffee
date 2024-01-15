//REACT
import { IoCloseOutline, IoAdd } from "react-icons/io5";
import { GrFormSubtract } from "react-icons/gr";
import { useState, useEffect } from "react"
import React, {ChangeEvent} from "react";

//COMPONENTS
import InputRadioApply from '../InputRadio'
import InputApply from "../Input";
import ButtonChange from "../ButtonChange";

interface PreviousJobsDatasProps {
    sendDatasFather: (info: object, name:string) => void,
}

interface coursesInterface {
    instituationName:string,
    course:string,
    instituationPhone:string,
    instituationAdress:string
}

type coursesType = Record<string, coursesInterface>
type myCourses = Record<string,boolean>

const AcademicEducationDatas: React.FC<PreviousJobsDatasProps> = ({sendDatasFather})=>{

    const [courses, setCourses] = useState<coursesType>({})
    const [radios, setRadios] =  useState(
        [
            {value: 'Y', id: 'finished', name: '', selected:false},
            {value: 'N', id: 'studying', name: '', selected:false},
        ]
    )

    const [addOrDelete, setAddOrDelete] = useState<myCourses>({"course1":true})
    const [countButtons, setCountButtons] = useState(2)
    
    

    function handleChange(event: ChangeEvent<HTMLInputElement> & {target: {data_group: string}}) {   
        handleOptionChange(event)

        if (event && event.target) {
            setCourses(
                (prevState) => ({
                    ...prevState,
                    [event.target.data_group]:{...prevState[event.target.data_group], [event.target.name]:event.target.value}
                })
            )
        }
    }

    useEffect(() => {
        sendDatasFather(courses, "AcademicEducation")    
    }, [courses])

    function handleOptionChange(event: ChangeEvent<HTMLInputElement> & {target: {data_group: string}}){
        
        const changeValue = (radios.map(prevState => ({
            ...prevState,       
            selected: event.target.value === prevState.value,
            name: event.target.name
        })))
        setRadios(changeValue)
        return changeValue
    }

    function addCourse(name: string){
        let exist = false
        Object.keys(addOrDelete).map((key) => { exist = key === name+1 ?  true : false})
    
        if(Object.keys(addOrDelete).length < 5 && exist===false){
            name = name.slice(0, -1)
            name = name + countButtons
            setAddOrDelete(prevState => ({...prevState, [name]:true}))
            setCountButtons(prevState => prevState + 1)
        }
    }
 
    function decreaseCourse(proxButton: string){
        setAddOrDelete((prevState) => {
            const { [proxButton]: removedValue, ...rest } = prevState;
            
            return rest;
        });
        setCountButtons(prevState => prevState - 1)
        
    }
   
    function setNewCourse(name:string){
        let falseOrTrue = false 

        const listKeys = Object.keys(addOrDelete)
        let buttonKey = listKeys.indexOf(name)
        let proxButton = listKeys[buttonKey+1] ? listKeys[buttonKey+1] : false
  
        falseOrTrue = addOrDelete[name]
        setAddOrDelete(prevState => ({...prevState, [name]: proxButton ? addOrDelete[name] : !addOrDelete[name]}))
                
        if(falseOrTrue){
            addCourse(name)
        }else{
            if(proxButton){
                decreaseCourse(proxButton)
                setAddOrDelete(prevState => ({...prevState, [name]: listKeys[buttonKey+2] ? addOrDelete[name] : true}))
            }
        }
    }
    
    return (
        <>
            { Object.entries(addOrDelete).map( ([key, value]) => (
                    <section key={key} className="space-y-5 my-10" >
                        <InputApply style="apply" data_group={key} name="instituationName" text="Instituation name" onChange={handleChange} value={courses[key] ? courses[key].instituationName : ''} type="all" />
                        <InputApply style="apply" data_group={key} name="course" text="Course" onChange={handleChange} value={courses[key] ? courses[key].course : ''} type="text" />
                        <InputApply style="apply" data_group={key} name="instituationPhone" text="Phone" mask="(99) 99999-9999" onChange={handleChange} value={courses[key] ? courses[key].instituationPhone : ''}/>
                        <InputApply style="apply" data_group={key} name="instituationAdress" text="Adress" onChange={handleChange} value={courses[key] ? courses[key].instituationAdress : ''} type="all"/>

                        <section className="flex space-x-10 items-center">
                            <p className='text-xl font-arimo font-bold opacity-75 px-5'>Finished?</p>
                            <section className='flex space-x-5 items-center'>
                                {radios.map( input => (                       
                                    <InputRadioApply
                                        id={input.id+key}                        
                                        data_group={key} 
                                        value={input.value}
                                        nameVerify={input.name} 
                                        name={key} 
                                        changeLabel={<IoCloseOutline/>} 
                                        selected={input.selected} 
                                        onChange={handleChange}
                                        styleSelectOne="min-h-9 text-2xl font-arimo font-bold opacity-60 px-3 py-0.5 border-2 border-black cursor-pointer hover:opacity-100 rounded-md"
                                        styleSelectSecond="min-h-9 flex text-4xl px-0.5 font-arimo font-bold border-2 border-black cursor-pointer hover:opacity-60 rounded-md"
                                    />
                                ))}
                            </section>                                
                        </section>
                        <section className="pt-7" > 
                        <ButtonChange 
                            value1={<IoAdd/>} 
                            value2={<GrFormSubtract/>}
                            name={key}
                            activate={value} 
                            style={"min-h-9 w-10 flex text-4xl px-0.5 font-arimo font-bold border-2 border-black cursor-pointer opacity-80 hover:opacity-100 rounded-md"}
                            onClick={setNewCourse}
                        />
                        </section>
                    </section>
                ))
            }
        </>
    )
}

export default AcademicEducationDatas