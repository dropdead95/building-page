import React from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

import styles from "./Form.module.scss";
import {MenuButton} from "../MenuButton";
import {Lock} from "../../icons";
import {useSelector} from "react-redux";


export const Basic = () => {
    let answers = useSelector(state => state.answers.answer)


    return <div>
        <Formik
            initialValues={{
                name: "",
                phone: "",
                messenger: "",
            }}
            onSubmit={(value) => {
                console.log('hui')
                console.log(answers)
                let data = {...value, answer: answers};
                console.log(data);
                axios.post(
                    process.env.REACT_APP_API_URL + "/responses",
                    {
                        data,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
            }}
        >
            <Form className={styles.form}>
                <Field
                    className={styles.input}
                    id="name"
                    name="name"
                    placeholder="Ваше имя"
                />
                <Field
                    className={styles.input}
                    id="phone"
                    name="phone"
                    placeholder="Номер телефона"
                />
                <Field
                    className={styles.select}
                    as="select"
                    id="messenger"
                    name="messenger"
                    placeholder="Выберите мессенджер"
                >
                    <option defaultValue="Выберите мессенджер">
                        Выберите мессенджер
                    </option>
                    <option className={styles.option} value="viber">
                        Viber
                    </option>
                    <option className={styles.option} value="whats-up">
                        Whats-up
                    </option>
                    <option className={styles.option} value="telegram">
                        Telegram
                    </option>
                </Field>
                <MenuButton className={styles.btn} title="Оставить заявку"/>
            </Form>
        </Formik>
        <div className={styles.lockWrapper}>
            <Lock/>
            <p className={styles.text}>Ваши данные не будут переданы третьим лицам</p>
        </div>
    </div>
};
