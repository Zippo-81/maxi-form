import React from 'react';

const Checkbox = (props) => {
    return (
        <div className="form__group form__group--checkbox">
            <label htmlFor={props.id} className="form__checkbox">
                <input
                    type="checkbox"
                    id={props.id}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                />
                <span>{props.text}</span>
            </label>
            {(!props.error && !props.value && props.value !== '') && <div className="form__error">You must accept the policies</div>}
            {(!props.error && !props.value && props.value !== '') && <div className="form__error">You must accept the policies</div>}
        </div>
    );
};

export default Checkbox;