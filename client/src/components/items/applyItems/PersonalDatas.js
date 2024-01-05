import { useState } from "react"
import InputApply from "./InputApply"

function PersonalDatas({sendDatasFather}) {
  
  const [values, setValues] = useState({})  

  function handleChange(event) {
    if (event && event.target) {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      })
    sendDatasFather(values, "PersonalDatas")
    return event;
  }}
      
  return (
    <>
      <section className="my-10 space-y-5" >
        <InputApply name="name" text="Full name" onChange={handleChange} value={values.name} type="text" />
        <InputApply name="phone" text="Phone" mask="(99) 99999-9999" onChange={handleChange} value={values.phone}/>
        <InputApply name="date" text="Date of birth" mask="99/99/9999" onChange={handleChange} value={values.date}/>
        <InputApply name="cep" text="CEP" mask="99999-999" onChange={handleChange} value={values.cep}/>
        <InputApply name="cpf" text="CPF" mask="999.999.999-99" onChange={handleChange} value={values.cpf}/>
        <section>
          <textarea name="about" onChange={handleChange} cols="5" rows="10" placeholder="Please, tell us some about you" className='bg-transparent px-5 py-3 border-2  outline-none focus:border-black text-lg text-opacity-80 font-semibold border-black border-opacity-70 w-full rounded-lg placeholder:text-opacity-60 placeholder:text-black placeholder:arimo placeholder:font-bold placeholder:text-xl'></textarea>
          <p className='text-base font-arimo font-semibold text-justify w-full pr-10 pl-1' >Tell us about you in no less than two sentences.</p>
        </section>
      </section>
    </>
  )
}

export default PersonalDatas