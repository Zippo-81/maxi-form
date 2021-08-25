import React from 'react';

const Button = (props) => {
    return <button
        type={props.type}
        className={props.disabled ? 'form__btn' : 'form__btn form__btn--blue'}
        disabled={props.disabled}
    >{props.title}
    </button>
};

export default Button;