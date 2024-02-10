//REACT
import InputMask, {ReactInputMask} from 'react-input-mask';
import React, {ChangeEvent, useRef} from 'react';

interface InputApplyProps{
    text?: string,
    value?: string,
    mask?: string,
    onChange?: (event: InputApplyExtendChangeEvent ) => void;
<<<<<<< HEAD
    name?: string,
=======
    name: string,
>>>>>>> 9dd86f6ac5f3918ff2a15a0d682fde503e8bda43
    type?: string,
    data_group?: string,
    styleProp: string,
}
  
export interface InputApplyExtendChangeEvent extends ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & {
        data_group: string|undefined;
        name: string|undefined;
    };
}

const cleanValue = (str:string, type?:string) =>{
    if (type === "text") {
        return str.replace(/[^a-zA-Z\\s]/g, '')
    } 
    
    if(type === "all"){
        return str.replace(/[^a-zA-Z0-9]/g, '')
    }

    return str.replace(/[^0-9]/g, '')
}


const InputApply: React.FC<InputApplyProps> = ({text, value, mask, onChange, name, type, data_group, styleProp}) => { 
    
    const inputRef = useRef<ReactInputMask>(null);

    const styles: Record<string, string> = {
        'apply':'bg-transparent px-5 py-3 border-2 outline-none hover:border-black text-lg text-opacity-80 font-semibold border-black border-opacity-70 w-full rounded-lg placeholder:text-opacity-60 placeholder:text-black placeholder:font-arimo placeholder:font-bold placeholder:text-xl',
        'registerAndLogin':'bg-transparent px-3 py-1 border-b-2 outline-none hover:border-black text-lg font-semibold border-customBlack3 w-full placeholder:text-black opacity-90 hover:opacity-100 focus:opacity-100 text-opacity-100 placeholder:text-opacity-90 placeholder:font-arimo placeholder:font-bold placeholder:text-xl'
    }
        
    function handleChange(event: InputApplyExtendChangeEvent) {
        if(onChange){
<<<<<<< HEAD
            let dataGroup: string|null = data_group ? data_group : null
            name = name ? name : ''

=======
>>>>>>> 9dd86f6ac5f3918ff2a15a0d682fde503e8bda43
            onChange({
                ...event, 
                target:{
                    ...event.target,
<<<<<<< HEAD
                    data_group,
=======
                    data_group, 
>>>>>>> 9dd86f6ac5f3918ff2a15a0d682fde503e8bda43
                    name, 
                    value: cleanValue(event.target.value, type)
                }
            })
        }
    }
      
    return (
        <>
            <InputMask 
                ref={inputRef}
                data-group={data_group}
                placeholder={text}
                value={value}
                mask={mask ? mask : ''} 
                className={styles[styleProp]}
                onChange={handleChange} 
                name={name} 
                required
            />
        </>
    )   
} 
  
export default InputApply