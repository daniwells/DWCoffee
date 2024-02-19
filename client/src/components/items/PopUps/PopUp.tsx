//REACT
import React from 'react'

interface PopUpProps{
    state: boolean,
    children: React.ReactNode
}

const PopUpLogs: React.FC<PopUpProps> = ({state, children}):any => {

    if(state){
        return (
            <section className="flex fixed z-50 -top-1 bg-customBgBlackOpacityLow w-full h-full justify-center items-center ">
                <section className='flex flex-col bg-white min-w-80 w-10/12 justify-center items-center rounded-md'>
                   {children}
                </section>
            </section>
        )
    }
}

export default PopUpLogs
