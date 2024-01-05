import InputMask from 'react-input-mask';

const cleanValue = (str, type)=>{if (type =="text") {return str.replace(/[^a-zA-Z\\s]/g, '');} else{return str.replace(/[^0-9]/g, '')}}

function InputApply({ text, value, mask, onChange, name, type, data_group}) { 

    function handleChange(event) {
        onChange({
            ...event, 
            target: {
                ...event.target,
                data_group, 
                name, 
                value: cleanValue(event.target.value, type)
            }
        })
    }
      
    return (
        <InputMask 
            data-group={data_group}
            placeholder={text} 
            value={value} 
            mask={mask} 
            className='bg-transparent px-5 py-3 border-2  outline-none focus:border-black text-lg text-opacity-80 font-semibold border-black border-opacity-70 w-full rounded-lg placeholder:text-opacity-60 placeholder:text-black placeholder:font-arimo placeholder:font-bold placeholder:text-xl' 
            onChange={handleChange} 
            name={name} 
            required
        />
    )   
} 
  
export default InputApply