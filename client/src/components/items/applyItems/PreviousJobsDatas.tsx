//REACT
import { IoAdd } from "react-icons/io5";
import {useState, useEffect} from "react"
import { GrFormSubtract } from "react-icons/gr";
import React, {ChangeEvent} from "react";

//COMPONENTS
import InputApply from "../inputs/Input";
import ButtonChange from "../buttons/ButtonChange";
import LongTextInputApply from "../inputs/LongTextInput";

//MYHOOKS
import useHistory from '../../../myHooks/useHistory'

interface PreviousJobsDatasProps {
    sendDatasFather: (info: object, name:string) => void,
}

interface jobsInterface {
    company:string,
    position:string,
    phoneCompany:string,
    cepCompany:string,
    country:string,
    state:string,
    city:string,
    street:string,
    postalCode:string,
    about:string
}

type jobType = Record<string, jobsInterface>

const PreviousJobsDatas: React.FC<PreviousJobsDatasProps> = ({sendDatasFather}) => {

    const [addOrDelete, setNewCourse] = useHistory({"job1":true})
    
    const [jobs, setJobs] = useState<jobType>({})

    function handleChange(event: (ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) & {target: {data_group: string;}}) {
        if (event && event.target) {
            setJobs(
                (prevState) => ({
                    ...prevState,
                    [event.target.data_group]:{...prevState[event.target.data_group],  [event.target.name]:event.target.value}
                })
            )
            return event 
        }
    }

    useEffect(() => {
        sendDatasFather(jobs, "PreviousJobs")
    }, [jobs])
    
    return (
        <>
            { Object.entries(addOrDelete).map( ([key, value]) => (
                    <section key={key} className="space-y-5 my-10">
                        <InputApply minLength={1} maxLength={255} styleProp="apply" data_group={key} name="company" text="Company" onChange={handleChange} value={jobs[key] ? jobs[key].company : ''} permitionValues="all"/>
                        <InputApply minLength={1} maxLength={255} styleProp="apply" data_group={key} name="position" text="Position" onChange={handleChange} value={jobs[key] ? jobs[key].position : ''} permitionValues="text" />
                        <InputApply minLength={1} maxLength={16} styleProp="apply" data_group={key} name="phoneCompany" text="Company phone" mask="(99) 99999-9999" onChange={handleChange} value={jobs[key] ? jobs[key].phoneCompany : ''}/>
                        <InputApply minLength={1} maxLength={11} styleProp="apply" data_group={key} name="cepCompany" text="Company CEP" mask="99999-999" onChange={handleChange} value={jobs[key] ? jobs[key].cepCompany : ''}/>
                        <InputApply minLength={1} maxLength={255} styleProp="apply" data_group={key} name="country" text="Company country" onChange={handleChange} value={jobs[key] ? jobs[key].country : ''} permitionValues="all"/>
                        <InputApply minLength={1} maxLength={255} styleProp="apply" data_group={key} name="state" text="Company state" onChange={handleChange} value={jobs[key] ? jobs[key].state : ''} permitionValues="all"/>
                        <InputApply minLength={1} maxLength={255} styleProp="apply" data_group={key} name="city" text="Company city" onChange={handleChange} value={jobs[key] ? jobs[key].city : ''} permitionValues="all"/>
                        <InputApply minLength={1} maxLength={255} styleProp="apply" data_group={key} name="street" text="Company street" onChange={handleChange} value={jobs[key] ? jobs[key].street : ''} permitionValues="all"/>
                        <InputApply minLength={1} maxLength={4} styleProp="apply" data_group={key} name="postalCode" text="Company postal code" mask="999" onChange={handleChange} value={jobs[key] ? jobs[key].postalCode : ''}/>
                        <LongTextInputApply 
                            name="about" 
                            data_group={key} 
                            text={"Can you tell us about the company too"} 
                            placeholder={'Please, tell your reason for exit'} 
                            handleChange={handleChange}
                            styleProp={'bg-transparent px-5 py-3 border-2 outline-none focus:border-black text-lg text-opacity-80 font-semibold border-black border-opacity-70 w-full rounded-lg placeholder:text-opacity-60 placeholder:text-black placeholder:arimo placeholder:font-bold placeholder:text-xl'}
                        />

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


export default PreviousJobsDatas
