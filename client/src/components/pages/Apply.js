import Container from "../layout/Container"
import HeaderApply from "../layout/HeaderApply"

import { useState } from "react"  
import AcademicEducationDatas from "../items/applyItems/AcademicEducationDatas"
import PersonalDatas from '../items/applyItems/PersonalDatas'
import PreviousJobsDatas from"../items/applyItems/PreviousJobsDatas"
import SectionApply from "../items/applyItems/SectionApply"
import SubmitButton from"../items/SubmitButton"
import Button from "../items/Button"
import PopUp from "../items/PopUp"

import { BiSolidMessageAltCheck } from "react-icons/bi";

function Apply() { 
  const [values, setValues] = useState({})

  function receiveValues(info, name) { 
    setValues({ 
      ...values,
      [name]: info 
    })
    console.log(values)
  }

  function sendDatas(event){
    event.preventDefault()
    handleSubmit(values)
  }

  function handleSubmit(datas){
    setTimeout(() => {
      fetch('http://127.0.0.1:5000/sendDatas', { 
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
    <Container style="flex-col bg-customBgApply"> 
      <PopUp state={isOpen}>
        <BiSolidMessageAltCheck className=" text-customGreenOpacity w-32 h-32 "/>
        <h2 className=" text-customGreenOpacity font-archivoBlack text-2xl" >Successful</h2>
        <p className="text-justify opacity-90 py-5 " >We already received your curriculum! If you want to modify it you can send a new one. </p>
        <Button style={'bg-customYellow hover:bg-customBrown hover:opacity-80 transition-all duration-400 ease-in-out'} onClick={activePopUp}>BACK</Button>
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
            text="Send Curriculum"
            style="mt-10 w-56 bg-customBrown text-xl rounded-lg text-white rounded-10 hover:bg-customBrownDark transition-all duration-700 ease-in-out font-archivoBlack"
          /> 
        </form>
      </main>
    </Container>
  )
} 

export default Apply


