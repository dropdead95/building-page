import React from "react";

import styles from "./Gratitude.module.scss";

import { ContentWrapper } from "../ContentWrapper";
import { ArrowVariant, Calculator, Master } from "../../icons";
import { Basic } from "../Form";

export const Gratitude = () => {
  return (
    <ContentWrapper>
      <h1 className={styles.title}>
        Благодарим за участие в опросе! Ваши подарки здесь:
      </h1>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <p className={styles.text}>
            <Master /> Бесплатный выезд мастера на объект
          </p>
          <p className={styles.text}>
            <Calculator /> Расчет стоимости ремонта в 2-3 ценовых вариантах
          </p>
          <p>
            Бонусы будут закреплены за вашим номером телефона в течение 7 дней.{" "}
          </p>
          <ArrowVariant className={styles.arrow} />
        </div>
        <div className={styles.formWrapper}>
          <p className={styles.textForm}>
            Чтобы получить подарки, заполните пожалуйста форму
          </p>
          <Basic />
        </div>
      </div>
    </ContentWrapper>
  );
};
