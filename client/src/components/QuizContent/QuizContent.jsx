import React from "react";

import styles from "./QuizContent.module.scss";

import { MenuButton, ContactForm, NavigationEl } from "../../components";
import { Calculator } from "../../icons";

export const QuizContent = ({
                              questionNumber,
                              questions,
                              setQuestionNumber,
                              increaseCount,
                              decreaseCount,
                            }) => {
  return (
      <>
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
              {questions?.map((item, index) => (
                  <NavigationEl
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      id={index}
                      key={index}
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
      </>
  );
};
