import React from 'react';


import styles from './NavigationEl.module.scss'




export const NavigationEl = ({id, setQuestionNumber, questionNumber}) => {
    const setNumber = (id, questionNumber) => {
        if(id <= questionNumber) {
            setQuestionNumber(--id)
        }
    }
    return (
        <div onClick={() => setNumber(id,questionNumber)} className={ id === questionNumber ? `${styles.normal} ${styles.active}`
            : id < questionNumber
                ? `${styles.normal} ${styles.passed}`
                : styles.normal}>
            {++id}
        </div>
    );
};

