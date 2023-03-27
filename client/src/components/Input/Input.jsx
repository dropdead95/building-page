import React, {useState} from "react";

import './Input.css'
import {useDispatch} from "react-redux";
import {setAnswer} from "../../bll/AnswerReducer";

export const Input = ({data}) => {
    const [value, setValue] = useState('')
    const setInputValue = (e) => {
         dispatch(setAnswer({title:data.answer, answer :e.currentTarget.value}))
        setValue('')
    }
    const dispatch = useDispatch()

    return <div className="text-field">
        <label className="text-field__label" htmlFor="username">{data.answer}</label>
        <input onBlur={setInputValue} onChange={e => setValue(e.currentTarget.value)} className="text-field__input" type="text" name="username" id="username"
               placeholder={data.answer} value={value}/>
    </div>
}