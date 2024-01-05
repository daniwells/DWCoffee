import Container from "../layout/Container"
import HeaderApply from "../layout/HeaderApply"

import { useState } from "react"  
import AcademicEducationDatas from "../items/applyItems/AcademicEducationDatas"
import PersonalDatas from '../items/applyItems/PersonalDatas'
import PreviousJobsDatas from"../items/applyItems/PreviousJobsDatas"
import SectionApply from "../items/applyItems/SectionApply"
import SubmitButton from"../items/SubmitButton"


function Apply() { 
  const [values, setValues] = useState({})

  function receiveValues(info, name) { 
    setValues({ 
      ...values,
      [name]: info 
    })
  }

  function sendDatas() { 
    fetch('http://127.0.0.1:5000/sendDatas', { 
      method: "POST", 
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(values)
    })
    .then(resp => resp.json())
    .then(data => { console.log(data)}
  )}  
  
  return (
    <Container style="flex-col bg-customBgApply"> 
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
          <SubmitButton text="Send Curriculum" style="mt-10 w-56 bg-customBrown text-xl rounded-lg text-white rounded-10 hover:bg-customBrownDark transition-all duration-700 ease-in-out font-archivoBlack"/> 
        </form>
      </main>
    </Container>
  )
} 

export default Apply


