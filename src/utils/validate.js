import {useEffect, useState} from "react";

export default (value, validations) => {
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passLengthErr, setPassErr] = useState(false)
    const [emptySelect, setEmptySelect] = useState(false)
    const [emptyRadio, setEmptyRadio] = useState(false)
    const [isCheck, setCheck] = useState(false)

    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {

        for (const validation in validations) {
            switch(validation) {
                case 'nameLatin':
                    const name = /^[a-zA-Z]+$/i
                    name.test(String(value).toLowerCase()) ? setNameError(false) : setNameError(true)
                    break
                case 'emailCorrect':
                    const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    email.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break
                case 'minLength':
                    (value.length < validations[validation]) ? setPassErr(true) : setPassErr(false)
                    break
                case 'emptySelect':
                    value !== '' ? setEmptySelect(true) : setEmptySelect(false)
                    break
                case 'emptyRadio':
                    value !== '' ? setEmptyRadio(true) : setEmptyRadio(false)
                    break
                case 'checked':
                    !value ? setCheck(false) : setCheck(true)
                    break
                default: break
            }
        }
    },[value])


    useEffect(() => {
        if(nameError || emailError || passLengthErr || emptySelect || emptyRadio || isCheck) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    },[nameError,emailError,passLengthErr, emptySelect, emptyRadio, isCheck])

    return {
        nameError,
        emailError,
        passLengthErr,
        inputValid,
        emptySelect,
        emptyRadio,
        isCheck
    }
}

