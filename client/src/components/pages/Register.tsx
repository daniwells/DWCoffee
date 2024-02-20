//REACT
import React, {ChangeEvent, useState} from "react"
import { FaFacebook, FaGoogle } from "react-icons/fa6"
import FacebookLogin from '@greatsumini/react-facebook-login'
/*import firebase from 'firebase/app'
import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";*/

//COMPONENTS
import BlurBox from '../items/registerAndLoginItems/BlurBox'
import Line from "../items/text/Line"
import style from './pages_css/RegisterAndLogin.module.css'
import InputRegister from "../items/inputs/Input"
import LinkButton from "../items//buttons/LinkButton"
import SubmitButton from "../items/buttons/SubmitButton"
import PopUp from "../items/PopUps/PopUpLogs"

//TYPES
import {stringObject} from '../../types/types'

//HOOKS
import useOpen from "../../myHooks/useOpen"

const Register: React.FC = () => {

    //API FIREBASE -> NÃO DELETAR   

    //////////////////////////////////////////////////////////
    /*const firebaseConfig = {
        apiKey: "AIzaSyA3Jqr1GWpjoqOIk8njpdNEGzSkQKMMKYA",
        authDomain: "dwcoffee-ad949.firebaseapp.com",
        projectId: "dwcoffee-ad949",
        storageBucket: "dwcoffee-ad949.appspot.com",
        messagingSenderId: "923142901787",
        appId: "1:923142901787:web:8156809bb0e1c82dece8be",
        measurementId: "G-9L8QMX4DC9"
    };
      
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const auth = firebase.auth();

    function handleGoogleLogin(){
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            firebase.auth().signInWithPopup(provider);
        // Usuário autenticado com sucesso usando o Google
        } catch (error) {
            console.error(error.message);
        }
    }*/
    //////////////////////////////////////////////////////////

    const [values, setValues] = useState<stringObject>({name:'',email:'',password:'',confirmPassword:''})
    const [isOpen, activePopUp] = useOpen(false)
    const [responseLog, setResponseLog] = useState<stringObject>({
        "message":"You was registered with success",
        "themeColor":"customGreenOpacity"
    })
    
    function setValuesInputs(event: ChangeEvent<HTMLInputElement>) {
        if (event && event.target) {
          setValues({
            ...values,
            [event.target.name]: event.target.value
          })
          return event;
        }
    }

    function responseFacebook(response: any){
        console.log(response)
    }

    function sendDatas(event: ChangeEvent<HTMLFormElement>){
        event.preventDefault()
        handleSubmit(values)
    }

    function handleSubmit(datas: {}){
        setTimeout(() => {
          fetch('http://127.0.0.1:5000/register_backend', { 
            method: "POST", 
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(datas)
          })
          .then(resp => resp.text())
          .then(data => {
            console.log(data)

            let themeColor = data === "User registered with success!! Make to login for access your account." ? "customGreenOpacity" : "customRedOpacity"
            setResponseLog({"message":data, "themeColor":themeColor})
            activePopUp()
        })
        }, 500)
            
    }

    function deactivePoPUp(){
        if(responseLog["themeColor"] === "customGreenOpacity"){
            window.location.href = "http://localhost:3000/login"
        }
        activePopUp()
    }

    return (
        <>
            <PopUp state={isOpen} themeColor={responseLog["themeColor"]} message={responseLog["message"]} onClick={deactivePoPUp}/>

            <main className={`${style['background_register']} bg-customBlack2 w-full py-20`} id="">
                <BlurBox widthProp="w-11/12" heightProp="min-h-96">
                    <section className="w-full bg-customWhiteOpacityLow rounded-xl z-10">
                        <Line styleProp="bg-customBrown w-full h-3 rounded-t-xl "/>
                        <form onSubmit={sendDatas} className="flex flex-col py-20 items-center justify-center gap-10">
                            <h1 className="text-center font-archivoBlack text-3xl text-customBlack2 mb-10" >REGISTER</h1>
                            <section className="flex flex-col gap-10" >
                                <InputRegister minLength={1} maxLength={255} styleProp="registerAndLogin" data_group="register" name="name" value={values.name} text="Name" permitionValues="text" onChange={setValuesInputs}/>
                                <InputRegister minLength={1} maxLength={255} styleProp="registerAndLogin" data_group="register" name="email" value={values.email} text="Email" permitionValues="all" onChange={setValuesInputs}/>
                                <InputRegister minLength={3} maxLength={30} styleProp="registerAndLogin" data_group="register" name="password" value={values.password} text="Password" permitionValues="all" onChange={setValuesInputs} type="password" />
                                <InputRegister minLength={3} maxLength={30} styleProp="registerAndLogin" data_group="register" name="confirmPassword" value={values.confirmPassword} text="Confirm Password" permitionValues="all" onChange={setValuesInputs} type="password"/>
                            </section>
                            <section className="flex flex-col items-center justify-center gap-10 ">
                                <LinkButton styleProp="transparent" text="Do you have an account?" to="/login" />
                                <SubmitButton value="Register" styleProp="brown_small"/>
                                <section className="flex gap-16">
                                    <section className="flex items-center justify-center border-customBlack2 opacity-75 border-opacity-80 px-2 py-2 border-2 rounded-xl cursor-pointer hover:opacity-100">
                                        <FacebookLogin
                                            appId="7331238983606063"
                                            autoLoad={false}
                                            fields="name,email"
                                            render={(renderProps) => (
                                                <FaFacebook className="text-blueFacebook w-10 h-10 " onClick={() => responseFacebook(renderProps)}/>
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

export default Register