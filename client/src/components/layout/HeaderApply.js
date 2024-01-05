import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import Line from '../items/Line'

function HeaderApply(){
    return (
        <header className="bg-customBgHeaderApply min-h-20 flex flex-col drop-shadow-lg w-full" >
            <section className="flex items-center h-8/12 justify-center mt-4 ">
                <section className='w-2/4 flex items-center justify-center'><img src={logo} alt="logo"  className="max-h-32" /></section>
                <Link className='w-2/4 flex px-10 bg-customYellowOpacityLow p-3 rounded-s-xl border-s-2 border-t-2 border-b-2 border-customBrownDark cursor-pointer drop-shadow-xl hover:bg-customYellowLightOpacityLow hover:opacity-85 transition duration-500' to="/">
                    <section className='flex flex-col items-center space-y-1 ' >   
                        <div className=' bg-customBrownDark w-20 h-0.5'></div>
                        <p className='font-archivoBlack text-customBrownDark text-xl' >BACK</p>
                        <div className=' bg-customBrownDark w-20 h-0.5'></div>
                    </section>
                </Link>
            </section>
            <h1 className=" h-4/12 text-customBgApply font-archivoBlack text-3xl px-7 py-2 ">Apply Curriculum</h1>
            <section className="mt-3 flex flex-row">
                <Line  height='h-4' width='w-2/4' color='bg-customBrownLightOpacityLow'/>
                <Line height='h-4' width='w-2/4' color='bg-customBrownOpacityLow'/>
            </section>
        </header>
    )
}

export default HeaderApply