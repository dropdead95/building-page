import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import styles from "./QuestionWrapper.module.scss";
import { MenuButton } from "../MenuButton";
import { ContactForm } from "../ContactForm";
import { Calculator } from "../../icons";
import {NavigationEl} from "../NavigationEl";
import {getQuizQuestionsTC} from "../../bll/quizReducer";

export const QuestionWrapper = () => {
  let questions = useSelector(state => state.quiz)
  let initialData =useSelector(state => state.initialData.initialData)

  let [questionNumber, setQuestionNumber] = useState(1);

  const increaseCount = () => {
    setQuestionNumber(++questionNumber);
  };

  const decreaseCount = () => {
    setQuestionNumber(--questionNumber);
  };

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getQuizQuestionsTC())
  }, [])

  console.log(initialData)

  ;
  return (<>
    {initialData && <div className={styles.content}>
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
          <div className={styles.navigation}>{
            questions.map((item, index) => (
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
    </div>
      }
  </>)

};
