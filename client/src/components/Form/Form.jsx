import React from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";

import styles from "./Form.module.scss";
import { MenuButton } from "../MenuButton";
import { useSelector } from "react-redux";
import classNames from "classnames";

export const Basic = ({
  className,
  titleForm,
  classNameForm,
  classNameInput,
  classNameSelect,
  inputVariant,
  classNameForBtn,
  classNameForTextarea,
  btnText = "Оставить заявку",
  lockText,
}) => {
  let answers = useSelector((state) => state.answers.answer);

  return (
    <div className={className}>
      {titleForm && <p className={styles.titleForm}>{titleForm}</p>}
      <Formik
        initialValues={{
          name: "",
          phone: "",
          messenger: "",
        }}
        onSubmit={(value) => {
          console.log("hui");
          console.log(answers);
          let data = { ...value, answer: answers };
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
        <Form className={classNames(styles.form, classNameForm)}>
          <Field
            className={classNames(styles.input, classNameInput)}
            id="name"
            name="name"
            placeholder="Ваше имя"
          />
          <Field
            className={classNames(styles.input, classNameInput)}
            id="phone"
            name="phone"
            placeholder="Номер телефона"
          />
          <Field
            className={classNames(styles.select, classNameSelect)}
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

          {inputVariant && (
            <Field
              className={classNames(styles.input, classNameForTextarea)}
              as="textarea"
              id="question"
              name="question"
              placeholder="Ваш вопрос(необязательно)"
            />
          )}
          <MenuButton
            className={styles.btn}
            classNameForBtn={classNameForBtn}
            title={btnText}
            lockText={lockText}
          />
        </Form>
      </Formik>
      {/*<div className={styles.lockWrapper}>*/}
      {/*  <Lock />*/}
      {/*  <p className={styles.text}>*/}
      {/*    Ваши данные не будут переданы третьим лицам*/}
      {/*  </p>*/}
      {/*</div>*/}
    </div>
  );
};
