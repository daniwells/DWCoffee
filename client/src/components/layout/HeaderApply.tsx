//REACT
import React from 'react'
import { Link } from 'react-router-dom'

//STYLE
import logo from '../images/logo.png'

//COMPONENTS
import Line from '../items/text/Line'

const HeaderApply = () => {
    return (
        <header className=" min-h-20 flex flex-col drop-shadow-xl w-full bg-customBgHeaderApply">
            <section className="flex items-center h-8/12 justify-center mt-4 ">
                <section className='w-2/4 flex items-center justify-center'><img src={logo} alt="logo"  className="max-h-32" /></section>
                <Link className='w-2/4 flex px-10 bg-customYellowOpacityLow p-3 rounded-s-xl border-s-0.3 border-t-0.3 border-b-0.3 border-customBrownDark cursor-pointer drop-shadow-xl hover:bg-customYellow hover:opacity-85 transition duration-500' to="/">
                    <section className='flex flex-col items-center space-y-1 ' >   
                        <div className=' bg-customBrownDark w-20 h-0.3'></div>
                        <p className='font-archivoBlack text-customBrownDark text-xl'>BACK</p>
                        <div className=' bg-customBrownDark w-20 h-0.3  '></div>
                    </section>
                </Link>
            </section>
            <h1 className=" h-4/12 text-customBgApply font-archivoBlack text-3xl px-7 py-2 ">Apply Curriculum</h1>
            <section className="mt-3 flex flex-row">
                <Line styleProp="h-2 w-2/4 bg-customYellowLight"/>
                <Line styleProp="h-2 w-2/4 bg-customBrown"/>
            </section>
        </header>
    )
}

export default HeaderApply