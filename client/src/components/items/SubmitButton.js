import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime"
import { Fragment as _Fragment } from "react/jsx-dev-runtime"

function SubmitButton({value, style, onClick}) {

    return ( 
        <> 
            <input type="submit" onClick={onClick} className={`p-4 cursor-pointer ${style}`}>{value}</input>
        </>
    )
} 

export default SubmitButton