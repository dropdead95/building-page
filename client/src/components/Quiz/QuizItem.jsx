import React from "react";
import styles from "./Quiz.module.scss";
import {RadioButton} from "../RadioButton/RadioButton";
import {changeData} from "../../bll/quizReducer";
import {useDispatch} from "react-redux";
import {setAnswer} from "../../bll/AnswerReducer";


export const QuizItem = ({data, questionNumber}) => {
    const dispatch = useDispatch()
    const setData = (answer, id) => {

        dispatch(changeData({id, questionNumber}))
        dispatch(setAnswer({title: data.title, answer}))

    }
    return <div>
        <div>{data.title}</div>
        {data.input !== true ?
            <div className={styles.rowImage}>
                {data.answer.map((t, index) => {
                    return <div key={index}
                                onClick={() => setData(t.answer, t.id)}
                                className={styles.item}>{t.image.data !== null &&
                        <img src={'http://localhost:1337' + t.image.data[0].attributes.url} alt="image"/>}
                        <div className={styles.radioBtn}><RadioButton text={t.answer} checked={t.radioBTN}/></div>
                    </div>
                })}
            </div>
            :
            <div className={styles.rowImage}>
                {data.answer.map((t, index) => {
                    return <div key={index} className={styles.item}>
                        <input type="text"/>
                    </div>
                })}
            </div>
        }


    </div>
}