import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./QuestionWrapper.module.scss";
import { NavigationEl } from "../NavigationEl";
import { MenuButton } from "../MenuButton";
import { ContactForm } from "../ContactForm";
import { Calculator } from "../../icons";

export const QuestionWrapper = () => {
  const [questions, setQuestions] = useState([]);
  let [questionNumber, setQuestionNumber] = useState(1);

  const increaseCount = () => {
    setQuestionNumber(++questionNumber);
  };

  const decreaseCount = () => {
    setQuestionNumber(--questionNumber);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/questions?populate=*",
          {
            headers: {
              Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
            },
          }
        );
        setQuestions(res.data.data);
        console.log(questions);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(questions);
  // ХУЙ
  console.log(questionNumber);
  return (
    <div className={styles.content}>
      <div className={styles.buttonBlock}>
        <MenuButton
          className={styles.feature}
          title="Расчет стоимости в 2 вариантах"
        >
          <Calculator />
        </MenuButton>
        <MenuButton className={styles.feature} title="Бесплатный выезд прораба">
          <Calculator />
        </MenuButton>
        <MenuButton
          className={styles.feature}
          title="Следите за ремонтом онлайн"
        >
          <Calculator />
        </MenuButton>
      </div>
      <div className={styles.quizWrapper}>
        <ContactForm />
        <div className={styles.question}>
          <div className={styles.navigation}>
            {questions.map((item) => (
              <NavigationEl
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                id={item.id}
                key={item.id}
              />
            ))}
          </div>
          <div>ТЕЛО ВОПРОСА</div>
          <div className={styles.buttons}>
            <div onClick={increaseCount}>
              <MenuButton title="Следующий вопрос" className={styles.btn} />
            </div>
            {questionNumber > 1 && (
              <div onClick={decreaseCount}>
                <MenuButton title="Предыдущий вопрос" className={styles.btn} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
