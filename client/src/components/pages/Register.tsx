import React from "react"
import BlurBox from '../items/registerAndLoginItems/BlurBox'
import Line from "../items/text/Line"
//import background_register from '../images/background_register.png'
import style from './pages_css/RegisterAndLogin.module.css'
import Input from "postcss/lib/input"

const Register: React.FC = ({}) => {
    
    return (
        <main className={`${style['background_register']} bg-customBlack2 w-full `} id="">
            <BlurBox widthProp="w-11/12" heightProp="min-h-96">
                <section className="w-full bg-customWhiteOpacityLow p-5 flex flex-col align-center justify-center rounded-xl ">
                    <Line styleProp=""/>
                    <h1 className=" text-center font-archivoBlack text-2xl text-customBlack2 " >REGISTER</h1>
                    <Input  ></Input>
                </section>
            </BlurBox>
        </main>
    )
}

export default Register