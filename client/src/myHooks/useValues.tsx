//REACT
import {useState, ChangeEvent} from "react"

//TYPES
import { stringObject } from "../types/types"


const useValues: (defaultValue: stringObject) => [stringObject, (event: ChangeEvent<HTMLInputElement>) => ChangeEvent<HTMLInputElement> | undefined] = (defaultValue) => {

    const [values, setValues] = useState<stringObject>(defaultValue)

    function setValuesFunct(event: ChangeEvent<HTMLInputElement>) {
        if (event && event.target) {
          setValues({
            ...values,
            [event.target.name]: event.target.value
          })
          return event;
        }
    }

    return [values, setValuesFunct]
}

export default useValues