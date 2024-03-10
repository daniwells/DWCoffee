//REACT
import React from 'react'

//STYLE
import { IoMdArrowDropdown } from "react-icons/io";

interface SelectProps {
    options: string[],
    styleSelect: string,
    id: string
}

const Select: React.FC<SelectProps> = ({options, styleSelect, id}) => {
  return (
    <section className='relative'>
        <select id={id} className={`${styleSelect} w-full cursor-pointer appearance-none leading-tight focus:outline-none`} >
            {options.map( (option) => (
                <option value={option}>{option}</option>
            ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-gray-700">
            <IoMdArrowDropdown className='fill-current h-5 w-5' />
        </div>
    </section>
   
  )
}

export default Select
