import {useState} from "react";

const useOpen: (props: boolean) => [boolean, () => void] = (defaultValue) => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultValue)

    function activePopUp(){
        setIsOpen(!isOpen)
    }

    return [isOpen, activePopUp]
}

export default useOpen