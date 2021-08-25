import React from 'react';

const Options = (props) => {
    return (
        <div className="form__optionBlock">
            {props.options.filter(option => option.value !== '').map(option => (
                <div
                    className="form__optionItem"
                    key={option.value}
                    data-value={option.value}
                    onClick={(e)=>props.click(option.value)}
                >{option.label}</div>
            ))}
        </div>
    );
};

export default Options;