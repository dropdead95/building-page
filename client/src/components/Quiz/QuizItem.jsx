import React from "react";
import styles from "./Quiz.module.scss";
import {RadioButton} from "../RadioButton/RadioButton";

import {useDispatch} from "react-redux";
import {changeData} from "../../bll/quizReducer";
import {Input} from "../Input/Input";

export const QuizItem = ({ data, questionNumber, handleSetAnswer , objNumber}) => {
  const dispatch = useDispatch();
  const setData = (answer, id) => {
    // eslint-disable-next-line no-debugger

    dispatch(changeData({ id, questionNumber,objNumber }));
    handleSetAnswer(answer);
  };
  return (
    <div>
      <div>{data.title}</div>
      {data.input !== true ? (
        <div className={styles.rowImage}>
          {data.options.map((t, index) => {
            return (
              <div
                key={index}
                onClick={() => setData(t.answer, t.id)}
                className={styles.item}
              >
                {t.image.data !== null && (
                  <img
                    src={
                      "http://localhost:1337" + t.image.data[0].attributes.url
                    }
                    alt="image"
                  />
                )}
                <div className={styles.radioBtn}>
                  <RadioButton text={t.answer} checked={t.radioBTN} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.rowImage}>
          {data.options.map((t, index) => {
            return <Input key={index} data={t}/>
          })}
        </div>
      )}
    </div>
  );
};
