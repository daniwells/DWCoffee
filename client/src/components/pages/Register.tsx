import React from "react"
import BlurBox from '../items/registerAndLoginItems/BlurBox'
import Line from "../items/text/Line"
import style from './pages_css/RegisterAndLogin.module.css'
import InputRegister from "../items/inputs/Input"
import LinkButton from "../items//buttons/LinkButton"
import SubmitButton from "../items/buttons/SubmitButton"
import FacebookLogin, {ReactFacebookLoginInfo} from 'react-facebook-login'
//import firebase from 'firebase/app'
import 'firebase/auth'
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import { FaFacebook, FaGoogle } from "react-icons/fa6"

const Register: React.FC = ({}) => {

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

    function responseFacebook(response: ReactFacebookLoginInfo){
        console.log(response)
    }

    return (
        <main className={`${style['background_register']} bg-customBlack2 w-full py-20`} id="">
            <BlurBox widthProp="w-11/12" heightProp="min-h-96">
                <section className="w-full bg-customWhiteOpacityLow rounded-xl z-10">
                    <Line styleProp="bg-customBrown w-full h-3 rounded-t-xl "/>
                    <form className="flex flex-col py-20 px-14 items-center justify-center gap-10">
                        <h1 className="text-center font-archivoBlack text-3xl text-customBlack2 mb-10" >REGISTER</h1>
                        <section className="flex flex-col gap-10" >
                            <InputRegister styleProp="registerAndLogin" data_group="PersonalDatas" name="name" text="Name" type="text"/>
                            <InputRegister styleProp="registerAndLogin" data_group="PersonalDatas" name="name" text="Email" type="text"/>
                            <InputRegister styleProp="registerAndLogin" data_group="PersonalDatas" name="name" text="Password" type="text"/>
                            <InputRegister styleProp="registerAndLogin" data_group="PersonalDatas" name="name" text="Confirm Password" type="text"/>
                        </section>
                        <section className="flex flex-col items-center justify-center gap-10 ">
                            <LinkButton styleProp="transparent" text="Do you have an account?" to="/login" />
                            <SubmitButton value="Register" styleProp="brown_small"/>
                            <section className="flex gap-16">
                                <section className="flex items-center justify-center border-customBlack2 opacity-75 border-opacity-80 px-2 pt-2 py-1 border-2 rounded-xl cursor-pointer hover:opacity-100">
                                    <FacebookLogin
                                        appId="7331238983606063"
                                        autoLoad={false}
                                        fields="name,email"
                                        callback={responseFacebook}
                                        cssClass=""
                                        textButton={""}
                                        icon={<FaFacebook className=" text-blueFacebook w-10 h-10 " />}
                                    />
                                </section>
                                <section className="flex items-center justify-center border-customBlack2 opacity-75 border-opacity-80 px-2 pt-2 py-1 border-2 rounded-xl cursor-pointer hover:opacity-100" >
                                    {/* <button onClick={handleGoogleLogin}>Login com o Google</button> */}
                                    <FaGoogle className="text-redGoogle w-10 h-10"></FaGoogle>
                                </section>
                            </section>
                        </section>
                    </form>
                </section>
            </BlurBox>
        </main>
    )
}

export default Register