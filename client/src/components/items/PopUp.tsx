//REACT
import React from 'react'

interface PopUpProps{
    children: React.ReactNode,
    state: boolean,
    themeColor: string
}

const PopUp: React.FC<PopUpProps> = ({children, state, themeColor}):any => {
    
    if(state){
        return (
            <section className="flex fixed z-50 bg-customBgBlackOpacityLow w-screen h-screen justify-center">
                <section className='flex flex-col absolute bg-white min-w-80 w-10/12 min-h-40 justify-center items-center rounded-md  top-28'>
                    <div className={`bg-customBrown ${themeColor} h-10 w-full rounded-t-md`}></div>
                    <section className='flex flex-col p-5 px-10 mb-6 mt-6 items-center space-y-3' >
                        {children}
                    </section>
                </section>
            </section>
        )
    }
}

export default PopUp
