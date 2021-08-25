import React from 'react';

const Radio = (props) => {
    return (
        <div className="form__group form__group--radio">
            {props.choices.map(choice => (
                <label htmlFor={choice.id} key={choice.id} className="form__radio">
                    <input
                        type="radio"
                        name={props.name}
                        id={choice.id}
                        value={choice.value}
                        onChange={props.onChange}
                    />
                    <span>{choice.label}</span>
                </label>
            ))}
        </div>
    );
};

export default Radio;