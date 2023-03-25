import React from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";
/*
import styles from "./Form.module.scss";
*/
let answers = [
    {
        title: "fsfsafsa",
        answ: "dsadsa",
    },
    {
        title: "fsfsafsa",
        answ: "dsadsa",
    }]
/*
export const Basic = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(JSON.stringify(formData));

        axios.post(
            process.env.REACT_APP_API_URL + "/responses",
            {
                data: {
                    name: formData.get("name"),
                    phone: "fhui",
                    messenger: formData.get("messenger"),
                    answer: [
                        {
                            title: "fsfsafsa",
                            answ: "dsadsa",
                        },
                        {
                            title: "fsfsafsa",
                            answ: "dsadsa",
                        }]
                },
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input name="name" type="text"/>
            <input name="phone" type="text"/>
            <select name="messenger">
                <option>Telegram</option>
                <option>Whats-up</option>
                <option>Viber</option>
            </select>
            <button type="submit">Оставить заявку</button>
            <p>Ваши данные не будут переданы третьим лицам</p>
        </form>
    );
};
*/


export const Basic = () => (
    <div>
        <h1>Sign Up</h1>
        <Formik
            initialValues={{
                name: '',
                phone: '',
                messenger: '',
            }}
            onSubmit={(value) => {
                let  data=  {...value, answer: answers }
                console.log(data)
                axios.post(
                    process.env.REACT_APP_API_URL + "/responses",
                    {
                        data
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
            }}
        >
            <Form>
                <label htmlFor="name">First Name</label>
                <Field id="name" name="name" placeholder="Jane" />

                <label htmlFor="phone">Last Name</label>
                <Field id="phone" name="phone" placeholder="Doe" />

                <label htmlFor="messenger">Email</label>
                <Field
                    id="messenger"
                    name="messenger"
                    placeholder="jane@acme.com"
                    type="email"
                />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
);

