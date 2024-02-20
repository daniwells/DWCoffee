//REACT
import React, {useState, useEffect} from "react"

//COMPONENTS
import ConfigOptions from '../items/perfilItems/ConfigOptions'
import Line from "../items/text/Line"
import PopUp from "../items/PopUps/PopUp"
import Button from "../items/buttons/Button"

//TYPES
import { stringObject } from "types"

//HOOKS
import useOpen from "../../myHooks/useOpen"

//STYLES
import { IoIosLogOut } from "react-icons/io";

const Perfil:React.FC = () => {
    const [username, setUsername] = useState<stringObject>({"name":"","email":""})
    const [isOpen, activePopUp] = useOpen(false)

    useEffect(() => {
        fetch('http://127.0.0.1:5000/get_session', {
            method: "GET",
            headers: {'Content-type': 'application/json'},
            credentials: 'include' 
        })
        .then(resp => resp.json())
        .then(datas => {
            setUsername({"name":datas["name"],"email":datas["email"]})
        })
    }, [])

    function logOut(){
        fetch('http://127.0.0.1:5000/logout', {
            method: "HEAD",
            credentials: 'include' 
        })
        window.location.href = "http://127.0.0.1:3000/login"
    }

    return (
        <>  
            {isOpen ?
                <PopUp state={isOpen}>
                    <Line styleProp="h-3 w-full rounded-t-md bg-customBrown "/>
                    <section className='flex flex-col p-5 px-10 mb-6 mt-6 items-center space-y-5' >
                        <IoIosLogOut className="text-customBrown w-36 h-36 opacity-80"/>
                        <div className="text-center px-20" >
                            <h2 className={`font-arimo font-bold text-3xl text-customBrown`}>Log Out</h2>
                            <p className="text-center font-arimo text-mb opacity-90 py-3">Are you sure you want to log out from DWCoffee?</p>
                        </div>
                        <div className="flex gap-5 p-5 px-20 ">
                            <Button onClick={activePopUp} styleProp="flex justify-center text-mb p-3 rounded-lg font-archivoBlack border-2 border-customYellow text-customYellow min-w-36 hover:opacity-75 hover:text-customBrown hover:border-customBrown transition-all duration-500 ease-in-out">NO</Button>
                            <Button onClick={logOut} styleProp="flex justify-center text-mb p-3 rounded-lg font-archivoBlack bg-customYellow text-white min-w-36 hover:opacity-75 hover:bg-customBrown transition-all duration-500 ease-in-out">YES</Button>
                        </div>
                    </section>
                </PopUp> 
                :
                false
            } 
            <main className="w-full h-full min-h-96 p-5 py-20 pb-32">
                <section className="flex flex-col gap-5">
                    <div className="bg-white w-full p-3 border-0.1 border-customBrownOpacityLow rounded-lg text-center shadow-md">
                        <h1 className="font-arimo font-extrabold text-xl">{username.name}</h1>
                        <p className="font-arimo font-bold text-customGray text-sm ">{username.email}</p>
                    </div>
                    <div className="bg-customBrown min-h-20 rounded-lg w-6/12 flex justify-center text-white hover:bg-customBrownOpacity cursor-pointer transition-all duration-1000 ease-in-out ">
                        <div className="w-1/12 border-r-0.2"></div>
                        <div className="w-10/12 p-5 ">
                            <h2 className="text-extrabold font-arimo  ">COUPON</h2>
                            <p className=" text-xs font-arimo" >Lorem ipsum dolor</p>
                        </div>
                        <div className="w-1/12 border-l-0.2"></div>
                    </div>
                </section>
                <section className="bg-white w-full px-2 py-5 border-0.1 border-customBrownOpacityLow flex gap-2 flex-col rounded-lg items-center shadow-md mt-20">
                    <ConfigOptions title="Personal Info" description="Are the personal info for use your account" onClick={activePopUp} />
                    <Line styleProp="w-11/12 h-0.3 bg-customBrown"/>
                    <ConfigOptions title="Cards" description="Are the cards registered in your account" onClick={activePopUp}/>
                    <Line styleProp="w-11/12 h-0.3 bg-customBrown"/>
                    <ConfigOptions title="Adress" description="Is your address for delivery of order" onClick={activePopUp}/>
                    <Line styleProp="w-11/12 h-0.3 bg-customBrown"/>
                    <ConfigOptions title="Your orders" description="Are your history of orders" onClick={activePopUp}/>
                    <Line styleProp="w-11/12 h-0.3 bg-customBrown"/>
                    <ConfigOptions title="Help" description="Tell us about your problem" onClick={activePopUp}/>
                    <Line styleProp="w-11/12 h-0.3 bg-customBrown"/>
                    <ConfigOptions title="To go out" description="Log out of your account" onClick={activePopUp}/>
                </section>
            </main> 
        </>
    )
}

export default Perfil