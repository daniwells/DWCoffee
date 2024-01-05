function Container(props){
    return(
        <div className={`flex w-full ${props.style}`} >
            {props.children}
        </div>
    )
}

export default Container