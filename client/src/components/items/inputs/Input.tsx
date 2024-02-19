//REACT
import InputMask, {ReactInputMask} from 'react-input-mask';
import React, {ChangeEvent, useRef, useState} from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

//TYPES
import {stringObject} from '../../../types/types'

interface InputApplyProps{
    text: string,
    value?: string,
    mask?: string,
    onChange?: (event: InputApplyExtendChangeEvent) => void,
    name: string,
    permitionValues?: string,
    data_group: string,
    styleProp: string,
    type?: string
}
  
export interface InputApplyExtendChangeEvent extends ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & {
        data_group: string;
        name: string;
    };
}

const cleanValue = (str:string, permitionValues?:string) =>{
    if (permitionValues === "text") {
        return str.replace(/[^a-zA-Z\\s ]/g, '')
    } 
    
    if(permitionValues === "all"){
        return str.replace(/[^a-zA-Z0-9!@#$%¨&*()_=+-./*\\"']/g, '')
    }

    if(permitionValues === "email"){
        const regex: RegExp = /[a-zA-Z0-9]+((\.[a-zA-Z0-9]+|_[a-zA-Z0-9]+)+)?@([a-zA-Z0-9-_]+\.)+[a-zA-Z0-9-_]+/
        let isPattern: boolean = regex.test(str)

        if(isPattern){
            return str
        }
    }

    return str.replace(/[^0-9]/g, '')
}


const Input: React.FC<InputApplyProps> = ({text, value, mask, onChange, name, data_group, styleProp, permitionValues, type}) => { 
    
    const [useType, setUseType] = useState<string|undefined>(type)
    const [span, setSpan] = useState<boolean>(true)

    function changeType(){
        useType === "password" ? setUseType("text") : setUseType("password")
    }

    const inputRef = useRef<ReactInputMask>(null);

    const styles: Record<string, stringObject> = {
        'apply':{
            'section':'bg-transparent px-5 py-3 border-2 hover:border-black text-lg text-opacity-80 font-semibold border-black border-opacity-70 w-full rounded-lg',
            'input':'placeholder:text-opacity-60 placeholder:text-black placeholder:font-arimo placeholder:font-bold placeholder:text-xl'
        },
            
        'registerAndLogin':{
            'section':'bg-transparent py-1 border-b-2 hover:border-black text-lg font-semibold border-customBlack3 w-full opacity-90 hover:opacity-100 focus:opacity-100 text-opacity-100 placeholder:font-arimo placeholder:font-bold ',
            'input':'placeholder:text-black placeholder:text-opacity-90 placeholder:text-xl'
        },
        
    }
        
    function handleChange(event: InputApplyExtendChangeEvent) {
        if(onChange){
            onChange({
                ...event, 
                target:{
                    ...event.target,
                    data_group, 
                    name, 
                    value: cleanValue(event.target.value, permitionValues)
                }
            })
        }
    }

    function verifyEmail(){
        const regex: RegExp = /[a-zA-Z0-9]+((\.[a-zA-Z0-9]+|_[a-zA-Z0-9]+)+)?@([a-zA-Z0-9-_]+\.)+[a-zA-Z0-9-_]+/
        if(value && type === "email" ){
            let isPattern: boolean = regex.test(value)
            setSpan(isPattern)
        }
    }
    
    return (
        <>
            <section className={`${styles[styleProp]['section']} flex`}>
                <InputMask 
                    ref={inputRef}
                    type={useType}
                    data-group={data_group}
                    placeholder={text}
                    className={`bg-transparent border-none outline-none ${styles[styleProp]['input']}`}
                    value={value}
                    mask={mask ? mask : ''} 
                    onChange={handleChange} 
                    name={name} 
                    required
                    onBlur={verifyEmail}
                />
                {type === "password" ? useType === "password" ? <FaRegEye className='text-2xl cursor-pointer' onClick={changeType} /> : <FaRegEyeSlash className='text-2xl cursor-pointer' onClick={changeType}/> : false}
            </section>
            {span ?
                false
                :
                <span style={{ color: 'red', fontSize: '14px' }}>
                    Please, enter a valid email!!
                </span>
            }
        </>
        
    )   
} 
  
export default Input