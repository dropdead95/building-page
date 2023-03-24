import React from "react";

import styles from "./QuizBuilding.module.scss";

import { Container } from "../Container";
import { QuestionWrapper } from "../QuestionWrapper";

export const QuizBuilding = () => {
  return (
    <section className={styles.wrapper}>
      <Container className={styles.quizContainer}>
        <p className={styles.info}>
          Выполним ремонт по договору за фиксированную цену и к указанному
          сроку. Гарантия до 5 лет.
        </p>
        <QuestionWrapper />
      </Container>
    </section>
  );
};
