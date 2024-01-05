function Line({width, height, color}){
    return (
        <div className={`${width} ${height} ${color}`}></div>
    )
}

export default Line