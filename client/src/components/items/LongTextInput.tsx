//REACT
import React, {ChangeEvent} from "react"

interface LongTextInputApplyProps{
    handleChange: (event: LongTextInputApplyExtendChangeEvent) => void;
    text: string,
    placeholder: string,
    data_group: string,
    name: string,
    style: string
}

interface LongTextInputApplyExtendChangeEvent extends ChangeEvent<HTMLTextAreaElement> {
    target: HTMLTextAreaElement & {
        data_group: string;
    }
}

const LongTextInputApply: React.FC<LongTextInputApplyProps> = ({handleChange, text, placeholder, data_group, name, style}) => {
    function sendValue(event: LongTextInputApplyExtendChangeEvent) {  
        handleChange({
            ...event, 
            target: {
                ...event.target, 
                data_group,
                name
            }    
        })
    }

   
    return (
        <section> 
            <textarea 
                data-group={data_group} 
                name="about" 
                onChange={sendValue} 
                cols={5} 
                rows={10} 
                placeholder={placeholder} 
                className={style}>
            </textarea>
            <p className='text-base font-arimo font-semibold text-justify w-full pr-10 pl-1'>{text}</p>
        </section>
    )
} 

export default LongTextInputApply