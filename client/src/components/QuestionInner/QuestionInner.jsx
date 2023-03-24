import React from "react";

import styles from "./QuestionInner.module.scss";

export const QuestionInner = ({ item }) => {
  console.log(item);
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{item.attributes.title}</p>
      <div className={styles.content}>
        <div key={item.id} className={styles.answer}>
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img1?.data?.attributes?.url
            }
            alt=""
          />
        </div>
        <div key={item.id} className={styles.answer}>
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img2?.data?.attributes?.url
            }
            alt=""
          />
        </div>
        <div key={item.id} className={styles.answer}>
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img3.data?.attributes?.url
            }
            alt=""
          />
        </div>
        <div key={item.id} className={styles.answer}>
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item?.attributes?.img4.data?.attributes?.url
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
