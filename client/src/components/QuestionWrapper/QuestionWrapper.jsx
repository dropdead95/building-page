import React, {useEffect, useState} from "react";
import axios from "axios";

import styles from "./QuestionWrapper.module.scss";
import {NavigationEl} from "../NavigationEl";
import {MenuButton} from "../MenuButton";



export const QuestionWrapper = () => {
  const [questions, setQuestions] = useState([]);
  let [questionNumber, setQuestionNumber] = useState(1);

  const increaseCount = () => {
    setQuestionNumber(++questionNumber)
  }

  const decreaseCount = () => {
    setQuestionNumber(--questionNumber)
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/questions?populate=*",
            {
              headers: {
                Authorization: `bearer 1726eddde48a0f8ee1a2b5ad4d00d8a7dae81294fdfda779339a8f7488073d899e4f50fc148a42e42ca7450f7b9e174e239abcb92862e92eb8feea931ec666b3a7a112272eaf5ce53c537f8fbb6126f9c502df4cc2083a9406dd432abf62bcf0f0b60a4ab5f143ea6199b9ac3cd2448ae76c084216543550f9f03b66ac221cc2`,
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
  console.log(questions)
  // ХУЙ
  console.log(questionNumber)
  return (
    <div className={styles.content}>
      <div className={styles.navigation}>
        {questions.map((item) => <NavigationEl questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} id={item.id} key={item.id} /> )}
      </div>
      <div className={styles.buttons}>
        <div onClick={increaseCount} >
          <MenuButton title='Следующий вопрос' className={styles.btn} />
        </div>
        {questionNumber > 1 && <div onClick={decreaseCount}>
          <MenuButton title='Предыдущий вопрос' className={styles.btn} />
        </div> }
      </div>

    </div>
  );
};
