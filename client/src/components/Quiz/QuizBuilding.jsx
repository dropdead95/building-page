import React from "react";

import styles from "./QuizBuilding.module.scss";

import { Container } from "../Container";
import { QuestionWrapper } from "../QuestionWrapper";
import { Pen } from "../../icons";

export const QuizBuilding = () => {
  return (
    <section className={styles.wrapper}>
      <Container className={styles.quizContainer}>
        <p className={styles.info}>
          ВЫПОЛНИМ РЕМОНТ по договору за фиксированную цену и к указанному
          сроку.
          <span>Гарантия до 5 лет.</span>
        </p>

        <QuestionWrapper />
        <div className={styles.buttons}>
          <button type="button" className={styles.btn}>
            <span className={styles.innerBtn}>
              Выполненные ремонты <Pen className={styles.pen} />
            </span>
          </button>
          <button type="button" className={styles.btn}>
            <span className={styles.innerBtn}>
              Полезные статьи по теме <Pen className={styles.pen} />
            </span>
          </button>
          <button type="button" className={styles.btn}>
            <span className={styles.innerBtn}>
              Выезд прораба на ваш объект <Pen className={styles.pen} />
            </span>
          </button>
        </div>
      </Container>
    </section>
  );
};
