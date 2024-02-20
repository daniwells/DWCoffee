//REACT
import React, {MouseEvent} from 'react'

//COMPONENTS
import Button from '../buttons/Button'
import Line from '../text/Line';

//STYLES
import { BiSolidMessageAltCheck } from "react-icons/bi";
import { MdError } from "react-icons/md";

interface PopUpProps{
    state: boolean,
    themeColor: string,
    message: string,
    onClick: (event: MouseEvent<HTMLButtonElement>) => any
}

const PopUpLogs: React.FC<PopUpProps> = ({state, themeColor, message, onClick}):any => {

    let responseText = themeColor === "customGreenOpacity" ? "Successful" : "Failed"


    if(state){
        return (
            <section className="flex fixed z-50 -top-1 bg-customBgBlackOpacityLow w-full h-full justify-center items-center ">
                <section className='flex flex-col bg-white min-w-80 w-10/12  justify-center items-center rounded-md'>
                    <Line styleProp={`h-3 w-full rounded-t-md bg-${themeColor}`}/>
                    <section className='flex flex-col p-5 px-10 mb-6 mt-6 items-center space-y-3' >
                        {responseText === "Successful" ? 
                            <BiSolidMessageAltCheck className={`text-${themeColor} w-32 h-32`}/>   
                            :
                            <MdError className={`text-${themeColor} w-32 h-32`}/>
                        }
                        <h2 className={`font-archivoBlack text-2xl text-${themeColor}`}>{responseText}</h2>
                        <p className="text-justify opacity-90 py-5">{message}</p>
                        <Button styleProp="bg-customYellow hover:bg-customBrown hover:opacity-80 text-white px-8 p-3 transition-all duration-400 ease-in-out" onClick={onClick}>BACK</Button>
                    </section>
                </section>
            </section>
        )
    }
}

export default PopUpLogs
