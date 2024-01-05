import InputMask from 'react-input-mask';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";

function MaskedInput() { 

    return (
        <div className="my-20 p-5" > 
            <InputMask mask="999.999.999-99" className='bg-transparent px-5 py-3 border-2  outline-none focus:border-black text-lg text-opacity-80 font-semibold border-black border-opacity-70 w-full rounded-lg placeholder:text-opacity-60 placeholder:text-black placeholder:arimo placeholder:font-bold placeholder:text-xl'/>
        </div>
    )
}

export default MaskedInput