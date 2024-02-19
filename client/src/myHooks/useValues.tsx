//REACT
import React, {useState, ChangeEvent} from "react"

//TYPES
import { stringObject } from "../types/types"

interface useValuesProps {
    defaultValue: stringObject
}

const useValues: React.FC<useValuesProps> = ({defaultValue}): any => {

    const [values, setValues] = useState<stringObject>(defaultValue)

    function setValuesInputs(event: ChangeEvent<HTMLInputElement>) {
        if (event && event.target) {
          setValues({
            ...values,
            [event.target.name]: event.target.value
          })
          return event;
        }
    }

    return [setValuesInputs]
}

export default useValues