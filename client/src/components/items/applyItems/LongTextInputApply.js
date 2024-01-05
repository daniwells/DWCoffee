import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime"

function LongTextInputApply({handleChange, text, placeholder, data_group, name}) {
    function sendValue(event) {  
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
                cols="5" 
                rows="10" 
                placeholder={placeholder} 
                className='bg-transparent px-5 py-3 border-2 outline-none focus:border-black text-lg text-opacity-80 font-semibold border-black border-opacity-70 w-full rounded-lg placeholder:text-opacity-60 placeholder:text-black placeholder:arimo placeholder:font-bold placeholder:text-xl'>
            </textarea>
            <p className='text-base font-arimo font-semibold text-justify w-full pr-10 pl-1'>{text}</p>
        </section>
    )
} 

export default LongTextInputApply