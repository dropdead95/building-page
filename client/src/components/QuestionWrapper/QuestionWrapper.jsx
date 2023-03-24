import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import axios from "axios";

import styles from "./QuestionWrapper.module.scss";



export const QuestionWrapper = () => {
  const [questions, setQuestions] = useState([]);


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

  return (
    <div className={styles.content}>
      <div className={styles.navigation}>
        {questions.map((item) => (
          <NavLink key={item.id} className={styles.number} to={`${path}`}>
            {item.id}
          </NavLink>
        ))}
      </div>

    </div>
  );
};
