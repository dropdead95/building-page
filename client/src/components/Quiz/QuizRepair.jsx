import React, {useState} from "react";
import styles from "./Quiz.module.scss";
import {quizData} from "../../mockData/quiz";




export const QuizRepair = () => {
    let [countQuestion, setCountQuestion] = useState(0)

    return <div>
        <div className={styles.container}>

            <div className={styles.body}>{quizData[0].repair[countQuestion].title}
                <button onClick={() => setCountQuestion(++countQuestion)}>fds</button>
                {quizData[0].repair.length}</div>

        </div>
    </div>
}