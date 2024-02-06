//REACT
import { IoCloseOutline, IoAdd } from "react-icons/io5";
import { GrFormSubtract } from "react-icons/gr";
import { useState, useEffect } from "react"
import React, {ChangeEvent} from "react";
import StartAndFinishExperience from "./StartAndFinishExperience"

//COMPONENTS
import InputRadioApply from '../InputRadio'
import InputApply from "../Input";
import ButtonChange from "../ButtonChange";

//TYPES
import coursesInterface from '../../../types/types'

//MYHOOKS
import useHistory from '../../../myHooks/useHistory'


//////////////////////////////////////////////////////////////////////


interface PreviousCourseDatasProps{
    sendDatasFather: (info: object, name:string) => void,
}

type coursesType = Record<string, coursesInterface>

type connectDateCourseTypes = Record<string,{finalizate: string, connected: boolean}>

const AcademicEducationDatas: React.FC<PreviousCourseDatasProps> = ({sendDatasFather})=>{
    const [addOrDelete, setNewCourse] = useHistory({"course1":true})
    const [connectDateCourse, setConnectDateCourse] = useState<connectDateCourseTypes>({"course1":{"finalizate": "Y", "connected": false}})
    
    const [courses, setCourses] = useState<coursesType>({})
    const [radios, setRadios] =  useState(
        [
            {value: 'Y', id: 'finished', name: '', selected:false},
            {value: 'N', id: 'studying', name: '', selected:false},
        ]
    )

    function connectingDate(finalizate: string, connected: boolean, data_group: string){
        setConnectDateCourse((prevState) => ({
            ...prevState,
            [data_group]:{"finalizate": finalizate, "connected": connected}
        }))
    }
    
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
      
        let courseExists: boolean 
        for(const [keyCourses] of Object.entries(courses)){
            courseExists = false
            for(const [keyAddOrDelete] of Object.entries(addOrDelete)){
                if(keyAddOrDelete === keyCourses){
                    courseExists = true
                }
            }

            if(!courseExists){
                let coursesTemp = Object.entries(courses).filter(([key]) => key !== keyCourses)
                let objectCoursesTemp = {}

                for(const course of coursesTemp){
                    objectCoursesTemp = {...objectCoursesTemp, [course[0]]: course[1]}
                }
                setCourses(objectCoursesTemp)
            }  
        }
        sendDatasFather(courses, "AcademicEducation")
        
    }, [courses, addOrDelete])


    function handleOptionChange(event: ChangeEvent<HTMLInputElement> & {target: {data_group: string}}){
        if(event.target.name === `${event.target.data_group}/courseFinished`){
            connectingDate(event.target.value, true, event.target.data_group)

            const changeValue = (radios.map(prevState => ({
                ...prevState,       
                selected: event.target.value === prevState.value,
                name: event.target.name
            })))
            setRadios(changeValue)
            return changeValue
        }
       
    }
    
    return (
        <>
            {Object.entries(addOrDelete).map( ([key, value]) => (
                    <section key={key} className="space-y-5 my-10" >
                        <InputApply styleProp="apply" data_group={key} name="instituationName" text="Instituation name" onChange={handleChange} value={courses[key] ? courses[key].instituationName : ''} type="all" />
                        <InputApply styleProp="apply" data_group={key} name="course" text="Course" onChange={handleChange} value={courses[key] ? courses[key].course : ''} type="text" />
                        <InputApply styleProp="apply" data_group={key} name="instituationPhone" text="Phone" mask="(99) 99999-9999" onChange={handleChange} value={courses[key] ? courses[key].instituationPhone : ''}/>
                        <InputApply styleProp="apply" data_group={key} name="instituationCountry" text="Instituation Country" onChange={handleChange} value={courses[key] ? courses[key].instituationCountry : ''} type="all"/>
                        <InputApply styleProp="apply" data_group={key} name="instituationState" text="Instituation State" onChange={handleChange} value={courses[key] ? courses[key].instituationState : ''} type="all"/>
                        <InputApply styleProp="apply" data_group={key} name="instituationCity" text="Instituation City" onChange={handleChange} value={courses[key] ? courses[key].instituationCity : ''} type="all"/>
                        <InputApply styleProp="apply" data_group={key} name="instituationAdress" text="Adress Describe" onChange={handleChange} value={courses[key] ? courses[key].instituationAdress : ''} type="all"/>

                        
                        <section className="flex space-x-10 items-center">
                            <p className='text-xl font-arimo font-bold opacity-75 px-5'>Finished?</p>
                            <section className='flex space-x-5 items-center'>
                                {radios.map( input => (
                                    <InputRadioApply
                                        key={input.id+key}
                                        id={input.id+key}                        
                                        data_group={key} 
                                        value={input.value}
                                        nameVerify={input.name} 
                                        name={`${key}/courseFinished`} 
                                        changeLabel={<IoCloseOutline/>} 
                                        selected={input.selected} 
                                        onChange={handleChange}
                                        styleSelectOne="min-h-9 text-2xl font-arimo font-bold opacity-60 px-3 py-0.5 border-2 border-black cursor-pointer hover:opacity-100 rounded-md"
                                        styleSelectSecond="min-h-9 flex text-4xl px-0.5 font-arimo font-bold border-2 border-black cursor-pointer hover:opacity-60 rounded-md"
                                    />                  
                                ))}
                            </section>
                                                         
                        </section>
                        {connectDateCourse[key] ?
                            connectDateCourse[key].connected ?  
                                <StartAndFinishExperience 
                                    finalizate={connectDateCourse[key].finalizate}                                
                                    id={key}
                                    data_group={key}
                                    onChange={handleChange}
                                />
                            : false
                        : false}

                        <section className="pt-7" > 
                        <ButtonChange
                            value1={<IoAdd/>}
                            value2={<GrFormSubtract/>}
                            name={key}
                            activate={value} 
                            styleProp={"min-h-9 w-10 flex text-4xl px-0.5 font-arimo font-bold border-2 border-black cursor-pointer opacity-80 hover:opacity-100 rounded-md"}
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
