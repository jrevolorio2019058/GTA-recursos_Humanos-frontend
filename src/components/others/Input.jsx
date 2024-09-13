import React from "react";

import "../others/others.css";

export const Input = ({

    field,
    label,
    placeholderText,
    value,
    onchangeHandler,
    type,
    classNameInput,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    ...restProps

}) => {

    const handleValueChange = (event) => {

        onchangeHandler(event.target.value, field);

    };

    const handleInputBlur = (event) => {

        onBlurHandler(event.target.value, field);

    };

    return(

        <>
        
            <div className="input-container">

                <input
                
                    type = {type}
                    value = {value}
                    onChange={handleValueChange}
                    onBlur={handleInputBlur}
                    className={classNameInput}
                    placeholder={placeholderText}
                    {...restProps}
                
                />

                <span>

                    {showErrorMessage && validationMessage}

                </span>

            </div>

        </>

    );

};