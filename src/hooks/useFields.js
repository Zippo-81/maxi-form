import {useState} from "react";

import validate from "../utils/validate";


const useFields = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const valid = validate(value, validations)

    const onChange = (e) => {

        if(e.name === 'SELECT') {
            setValue(e.value)
        } else if(e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
            setValue(e.target.checked)
        }  else {
            setValue(e.target.value)
        }
    }

    return {
        value,
        onChange,
        valid
    }
}

export default useFields