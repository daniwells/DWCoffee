function SectionApply(props){

    return(
        <section className='w-full bg-customBgFormApply p-5 px-10 pr-20 border-t-2 border-b-2 border-opacity-50 border-customBrown my-5 drop-shadow-lg'>
            <h2 className='text-2xl font-archivoBlack opacity-90'>{props.text}</h2>
            {props.children}
        </section>
    )

}

export default SectionApply