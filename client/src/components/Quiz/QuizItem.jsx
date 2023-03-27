import React from "react";
import styles from "./Quiz.module.scss";
import stylesForm from "../Form/Form.module.scss";
import {RadioButton} from "../RadioButton/RadioButton";
import {Field, Form, Formik} from "formik";
import {changeData} from "../../bll/quizReducer";
import {useDispatch} from "react-redux";
import {setAnswer} from "../../bll/AnswerReducer";


export const QuizItem = ({data, questionNumber}) => {
    const dispatch = useDispatch()
    const setData = (answer, id) => {
        // eslint-disable-next-line no-debugger

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
                        <Formik
                            initialValues={{
                                name: "",

                            }}
                            onSubmit={(value) => {
                                console.log(value)
                            }}
                        >
                            <Form className={stylesForm.form}>
                                <Field
                                    className={stylesForm.input}
                                    id={t.answer}
                                    name={t.answer}
                                    placeholder={t.answer}
                                    onChange={(e) => console.log(e.target.value)}
                                />
                            </Form>
                        </Formik>
                    </div>
                })}
            </div>
        }


    </div>
}