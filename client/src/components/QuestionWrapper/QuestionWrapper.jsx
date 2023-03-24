import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import axios from "axios";

import styles from "./QuestionWrapper.module.scss";

import { QuestionInner } from "../QuestionInner";

export const QuestionWrapper = () => {
  const [questions, setQuestions] = useState([]);
  let [path, setPath] = useState(1);

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
  console.log(path);
  return (
    <div className={styles.content}>
      <div className={styles.navigation}>
        {questions.map((item) => (
          <NavLink key={item.id} className={styles.number} to={`${path}`}>
            {item.id}
          </NavLink>
        ))}
      </div>
      <Routes>
        {questions.map((item) => (
          <Route
            key={item.id}
            path={`${path}`}
            element={<QuestionInner item={item} />}
          />
        ))}
      </Routes>
      <div onClick={() => setPath(++path)} className={styles.buttons}>
        Следующий вопрос
      </div>
    </div>
  );
};
