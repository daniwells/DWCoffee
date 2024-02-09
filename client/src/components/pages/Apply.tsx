//REACT
import { useState } from "react" 
import React, {ChangeEvent} from "react"

//STYLE
import { BiSolidMessageAltCheck } from "react-icons/bi";

//COMPONENTS
import AcademicEducationDatas from "../items/applyItems/AcademicEducationDatas"
import PersonalDatas from '../items/applyItems/PersonalDatas'
import PreviousJobsDatas from"../items/applyItems/PreviousJobsDatas"
import SectionApply from "../items/applyItems/SectionApply"
import SubmitButton from"../items/buttons/SubmitButton"
import Button from "../items/buttons/Button"
import PopUp from "../items/PopUp"
import Container from "../layout/Container"
import HeaderApply from "../layout/HeaderApply"

const Apply = () => { 
  const [values, setValues] = useState({})

  function receiveValues(info:object, name:string) { 
    teste(info, name)
  }

  function teste(info:object, name:string){
    setValues({ 
      ...values,
      [name]: info 
    })
  }

  function sendDatas(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault()
    handleSubmit(values)
  }

  function handleSubmit(datas: {}){
    setTimeout(() => {
      fetch('http://127.0.0.1:5000/sendDatasCurriculum', { 
        method: "POST", 
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(datas)
      })
      .then(resp => resp.json())
      .then(data => { console.log(data)})
    }, 1000)
    activePopUp()
  }
  
  const [isOpen, setIsOpen] = useState(false)
  function activePopUp(){
    setIsOpen(!isOpen)
  }

  return (
    <Container styleProp="flex-col bg-customBgApply"> 
      <PopUp state={isOpen} themeColor="red">
        <BiSolidMessageAltCheck className=" text-customGreenOpacity w-32 h-32 "/>
        <h2 className=" text-customGreenOpacity font-archivoBlack text-2xl" >Successful</h2>
        <p className="text-justify opacity-90 py-5 " >We already received your curriculum! If you want to modify it you can send a new one. </p>
        <Button styleProp={'bg-customYellow hover:bg-customBrown hover:opacity-80 transition-all duration-400 ease-in-out'} onClick={activePopUp}>BACK</Button>
      </PopUp> 
      <HeaderApply/> 
      <main className='mb-24'>      
        <form onSubmit={sendDatas} className="flex flex-col justify-center items-center"> 
          <SectionApply title="About you"> 
            <PersonalDatas sendDatasFather={receiveValues}/> 
          </SectionApply> 
          <SectionApply title="Education" >  
            <AcademicEducationDatas sendDatasFather={receiveValues}/> 
          </SectionApply> 
          <SectionApply title="Previous Jobs"> 
            <PreviousJobsDatas sendDatasFather={receiveValues}/> 
          </SectionApply>
          <SubmitButton 
            value="Send Curriculum"
            styleProp="mt-10 w-56 bg-customBrown text-xl rounded-lg text-white rounded-10 hover:bg-customBrownDark transition-all duration-700 ease-in-out font-archivoBlack"
          /> 
        </form>
      </main>
    </Container>
  )
} 

export default Apply


