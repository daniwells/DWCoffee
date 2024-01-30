function SubTittle(props){

    const currentStyleText = props.textStyle ? props.textStyle : 'text-3xl font-archivoBlack'
    const currentStyleLine = props.lineStyle ? props.lineStyle : 'bg-black w-full h-0.5 mt-3 '

    return (
        <section className={`flex flex-col justify-center w-full items-center ${props.style}`}>
            <h2 className={currentStyleText}>{props.text}</h2>
            <div className={currentStyleLine}></div>
        </section>
    )
}
export default SubTittle