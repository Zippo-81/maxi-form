import React, {useState} from 'react';
import Options from "./Options";

const Select = (props) => {
    const [show, setShow] = useState(false)
    const [current, setCurrent] = useState('Select country')

    const handlerClick = (e) => {
        setCurrent(e)
        setShow(!show)
        props.onChange({
            name: 'SELECT',
            value: e
        })
    }

    return (
        <div className="form__group form__group--select">
            <div className={current === 'Select country' ? 'form__select' : 'form__select form__select--black'}
                 onClick={()=>setShow(!show)}>
                {current}
                <div className={!show ? 'form__arrow' : 'form__arrow form__arrow--change'}></div>
            </div>

            {show && <Options options={props.options} click={handlerClick}/>}
        </div>
    );
}

export default Select;