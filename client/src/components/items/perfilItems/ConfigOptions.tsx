//REACT
import React, {MouseEvent} from 'react'

//STYLE
import { IoIosArrowForward } from "react-icons/io";

interface configOptionsProps {
  title: string,
  description: string
  onClick: any
}

const ConfigOptions: React.FC<configOptionsProps> = ({title, description, onClick}) => {
  return (
    <section className='flex w-full items-center justify-between p-5 cursor-pointer hover:bg-gray-100 rounded-lg ' onClick={onClick} >
      <div className='justify-start text-justify ' >
        <h2 className=' text-bold font-arimo text-lg' >{title}</h2>
        <p className=' text-bold font-arimo text-xs' >{description}</p>
      </div>
      <IoIosArrowForward className='text-customBrownDark text-xl '/>
    </section>
  )
}

export default ConfigOptions