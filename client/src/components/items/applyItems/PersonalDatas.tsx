//REACT
import { useState } from "react"
import React, {ChangeEvent} from "react"

//COMPONENTS
import InputApply from "../inputs/Input"
import LongTextInputApply from "../inputs/LongTextInput";

interface PersonalDatasProps {
  sendDatasFather: (info: object, name:string) => void,
}

interface valuesType {
  name:string,phone:string,date:string,cep:string,country:string,state:string,city:string,cpf:string
}

const PersonalDatas: React.FC<PersonalDatasProps> = ({sendDatasFather}) => {
  const [values, setValues] = useState<valuesType>({name:'',phone:'',date:'',cep:'',country:'',state:'',city:'',cpf:''})  

  function handleChange(event: ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>) {
    if (event && event.target) {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      })
      sendDatasFather(values, "PersonalDatas")
      return event;
    }
  }
      
  return (
    <>
      <section className="my-10 space-y-5" >
        <InputApply styleProp="apply" data_group="PersonalDatas" name="name" text="Full name" onChange={handleChange} value={values.name} type="text"/>
        <InputApply styleProp="apply" data_group="PersonalDatas" name="cpf" text="CPF" mask="999.999.999-99" onChange={handleChange} value={values.cpf}/>
        <InputApply styleProp="apply" data_group="PersonalDatas" name="phone" text="Phone" mask="(99) 99999-9999" onChange={handleChange} value={values.phone}/>
        <InputApply styleProp="apply" data_group="PersonalDatas" name="date" text="Date of birth" mask="99/99/9999" onChange={handleChange} value={values.date}/>
        <InputApply styleProp="apply" data_group="PersonalDatas" name="cep" text="CEP" mask="99999-999" onChange={handleChange} value={values.cep}/>
        <InputApply styleProp="apply" data_group="PersonalDatas" name="country" text="Country" onChange={handleChange} value={values.country} type="text"/>
        <InputApply styleProp="apply" data_group="PersonalDatas" name="state" text="State" onChange={handleChange} value={values.state} type="text"/>
        <InputApply styleProp="apply" data_group="PersonalDatas" name="city" text="City" onChange={handleChange} value={values.city} type="text"/>
        <LongTextInputApply 
          name="about" 
          data_group={"PersonalDatas"} 
          text={"Tell us about you in no less than two sentences."} 
          placeholder={'Please, tell us some about you"'} 
          handleChange={handleChange}
          styleProp={'bg-transparent px-5 py-3 border-2 outline-none focus:border-black text-lg text-opacity-80 font-semibold border-black border-opacity-70 w-full rounded-lg placeholder:text-opacity-60 placeholder:text-black placeholder:arimo placeholder:font-bold placeholder:text-xl'}
        />
      </section>
    </>
  )
}

export default PersonalDatas