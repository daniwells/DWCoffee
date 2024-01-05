import { IoAdd } from "react-icons/io5";
import {useState } from "react"
import InputApply from "./InputApply";
import { GrFormSubtract } from "react-icons/gr";
import ButtonChange from "../ButtonChange";
import LongTextInputApply from "./LongTextInputApply";
import { v4 as uuid } from 'uuid'

function PreviousJobsDatas({sendDatasFather}){

    const [courses, setCourses] = useState({})

    const [addOrDelete, setAddOrDelete] = useState({"course1":true})
    const [countButtons, setCountButtons] = useState(2)

    function handleChange(event) {
        if (event && event.target) {
            setCourses(
                (prevState) => ({
                    ...prevState,
                    [event.target.data_group]:{...prevState[event.target.data_group],  [event.target.name]:event.target.value}
                })
            )
            sendDatasFather(courses, "PreviousJobs")
            console.log(courses)
            return event 
        }
    }

    function addCourse(name){
        let exist = false
        Object.keys(addOrDelete).map((key) => { exist = key === name+1 ?  true : false})
    
        if(Object.keys(addOrDelete).length < 5 && exist===false){
            name = name.slice(0, -1)
            name = name + countButtons
            setAddOrDelete(prevState => ({...prevState, [name]:true}))
            setCountButtons(prevState => prevState + 1)
        }
    }
    
    function decreaseCourse(proxButton){
        setAddOrDelete((prevState) => {
            const { [proxButton]: removedValue, ...rest } = prevState;
            
            return rest;
        });
        setCountButtons(prevState => prevState - 1)
        
    }
    
    function setNewCourse(name){
        let falseOrTrue = false 

        const listKeys = Object.keys(addOrDelete)
        let buttonKey = listKeys.indexOf(name)
        let proxButton = listKeys[buttonKey+1] ? listKeys[buttonKey+1] : false
    
        falseOrTrue = addOrDelete[name]
        setAddOrDelete(prevState => ({...prevState, [name]: proxButton ? addOrDelete[name] : !addOrDelete[name]}))
                
        if(falseOrTrue){
            addCourse(name)
        }else{
            decreaseCourse(proxButton)
            setAddOrDelete(prevState => ({...prevState, [name]: listKeys[buttonKey+2] ? addOrDelete[name] : true})) 
        }
    }
    
    return (
        <>
            { Object.entries(addOrDelete).map( ([key, value]) => (
                    <section key={uuid()} className="space-y-5 my-10">
                        <InputApply data_group={key} name="company" text="Company" onChange={handleChange} value={courses[key] ? courses[key].company : ''}/>
                        <InputApply data_group={key} name="position" text="Position" onChange={handleChange} value={courses[key] ? courses[key].position : ''} type="text" />
                        <InputApply data_group={key} name="phoneCompany" text="Company's phone" mask="(99) 99999-9999" onChange={handleChange} value={courses[key] ? courses[key].phoneCompany : ''}/>
                        <InputApply data_group={key} name="cepCopany" text="Company's CEP" mask="99999-999" onChange={handleChange} value={courses[key] ? courses[key].cepCopany : ''}/>
                        <LongTextInputApply key={uuid()} name="about" data_group={key} text={"Can you tell us about the company too"} placeholder={'Please, tell your reason for exit'} handleChange={handleChange}/>

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


export default PreviousJobsDatas