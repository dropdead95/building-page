import React from "react";
import  './RadionButton.scss'


export const RadioButton = ({text, checked}) => {


    return (
        <label  className="radio-label">
            <input
                className="radio-input"
                type="radio"
                name="radio"
                id="id"
                checked={checked}
                onClick={(e) => e.stopPropagation()}

            />
            <span className="custom-radio" />
            {text}

        </label>
    )
}