//REACT
import React, {useState, ChangeEvent} from "react"
import FacebookLogin from '@greatsumini/react-facebook-login'
import { FaFacebook, FaGoogle } from "react-icons/fa6"
//import firebase from 'firebase/app'
//import 'firebase/auth'
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics"; 

//COMPONENTS
import BlurBox from '../items/registerAndLoginItems/BlurBox'
import Line from "../items/text/Line"
import style from './pages_css/RegisterAndLogin.module.css'
import Input from "../items/inputs/Input"
import LinkButton from "../items//buttons/LinkButton"
import SubmitButton from "../items/buttons/SubmitButton"
import PopUpLogs from "../items/PopUps/PopUpLogs"

//TYPES
import { stringObject } from "../../types/types"

//HOOKS
import useOpen from "../../myHooks/useOpen";

const Login: React.FC = () => {

    const [values, setValues] = useState<stringObject>({email:'',password:''})
    const [isOpen, activePopUp] = useOpen(false)
    const [responseLog, setResponseLog] = useState<stringObject>({
        "message":"You was registered with success",
        "themeColor":"customGreenOpacity"
    })

    function responseFacebook(response: any){
        console.log(response)
    }

    function setValuesInputs(event: ChangeEvent<HTMLInputElement>) {
        if (event && event.target) {
          setValues({
            ...values,
            [event.target.name]: event.target.value
          })
          return event;
        }
    }

    function sendDatas(event: ChangeEvent<HTMLFormElement>){
        event.preventDefault()
        handleSubmit(values)
    }

    function handleSubmit(datas: {}){
        setTimeout(() => {
          fetch('http://127.0.0.1:5000/login_backend', { 
            method: "POST", 
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(datas),
            credentials: 'include' 
          })
          .then(resp => resp.text())
          .then(data => {
                console.log(data)

                let themeColor = data === "Login accomplished!!" ? "customGreenOpacity" : "customRedOpacity"
                setResponseLog({"message":data, "themeColor":themeColor})
                activePopUp()
          })
        }, 500)    
    }

    function deactivePopUp(){
        if(responseLog["themeColor"] === "customGreenOpacity"){
            window.location.href = "http://localhost:3000/"
        }
        activePopUp()
    }

    return (
        <>
            <PopUpLogs state={isOpen} themeColor={responseLog["themeColor"]} message={responseLog["message"]} onClick={deactivePopUp}/>
       
            <main className={`${style['background_login']} bg-customBlack2 w-full py-20`} id="">
                <BlurBox widthProp="w-11/12" heightProp="min-h-96">
                    <section className="w-full bg-customWhiteOpacityLow rounded-xl z-10">
                        <Line styleProp="bg-customBrown w-full h-3 rounded-t-xl "/>
                        <form onSubmit={sendDatas} className="flex flex-col py-20 px-14 items-center justify-center gap-10">
                            <h1 className="text-center font-archivoBlack text-3xl text-customBlack2 mb-10">LOGIN</h1>
                            <section className="flex flex-col gap-10" >
                                <Input minLength={1} maxLength={255} styleProp="registerAndLogin" data_group="PersonalDatas" value={values.email} name="email" text="Email" permitionValues="all" onChange={setValuesInputs} type="email" />
                                <Input minLength={3} maxLength={30} styleProp="registerAndLogin" data_group="PersonalDatas" name="password" value={values.password}  text="Password" permitionValues="all" type="password" onChange={setValuesInputs} />
                            </section>
                            <section className="flex flex-col items-center justify-center gap-10 ">
                                <section className="flex justify-between w-14/12 " >
                                    <LinkButton styleProp="transparent" text="Don't have an account?" to="/register" />
                                    <LinkButton styleProp="transparent" text="Forgot password?" to="/login" />
                                </section>
                                <SubmitButton value="Login" styleProp="brown_small"  />
                                <section className="flex gap-16">
                                    <section className="flex items-center justify-center border-customBlack2 opacity-75 border-opacity-80 px-2 py-2 border-2 rounded-xl cursor-pointer hover:opacity-100">
                                        <FacebookLogin
                                            appId="7331238983606063"
                                            autoLoad={false}
                                            fields="name,email"                                    
                                            render={(renderProps)=> (
                                                <FaFacebook className=" text-blueFacebook w-10 h-10" onClick={()=> responseFacebook(renderProps)}/>
                                            )}
                                        />
                                    </section>
                                    <section className="flex items-center justify-center border-customBlack2 opacity-75 border-opacity-80 px-2 py-2 border-2 rounded-xl cursor-pointer hover:opacity-100" >
                                        {/* <button onClick={handleGoogleLogin}>Login com o Google</button> */}
                                        <FaGoogle className="text-redGoogle w-10 h-10"></FaGoogle>
                                    </section>
                                </section>
                            </section>
                        </form>
                    </section>
                </BlurBox>
            </main>
        </>
    )
}

export default Login