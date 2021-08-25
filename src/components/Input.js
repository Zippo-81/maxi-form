import React from 'react';

const Input = (props) => {
    return (
        <div className="form__group form__group--name">
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                className="form__input"
                autoComplete="off"
            />
            {(props.error && props.type === 'text' && props.value !== '') && <div className="form__error">Please enter a valid name</div>}
            {(props.error && props.type === 'email' && props.value !== '') && <div className="form__error">Please enter a valid email address</div>}
            {(props.error && props.type === 'password' && props.value !== '') && <div className="form__error">Password must contain at least 6 symbols</div>}
        </div>
    );
};

export default Input;