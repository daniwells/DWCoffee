//REACT
import { useState } from "react" 
import React, {ChangeEvent} from "react"

//HOOKS
import useOpen from "../../myHooks/useOpen";

//TYPES
import { stringObject } from "../../types/types";

//COMPONENTS
import AcademicEducationDatas from "../items/applyItems/AcademicEducationDatas"
import PersonalDatas from '../items/applyItems/PersonalDatas'
import PreviousJobsDatas from"../items/applyItems/PreviousJobsDatas"
import SectionApply from "../items/applyItems/SectionApply"
import SubmitButton from"../items/buttons/SubmitButton"
import PopUp from "../items/PopUps/PopUpLogs"
import Container from "../layout/Container"
import HeaderApply from "../layout/HeaderApply"

const Apply = () => { 
  const [values, setValues] = useState({})
  const [isOpen, activePopUp] = useOpen(false)
  const [responseLog, setResponseLog] = useState<stringObject>({
    "message":"You was registered with success",
    "themeColor":"customGreenOpacity"
  })

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
      .then(data => { 
        console.log(data)
        
        let themeColor = data === "We already received your curriculum!! If you want to modify it you can send a new one." ? "customGreenOpacity" : "customRedOpacity"
        setResponseLog({"message":data, "themeColor":themeColor})
        activePopUp()

      })
    }, 1000)
  }

  return (
    
    <Container styleProp="flex-col bg-customBgApply"> 
      <PopUp state={isOpen} themeColor={responseLog["themeColor"]} message={responseLog["message"]} onClick={activePopUp}/>
        
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
            styleProp="brown"
          /> 
        </form>
      </main>
    </Container>
  )
} 

export default Apply


