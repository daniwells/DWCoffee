import React, {ChangeEvent} from 'react'
import Line from '../Line';


export interface InputExtendChangeEvent extends ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
      data_group: string;
  };
}

interface StartAndFinishExperienceProps {
    finalizate: string
    id: string
    data_group: string
    onChange: (event: InputExtendChangeEvent) => void;
}

const StartAndFinishExperience: React.FC<StartAndFinishExperienceProps> = ({finalizate, id, onChange, data_group}) => {
  function handleChange(event: InputExtendChangeEvent) {
    onChange({
        ...event, 
        target:{
          ...event.target,
          data_group,
          name: event.target.name,
          value: event.target.value
        }
    })
  }

  return (
    <section className='flex flex-col space-y-5'>
        <section className='flex  items-center space-x-5 '>
          <label htmlFor={`${id}/id_start`} className='opacity-80 text-2xl font-semibold w-28 cursor-pointer ' >Start</label>
          <input type="date" onChange={handleChange}  data-group={data_group} name='date_start' id={`${id}/id_start`} placeholder='Start Date' className='cursor-pointer bg-transparent px-5 py-3 border-2 outline-none hover:border-black text-lg text-opacity-80 font-semibold border-black border-opacity-70 w-full rounded-lg placeholder:text-opacity-60 placeholder:text-black placeholder:font-arimo placeholder:font-bold placeholder:text-xl'/>
        </section>
        {finalizate === "Y" ? 
          <section className='flex  items-center space-x-5'>
            <label htmlFor={`${id}/id_end`} className='opacity-80 text-2xl font-semibold w-28 cursor-pointer' >End</label> 
            <input type="date" onChange={handleChange} data-group={data_group} name='date_end'id={`${id}/id_end`} placeholder='Start Date' className='cursor-pointer bg-transparent px-5 py-3 border-2 outline-none hover:border-black text-lg text-opacity-80 font-semibold border-black border-opacity-70 w-full rounded-lg placeholder:text-opacity-60 placeholder:text-black placeholder:font-arimo placeholder:font-bold placeholder:text-xl'/> 
          </section>
        : false}
        <section>
          <Line styleProp=" w-full h-0.5 bg-gray-700 mt-5" />
        </section>
    </section>
  )
}

export default StartAndFinishExperience
