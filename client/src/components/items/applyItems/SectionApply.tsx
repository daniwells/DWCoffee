//REACT
import React from "react"

interface SectionApplyProps{
    children: React.ReactNode,
    title: string 
}

const SectionApply: React.FC<SectionApplyProps> = (props) => {

    return(
        <section className='w-full bg-customBgFormApply p-5 px-10 pr-12 border-t-0.3 border-b-0.3 border-opacity-50 border-customBrown my-5 drop-shadow-lg'>
            <h2 className='text-2xl font-archivoBlack opacity-90'>{props.title}</h2>
            {props.children}
        </section>
    )

}

export default SectionApply