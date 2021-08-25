import React, {useState} from 'react';
import Input from "./Input";
import Select from "./Select";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import Button from "./Button";

import useFields from "../hooks/useFields";

const Form = () => {
    const name = useFields('',{nameLatin: true})
    const email= useFields('', {emailCorrect: true})
    const password = useFields('', {minLength: 6})
    const country = useFields('', {emptySelect: true})
    const gender = useFields('', {emptyRadio: true})
    const accept = useFields('', {checked: false})

    const [loading,setLoading] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        setLoading(true)

        setTimeout(()=> {
            setLoading(false)
        },10000)

        console.log({
            name: name.value,
            email: email.value,
            password: password.value,
            country: country.value,
            gender: gender.value,
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <p className="form__title">Create a new account</p>
            <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                value={name.value}
                onChange={name.onChange}
                error={name.valid.nameError}
            />
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email.value}
                onChange={email.onChange}
                error={email.valid.emailError}
            />
            <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password.value}
                onChange={password.onChange}
                error={password.valid.passLengthErr}
            />
            <Select
                name="country"
                options={[
                    { label: 'Select country', value: '' },
                    { label: 'Latvia', value: 'latvia' },
                    { label: 'Lebanon', value: 'lebanon' },
                    { label: 'Lesotho', value: 'lesotho' },
                    { label: 'Liberia', value: 'liberia' },
                    { label: 'Libya', value: 'libya' }
                ]}
                onChange={country.onChange}
                value={country.value}
            />
            <Radio
                name="gender"
                choices={[
                    { id: 'female', label: 'Female', value: 'female' },
                    { id: 'male', label: 'Male', value: 'male' }
                ]}
                onChange={gender.onChange}
                value={gender.value}
            />

            <Checkbox
                id="accept"
                name="accept"
                onChange={accept.onChange}
                value={accept.value}
                error={accept.valid.isCheck}
                text={<>Accept <a href="!#" className="form__link">terms</a> and <a className="form__link" href="!#">conditions</a></>}
            />

            <Button type="submit" title={!loading ? 'Sign up' : <div className="form__spinner spinner"></div>}
                    disabled={
                        !name.valid.inputValid ||
                        !email.valid.inputValid ||
                        !password.valid.inputValid ||
                        !country.valid.emptySelect ||
                        !gender.valid.emptyRadio ||
                        !accept.valid.isCheck
                    }
            />
        </form>
    );

};

export default Form