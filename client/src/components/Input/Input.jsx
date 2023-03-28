import React from "react";
import './Input.css'
import {useDispatch} from "react-redux";
import {setAnswer} from "../../bll/AnswerReducer";

export const Input = ({data}) => {

    const dispatch = useDispatch()

    return <div className="text-field">
        <label className="text-field__label" htmlFor="username">{data.answer}</label>
        <input onBlur={(e) => dispatch(setAnswer({title:data.answer, answer :e.currentTarget.value}))}  className="text-field__input" type="text" name="username" id="username"
               placeholder={data.answer}/>
    </div>
}