import { Link } from "react-router-dom"


function MenuLink({text, to, currentLocation}){
    return (
        <Link className={`p-2 px-5 cursor-pointer ${currentLocation} hover:bg-gray-200 transition ease-in-out`} to={to}>
            <section className='flex space-x-5 items-center'>{text}</section>
        </Link>
    )

}
export default MenuLink