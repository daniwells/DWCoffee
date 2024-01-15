import useState from "react"
import BooleanObject from '../../../types/types.ts'

interface useHistoryProps {
    startValue: BooleanObject
}

const useHistory = ({startValue}) => {

    const [addOrDelete, setAddOrDelete] = useState<BooleanObject>({startValue})
    
    addCourse(name: string){
        let exist = false
        Object.keys(addOrDelete).map((key) => { exist = key === name+1 ?  true : false})
    
        if(Object.keys(addOrDelete).length < 5 && exist===false){
            name = name.slice(0, -1)
            name = name + countButtons
            setAddOrDelete(prevState => ({...prevState, [name]:true}))
            setCountButtons(prevState => prevState + 1)
        }
    }
 
    decreaseCourse(proxButton: string){
        setAddOrDelete((prevState) => {
            const { [proxButton]: removedValue, ...rest } = prevState;
            
            return rest;
        });
        setCountButtons(prevState => prevState - 1)
        
    }
   
    setNewCourse(name:string){
        let falseOrTrue = false 

        const listKeys = Object.keys(addOrDelete)
        let buttonKey = listKeys.indexOf(name)
        let proxButton = listKeys[buttonKey+1] ? listKeys[buttonKey+1] : false
  
        falseOrTrue = addOrDelete[name]
        setAddOrDelete(prevState => ({...prevState, [name]: proxButton ? addOrDelete[name] : !addOrDelete[name]}))
                
        if(falseOrTrue){
            addCourse(name)
        }else{
            if(proxButton){
                decreaseCourse(proxButton)
                setAddOrDelete(prevState => ({...prevState, [name]: listKeys[buttonKey+2] ? addOrDelete[name] : true}))
            }
        }
    }

    return {history, setHistory, setNewCourse, decreaseCourse, addCourse}
    
}
